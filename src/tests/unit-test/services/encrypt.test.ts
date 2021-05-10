import EncryptService from "../../../services/encrypt";
import { AES } from 'crypto-ts';

jest.mock('crypto-ts');

describe("EncryptService", () => {
  describe("encrypt", () => {
    it("should encrypt text successfully", () => {
      const encryptService = new EncryptService();
      const mockText = 'How are you?';
      const expected = `encrypted-${mockText}`;

      AES.encrypt = jest.fn().mockImplementation((text) => (`encrypted-${text}`))

      expect(encryptService.encrypt(mockText)).toBe(expected);
    })
  });

  describe("encryptTextList", () => {
    it("should encrypt all text successfully", () => {
      const encryptService = new EncryptService();
      const mockTextList = [{ text: 'How are you?' }, { text: 'Who are you?' }];
      const expected = [
        { encrypted: `encrypted-${mockTextList[0].text}` },
        { encrypted: `encrypted-${mockTextList[1].text}` }
      ];

      AES.encrypt = jest.fn().mockImplementation((text) => (`encrypted-${text}`))

      expect(encryptService.encryptTextList(mockTextList)).toStrictEqual(expected);
    })
  });
});
