import Axios from "axios";

export const axios = Axios.create(
    {
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
});