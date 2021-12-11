import Account from "../../domain/entity/account";

export default interface SaveNewAccountRepository {
    save(account: Account): Promise<boolean>;
}
