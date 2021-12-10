import CheckAccountByEmailRespository from "../../../protocols/check-account-by-email-repository";

export class CheckByEmailErrorSpy implements CheckAccountByEmailRespository {
    email!: string;
    readonly result = true;
    async checkByEmail(email: string): Promise<boolean> {
        this.email = email;
        return this.result;
    }
}
