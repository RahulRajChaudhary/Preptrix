// env.js
const ENV = process.env.NODE_ENV;

const BASE_URLS = {
  development: "http://localhost:8000", // for local dev
  production: "https://pretrix-backend.onrender.com", // your Render backend
};

export const BASE_URL = BASE_URLS[ENV] || BASE_URLS.development;

