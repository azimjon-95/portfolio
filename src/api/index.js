import axios from 'axios';

const minURL = axios.create({
    baseURL: "http://localhost:8000"
})

export default minURL;