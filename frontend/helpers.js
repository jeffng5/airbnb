import axios from 'axios';

const BASE_URL = "http://localhost:1234"

export class Helpers {


static async request(endpoint, data = {}, method ='get') {
    const url = `${BASE_URL}/${endpoint}`;
    const params = (method === 'get') ? data : {};

    try {
        return (await axios({
            url, data, method, params
        }));
    }    
    catch (err) {
        console.log(err)
    }
    }

static async book(firstname, lastname, email, checkin, checkout) {
    let res = await this.request(`reservation.html`, { firstname, lastname, email, checkin, checkout }, 'post')
    return res.data
}

}