import DecryptService from "../../../services/decrypt";
import { AES } from 'crypto-ts';

jest.mock('crypto-ts');

describe("DecryptService", () => {
  describe("decrypt", () => {
    it("should decrypt text successfully", () => {
      const decryptService = new DecryptService();
      const mockEncrypted = 'U2FsdGVkX1+jo8I7RBUmyPlmXj8V7TxVGv9FnWrK5hA=';
      const expected = `decrypted-${mockEncrypted}`;

      AES.decrypt = jest.fn().mockImplementation((text) => (`decrypted-${text}`))

      expect(decryptService.decrypt(mockEncrypted)).toBe(expected);
    })
  });

  describe("decryptTextList", () => {
    it("should decrypt all text successfully", () => {
      const decryptService = new DecryptService();
      const mockEncryptedList = [
        { encrypted: 'U2FsdGVkX1=' },
        { encrypted: 'U2FsdGVkX1=' }
      ];
      const mockHex = 646563727970746564;

      AES.decrypt = jest.fn().mockImplementation((text) => (`decrypted-${text}`))

      decryptService.decryptTextList(mockEncryptedList)
      expect(AES.decrypt).toHaveBeenCalledTimes(2);
    })
  });
});
