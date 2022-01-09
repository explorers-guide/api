import { GetAccountByIdRepositoryStub } from "../get-account/mocks/service-get-account-mocks";
import { ServicePatchAccount } from "./service-patch-account";

describe("Service Patch Account", () => {
    const getAccountByIdRepositoryStub = new GetAccountByIdRepositoryStub();
    const sut = new ServicePatchAccount(getAccountByIdRepositoryStub);
    const idMock = "74bb9e56-8581-4991-ac38-4e1cda9b8ac5";
    const accountPatchMock = {
        user: {
            nickname: "b4rba2",
        },
    };

    test("should call GetAccountByIdRepository with values corrects", async () => {
        const repositorySpy = jest.spyOn(getAccountByIdRepositoryStub, "getById");
        await sut.execute(idMock, accountPatchMock);
        expect(repositorySpy).toHaveBeenCalledWith(idMock);
    });
});
