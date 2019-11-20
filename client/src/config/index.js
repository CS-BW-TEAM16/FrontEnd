import axios from "axios";

export const config = {
    //URLs go here
    apiURL: 'https://lambda-treasure-hunt.herokuapp.com/api',

    axiosWithAuth: function() {
        return axios.create({
            baseURL: this.baseURL,
            headers: {
                Authorization: `Token ${process.env.API_KEY}`
            }
        });
    }
};
