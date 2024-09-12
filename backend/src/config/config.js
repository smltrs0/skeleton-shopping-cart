import dotenv from 'dotenv';

dotenv.config();

const config = {
    externalApiBaseUrl: process.env.EXTERNAL_API_BASE_URL || 'https://api.example.com',
    PublicKeyWompie: process.env.PUBLIC_KEY_WOMPIE || 'public_key_wompie',
};

export { config };