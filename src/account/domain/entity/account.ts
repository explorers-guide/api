import User from "./user";

export default class Account {
    constructor(readonly id: string, readonly user: User) {}
}
