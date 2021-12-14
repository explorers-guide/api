import { Account } from "../../../domain/entity/account";

export interface SaveNewAccountRepository {
    save(account: Account): Promise<boolean>;
}
