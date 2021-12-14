import { User } from "./user";

export class Account {
    constructor(readonly id: string, readonly user: User) {}
}
