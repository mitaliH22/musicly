import axios from "axios";
// const token = localStorage.getItem("token");

axios.defaults.baseURL = "https://api.spotify.com/v1";
// axios.defaults.headers["Authorization"] = `Bearer ${token}`;
axios.defaults.headers["Content-Type"] = "application/json";



// Add a request interceptor
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");;
    config.headers.Authorization = 'Bearer ' + token;
    return config;
});


export const getCurrentUserProfile = () => axios.get("/me");

export const searchArtist = (ids) => axios.get(`/artists?ids=${ids}`);


