import { Account, GetAccount } from "../../../domain";
import { GetAccountByIdRespository } from "../../protocols";

export class ServiceGetAccount implements GetAccount {
    constructor(private readonly getAccountByIdRepository: GetAccountByIdRespository) {}

    async execute(id: string): Promise<Account> {
        const account = await this.getAccountByIdRepository.getById(id);
        return account;
    }
}
