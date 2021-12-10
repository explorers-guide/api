import Account from "../entity/account";

export default interface UpdateAccount {
    update(account: Account): Promise<boolean>;
}
