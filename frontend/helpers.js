import axios from 'axios';

const BASE_URL = "http://localhost:5500"

export class Helpers {


    static async request(endpoint, data = {}, method = 'get') {
        const url = `${BASE_URL}/${endpoint}`;
        const params = (method === 'get') ? data : {};

        try {
            return (await axios({
                url, data, method, params
            }));
        }
        catch (err) {
            console.error(err)
        }
    }

    static async book(firstname, lastname, email, checkin, checkout) {
        let res = await this.request(`reservation.html`, { firstname, lastname, email, checkin, checkout }, 'post')
        if(res) {
            return res.data
        }
        else {
            return 'Problem creating reservation'
        }
    }

    static async getDatabase() {
        let res = await this.request('reservation.html')
        console.log(res.data)
        return res.data
    }


}