import { Account } from "../../domain";

export interface SaveNewAccountRepository {
    save(account: Account): Promise<boolean>;
}
