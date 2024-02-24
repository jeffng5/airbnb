
import axios from 'axios'


const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

export class Helpers {
    //empty token for header
    static token;
    // skeleton of request helper function
    static async request(endpoint, data ={}, method = 'get') {
        console.debug("API call:", endpoint, data, method);
        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${Helpers.token}`};
        const params = (method === 'get')
            ? data
            : {};
        try {
            return (await axios({ url, method, data, params, headers}));
        } catch (err) {
            console.error("API Error:", err.response.data);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];

        }
    
    }

static async postReserve(firstname, lastname, email, checkin, checkout) {
    let res = await this.request('users', {firstname, lastname, email, checkin, checkout}, 'post')
    console.log(res.data, 'posted to db')
    return res.data    
}

static async getReserve(id) {
    let res = await this.request('users/reservation', {id})
    console.log(res.data, "fetching posts")
    return res.data
}

static async getAllReserve() {
    let res= await this.request('users')
    console.log(res.data, 'fetching all reservation dates')
    return res.data
}


}