import axios from "axios";

const BaseURL = "https://api.github.com"
const authToken = "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"
export const Axios = axios.create({
          baseURL: BaseURL, // if we use .env file in react js the name convection is REACT_APP_<nameyouwant>
          headers: {
                    "Authorization": authToken,
                    "Accept": "application/vnd.github+json"
          }
});
