import Account from "../account";
import { accountMock } from "./mocks/account-mock";

describe("account", () => {
    it("should return account", () => {
        const sut = new Account(accountMock.id, accountMock.user);
        expect(accountMock).toEqual(sut);
    });
});
