import axios from "axios";

const instance = axios.create({
    baseURL: "https://backend.sellectricindia.com/api/" //API url
})

export default instance;