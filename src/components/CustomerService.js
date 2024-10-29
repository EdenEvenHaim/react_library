import axios from 'axios';

const API_URL = 'http://localhost:5000';

const CustomerService = {
    getAllCustomers: async () => {
        const token = localStorage.getItem("access_token")
        if(!token || token.trim() === "") {
            return null
        }
        
        return await axios.get(`${API_URL}/customers`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },

    deleteCustomer: async (id) => {
        const token = localStorage.getItem("access_token")
        if(!token || token.trim() === "") {
            return null
        }
        
        return await axios.delete(`${API_URL}/customers/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

    }
}

export default CustomerService