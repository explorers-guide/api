import Account from "../entity/account";

export default interface GetAccount {
    get(id: string): Promise<Account>;
}
