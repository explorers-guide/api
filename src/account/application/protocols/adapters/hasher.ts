export default interface Hasher {
    hash(password: string): Promise<string>;
}
