import { Account } from "../../domain";

export interface GetAccountByIdRespository {
    getById(id: string): Promise<Account>;
}
