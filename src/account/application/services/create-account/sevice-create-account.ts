import Account from "../../../domain/entity/account";
import User from "../../../domain/entity/user";
import {
    CreateAccount,
    CreateAccountInput,
} from "../../../domain/usecases/create-account";
import CreateUUID from "../../protocols/adapters/create-uuid";
import Hasher from "../../protocols/adapters/hasher";
import CheckAccountByEmailRespository from "../../protocols/repositories/check-account-by-email-repository";
import SaveNewAccountRepository from "../../protocols/repositories/save-new-account-repository";

export default class ServiceCreateAccount implements CreateAccount {
    constructor(
        private readonly checkAccountByEmailRepository: CheckAccountByEmailRespository,
        private readonly saveNewAccountRepository: SaveNewAccountRepository,
        private readonly hasher: Hasher,
        private readonly createUUID: CreateUUID
    ) {}

    async execute(input: CreateAccountInput): Promise<boolean> {
        const { password, email, nickname, name } = input.user;
        const hasAccount =
            await this.checkAccountByEmailRepository.checkByEmail(email);
        let isValid = false;
        if (!hasAccount) {
            const hashedPassword = await this.hasher.hash(password);
            const newUser = new User(name, nickname, hashedPassword, email);
            const accountId = await this.createUUID.generate();
            const newAccount = new Account(accountId, newUser);
            isValid = await this.saveNewAccountRepository.save(newAccount);
        }

        return isValid;
    }
}
