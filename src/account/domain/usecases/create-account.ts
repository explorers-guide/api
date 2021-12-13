import User from "../entity/user";

export interface CreateAccountInput {
    user: User;
}

export interface CreateAccount {
    execute(input: CreateAccountInput): Promise<boolean>;
}
