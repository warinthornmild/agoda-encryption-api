import dotenv from 'dotenv';

dotenv.config();

const configs = {
  PORT: process.env.PORT || 7000,
  ENCRYPT_KEY: process.env.ENCRYPT_KEY || 'some-key',
};

export default configs;
