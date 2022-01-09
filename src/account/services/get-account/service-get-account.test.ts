import { uuidStub } from "../create-account/mocks/service-create-account-mocks";
import { GetAccountByIdRepositoryStub } from "./mocks/service-get-account-mocks";
import { ServiceGetAccount } from "./service-get-account";

const getAccountByIdRepositoryStub = new GetAccountByIdRepositoryStub();

describe("Get Account", () => {
    const sut = new ServiceGetAccount(getAccountByIdRepositoryStub);

    test("should call GetAccountByIdRespository with corretc values ", async () => {
        const getAccountSpy = jest.spyOn(getAccountByIdRepositoryStub, "getById");
        await sut.execute(uuidStub);
        expect(getAccountSpy).toHaveBeenCalledWith(uuidStub);
    });

    test("should throw if execute throws", async () => {
        jest.spyOn(sut, "execute").mockResolvedValueOnce(new Promise((resolve, reject) => reject(new Error())));

        const promise = sut.execute(uuidStub);
        await expect(promise).rejects.toThrow();
    });
});
