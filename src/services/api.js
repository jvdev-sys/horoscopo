import axios from 'axios';

//Serviço de consumo de dados na API fornecida no teste
const api = axios.create({
    baseURL: 'https://apiv2.resolvaclub.com/',
});

export default api;

