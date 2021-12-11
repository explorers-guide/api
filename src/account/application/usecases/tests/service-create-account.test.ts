import ServiceCreateAccount from "../sevice-create-account";
import {
    CheckByEmailErrorSpy,
    CheckByemailSpy,
    CreateUUIDSpy,
    HasherSpy,
    SaveNewAccountRepositorySpy,
} from "./mocks/service-create-account-mocks";

const fakeAccount = {
    name: "Daniel",
    nickname: "b4rba",
    password: "123456",
    email: "daniel@email.com",
};
describe("Create Account", () => {
    test("should return false when there is an account with the same email address", async () => {
        const sut = new ServiceCreateAccount(
            new CheckByEmailErrorSpy(),
            new SaveNewAccountRepositorySpy(),
            new HasherSpy(),
            new CreateUUIDSpy()
        );
        const promise = await sut.execute(fakeAccount);
        expect(false).toBe(promise);
    });

    test("should return true when create a new account", async () => {
        const sut = new ServiceCreateAccount(
            new CheckByemailSpy(),
            new SaveNewAccountRepositorySpy(),
            new HasherSpy(),
            new CreateUUIDSpy()
        );
        const promise = await sut.execute(fakeAccount);
        expect(true).toBe(promise);
    });
});
