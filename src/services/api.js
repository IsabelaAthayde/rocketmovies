import axios from "axios";

export const api = axios.create({
    baseURL: 'https://rocketmovieslist-api.onrender.com'
});