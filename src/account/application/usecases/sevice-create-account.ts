import Account from "../../domain/entity/account";
import CreateAccountInput from "../dto/create-account-input";
import CheckAccountByEmailRespository from "../protocols/check-account-by-email-repository";
import CreateUUID from "../protocols/create-uuid";
import Hasher from "../protocols/hasher";
import SaveNewAccountRepository from "../protocols/save-new-account-repository";

export default class ServiceCreateAccount {
    constructor(
        private readonly checkAccountByEmailRepository: CheckAccountByEmailRespository,
        private readonly saveNewAccountRepository: SaveNewAccountRepository,
        private readonly hasher: Hasher,
        private readonly createUUID: CreateUUID
    ) {}

    async execute(input: CreateAccountInput): Promise<boolean> {
        const hasAccount =
            await this.checkAccountByEmailRepository.checkByEmail(input.email);
        let isValid = false;
        if (!hasAccount) {
            const accountId = await this.createUUID.generate();
            const hashedPassword = await this.hasher.hash(input.password);
            const newAccount = new Account(accountId, {
                ...input,
                password: hashedPassword,
            });
            isValid = await this.saveNewAccountRepository.save(newAccount);
        }

        return isValid;
    }
}
