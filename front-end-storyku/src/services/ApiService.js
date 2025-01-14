import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
});

class ApiService {
    get(endpoint, config) {
        return new Promise((resolve, reject) => {
            api.get(endpoint, config)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error.response));
        });
    }

    post(endpoint, data, config) {
        return new Promise((resolve, reject) => {
            api.post(endpoint, data, config)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error.response));
        });
    }

    put(endpoint, data, config) {
        return new Promise((resolve, reject) => {
            api.put(endpoint, data, config)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error.response));
        });
    }

    delete(endpoint, config) {
        return new Promise((resolve, reject) => {
            api.delete(endpoint, config)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error.response));
        });
    }
}

export default new ApiService();
