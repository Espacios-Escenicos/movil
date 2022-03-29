import axios from 'axios';


const apiDB = axios.create({
    baseURL: 'xxxxxxxxxxx',
    params: {
        api_key: '1865f43a0549ca50d341dd9ab8b29f49',
        language: 'es-ES'
    }
});


export default apiDB;


