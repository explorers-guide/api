// eslint-disable-next-line max-classes-per-file
import Account from "../../../../domain/entity/account";
import CheckAccountByEmailRespository from "../../../protocols/check-account-by-email-repository";
import CreateUUID from "../../../protocols/create-uuid";
import Hasher from "../../../protocols/hasher";
import SaveNewAccountRepository from "../../../protocols/save-new-account-repository";

export const accountStub = {
    name: "Daniel",
    nickname: "b4rba",
    password: "123456",
    email: "daniel@email.com",
};

export const uuidStub = "74bb9e56-8581-4991-ac38-4e1cda9b8ac5";
export class CheckByEmailErrorStub implements CheckAccountByEmailRespository {
    email!: string;
    readonly result = true;
    async checkByEmail(email: string): Promise<boolean> {
        this.email = email;
        return this.result;
    }
}

export class CheckByEmailStub implements CheckAccountByEmailRespository {
    email!: string;
    readonly result = false;
    async checkByEmail(email: string): Promise<boolean> {
        this.email = email;
        return this.result;
    }
}

export class HasherStub implements Hasher {
    password!: string;
    async hash(password: string): Promise<string> {
        this.password = password;
        return "password-hashed";
    }
}

export class CreateUUIDStub implements CreateUUID {
    async generate(): Promise<string> {
        return uuidStub;
    }
}

export class SaveNewAccountRepositoryStub implements SaveNewAccountRepository {
    account!: Account;
    async save(account: Account): Promise<boolean> {
        this.account = account;
        return true;
    }
}
