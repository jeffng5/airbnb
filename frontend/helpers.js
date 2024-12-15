import axios from 'axios';

const BASE_URL = "http://localhost:4242"

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
        let res = await this.request(`reservation`, { firstname, lastname, email, checkin, checkout }, 'post')
        let ans = JSON.stringify(res.data)
        return ans
    }

    static async getReservationForCurrentMonthAndYear(month, year) {
        let res = await this.request(`reservations`, { month, year }, 'get')
        console.log(res.data)
        return res.data
    }

    static async getReservationViaId(id) {
        let res = await this.request("checkin", { id })
        console.log(res.data)
        return res.data

    }

    static async sendEmail(id, firstname, lastname, email, checkin, checkout) {
        let res = await this.request('email', { id, firstname, lastname, email, checkin, checkout }, 'post')
        console.log(res.data)
        return res.data
    }

    static async deleteRes(id) {
        let res = await this.request('reservation', {id}, 'delete')
        console.log(res)
        return res

    }
    static async login(password) {
        let res = await this.request('password', { password })
        console.log(res.data)
        return res.data

    }

    static async checkoutSession(quantity) {
        console.log('Jeff', quantity)
        let res = await this.request('v1.payment_intents',  { quantity } , 'post')
        console.log('HERE I AM', res)
        return res
    }


}