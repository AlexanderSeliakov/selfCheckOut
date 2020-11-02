import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://selfcheckout-5c223.firebaseio.com/'
})

export default instance