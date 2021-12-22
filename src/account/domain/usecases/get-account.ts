import { Account } from "..";

export interface GetAccount {
    execute(id: string): Promise<Account>;
}
