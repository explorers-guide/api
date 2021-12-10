export default interface CheckAccountByEmailRespository {
    checkByEmail(email: string): Promise<boolean>;
}
