import { PatchAccount, PatchAccountInput } from "../../domain/usecases/patch-account";
import { GetAccountByIdRespository } from "../protocols";

export class ServicePatchAccount implements PatchAccount {
    constructor(private readonly getAccountByIdRepository: GetAccountByIdRespository) {}

    async execute(sellerId: string, parms: PatchAccountInput): Promise<boolean> {
        const account = await this.getAccountByIdRepository.getById(sellerId);
        return true;
    }
}

/*
TODO:
- [ ] Should return false if account does not exist
- [ ] Should Implements patch in account
- [ ] Should return true when patch is successful.
*/
