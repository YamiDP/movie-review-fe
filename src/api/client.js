import axios from "axios";

const client = axios.create({
  baseURL: "https://movie-review-app-nodejs.vercel.app/api",
});

export default client;
