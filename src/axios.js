import axios from 'axios';

//creamos una instancia con el baseURL de la api, para no tener que rellenarlo en cada peticion
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

//para usarlo fuera de éste componente
export default instance;