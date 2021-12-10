import CreateAccountInput from "../dto/create-account-input";
import CheckAccountByEmailRespository from "../protocols/check-account-by-email-repository";

export default class ServiceCreateAccount {
    constructor(
        private readonly checkAccountByEmailRepository: CheckAccountByEmailRespository
    ) {}

    async execute(input: CreateAccountInput) {
        const exist = await this.checkAccountByEmailRepository.checkByEmail(
            input.email
        );
        let isValid = false;
        if (!exist) isValid = true;
        return isValid;
    }
}
