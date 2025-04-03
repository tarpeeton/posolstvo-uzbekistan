import axios from "axios";



export const Axios = axios.create({
    baseURL: "https://abdulloh-usmonov.jprq.site/api",
    responseType: 'json',
    timeout: 30000
})