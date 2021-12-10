export default interface DeleteAccount {
    delete(id: string): Promise<boolean>;
}
