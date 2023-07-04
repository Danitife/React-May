import axios from 'axios'
// let token = localStorage.getItem("token")
const http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`
    }
})

export default http