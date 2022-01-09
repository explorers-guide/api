export interface CheckAccountByEmailRespository {
    checkByEmail(email: string): Promise<boolean>;
}
