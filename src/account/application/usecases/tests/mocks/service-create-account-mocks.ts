// eslint-disable-next-line max-classes-per-file
import Account from "../../../../domain/entity/account";
import CheckAccountByEmailRespository from "../../../protocols/check-account-by-email-repository";
import CreateUUID from "../../../protocols/create-uuid";
import Hasher from "../../../protocols/hasher";
import SaveNewAccountRepository from "../../../protocols/save-new-account-repository";

export class CheckByEmailErrorSpy implements CheckAccountByEmailRespository {
    email!: string;
    readonly result = true;
    async checkByEmail(email: string): Promise<boolean> {
        this.email = email;
        return this.result;
    }
}

export class CheckByemailSpy implements CheckAccountByEmailRespository {
    email!: string;
    readonly result = false;
    async checkByEmail(email: string): Promise<boolean> {
        this.email = email;
        return this.result;
    }
}

export class HasherSpy implements Hasher {
    password!: string;
    async hash(password: string): Promise<string> {
        this.password = password;
        return "password-hashe";
    }
}

export class CreateUUIDSpy implements CreateUUID {
    async generate(): Promise<string> {
        return "74bb9e56-8581-4991-ac38-4e1cda9b8ac5";
    }
}

export class SaveNewAccountRepositorySpy implements SaveNewAccountRepository {
    account!: Account;
    async save(account: Account): Promise<boolean> {
        this.account = account;
        return true;
    }
}
