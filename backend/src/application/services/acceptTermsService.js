import externalApiClientWompi from "../../infrastructure/http/externalApiClientWompi.js";
import { config } from '../../config/config.js';

export async function acceptTerms() {

    try {
        const response = await externalApiClientWompi.get(`/merchants/${config.PublicKeyWompie}`);
        
        if(response.status !== 200) {
            throw new Error('Error accepting terms' + response.data);
        }

        const data = response.data;

        return data.data.presigned_acceptance.acceptance_token;

    } catch (error) {
        throw new Error('Error accepting terms ' + error);
    }
}