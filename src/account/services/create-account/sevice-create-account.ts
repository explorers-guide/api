import { CreateAccount, CreateAccountInput, User, Account } from "../../domain";
import { CheckAccountByEmailRespository, CreateUUID, Hasher, SaveNewAccountRepository } from "../protocols";

export class ServiceCreateAccount implements CreateAccount {
    constructor(
        private readonly checkAccountByEmailRepository: CheckAccountByEmailRespository,
        private readonly saveNewAccountRepository: SaveNewAccountRepository,
        private readonly hasher: Hasher,
        private readonly createUUID: CreateUUID
    ) {}

    async execute(input: CreateAccountInput): Promise<boolean> {
        const { password, email, nickname, name } = input.user;
        const hasAccount = await this.checkAccountByEmailRepository.checkByEmail(email);
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
