import { Encrypted } from '../../entities/encrypted.interface';
import { Text } from '../../entities/text.interface';
import configs from '../../configs';
import { AES } from 'crypto-ts';

const ENCRYPT_KEY = configs.ENCRYPT_KEY

export interface IEncryptService {
  encrypt(text: string): string
  encryptTextList(data: Text[]): Encrypted[]
};

class EncryptService implements IEncryptService {
  encrypt(text: string): string {
    let encryptedText = AES.encrypt(text, ENCRYPT_KEY).toString();
    return encryptedText;
  }

  encryptTextList(data: Text[]): Encrypted[] {
    const encryptedData = data.map(({ text }) => ({ encrypted: this.encrypt(text) }));

    return encryptedData;
  }
}

export default EncryptService;
