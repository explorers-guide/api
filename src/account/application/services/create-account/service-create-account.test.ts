import {
    CheckByEmailErrorStub,
    CheckByEmailStub,
    CreateUUIDStub,
    accountStub,
    HasherStub,
    SaveNewAccountRepositoryStub,
} from "./service-create-account-mocks";
import ServiceCreateAccount from "./sevice-create-account";

const hasherStub = new HasherStub();
const checkByemailErrorStub = new CheckByEmailErrorStub();
const checkByEmailStub = new CheckByEmailStub();
const createUUIDStub = new CreateUUIDStub();
const saveNewAccountRespositoryStub = new SaveNewAccountRepositoryStub();

const sut = new ServiceCreateAccount(
    checkByEmailStub,
    saveNewAccountRespositoryStub,
    hasherStub,
    createUUIDStub
);

const sutErrorEmail = new ServiceCreateAccount(
    checkByemailErrorStub,
    saveNewAccountRespositoryStub,
    hasherStub,
    createUUIDStub
);

describe("Create Account", () => {
    test("should return false when there is an account with the same email address", async () => {
        const promise = await sutErrorEmail.execute(accountStub);
        expect(false).toBe(promise);
    });

    test("should call Hasher with correct password", async () => {
        const hasherSpy = jest.spyOn(hasherStub, "hash");
        await sut.execute(accountStub);
        expect(hasherSpy).toHaveBeenCalledWith("123456");
    });

    test("should throw if Hasher throws", async () => {
        jest.spyOn(hasherStub, "hash").mockResolvedValueOnce(
            new Promise((resolve, reject) => reject(new Error()))
        );

        const promise = sut.execute(accountStub);
        await expect(promise).rejects.toThrow();
    });

    test("should return true when create a new account", async () => {
        const promise = await sut.execute(accountStub);
        expect(true).toBe(promise);
    });
});
