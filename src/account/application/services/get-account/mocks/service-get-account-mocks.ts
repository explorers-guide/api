import { Account } from "../../../../domain";
import { GetAccountByIdRespository } from "../../../protocols";

export const uuidStub = "74bb9e56-8581-4991-ac38-4e1cda9b8ac5";

export const accountStub = {
    id: "74bb9e56-8581-4991-ac38-4e1cda9b8ac5",
    user: {
        name: "Daniel",
        nickname: "b4rba",
        password: "123456",
        email: "daniel@email.com",
    },
};

export class GetAccountByIdRepositoryStub implements GetAccountByIdRespository {
    id!: string;
    async getById(id: string): Promise<Account> {
        this.id = id;
        return accountStub;
    }
}
