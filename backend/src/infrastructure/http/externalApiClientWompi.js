import axios from 'axios';
import { config } from '../../config/config.js';

const externalApiClientWompi = axios.create({
    baseURL: config.externalApiBaseUrl,
    timeout: 5000,
});

export default externalApiClientWompi;