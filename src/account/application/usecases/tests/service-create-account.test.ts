import ServiceCreateAccount from "../sevice-create-account";
import { CheckByEmailErrorSpy } from "./mocks/service-create-account-mocks";

describe("Create Account", () => {
    test("should return false when there is already a registered", async () => {
        const fakeAccount = {
            name: "Daniel",
            nickname: "b4rba",
            password: "123456",
            email: "daniel@email.com",
        };

        const sut = new ServiceCreateAccount(new CheckByEmailErrorSpy());
        const promise = await sut.execute(fakeAccount);
        expect(false).toBe(promise);
    });
});
