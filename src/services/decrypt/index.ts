import { Encrypted } from '../../entities/encrypted.interface';
import { Text } from '../../entities/text.interface';
import configs from '../../configs';
import { AES, enc } from 'crypto-ts';

const ENCRYPT_KEY = configs.ENCRYPT_KEY;

export interface IDecryptService {
  decrypt(text: string): string
  decryptTextList(data: Encrypted[]): Text[]
};

class DecryptService implements IDecryptService {

  decrypt(text: string): string {
    const encryptedText = AES.decrypt(text, ENCRYPT_KEY).toString();
    return encryptedText;
  }

  decryptTextList(data: Encrypted[]): Text[] {
    const decryptedData = data.map(
      ({ encrypted }) => ({ text: Buffer.from(this.decrypt(encrypted), 'hex').toString() })
    );

    return decryptedData;
  }
}

export default DecryptService;
