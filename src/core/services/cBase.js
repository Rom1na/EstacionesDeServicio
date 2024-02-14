import axios from 'axios';

export const cBase = axios.create({
    baseURL : 'http://datos.energia.gob.ar/api/3/action/',
    


});


