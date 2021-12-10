import Account from "../entity/account";

export default interface CreateAccount {
    create(account: Account): Promise<boolean>;
}
