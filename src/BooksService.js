import axios from 'axios';

const API_URL = 'http://localhost:5000';

const BooksService = {
    getAllBooks: async () => {
        const token = localStorage.getItem("access_token")
        if(!token || token.trim() === "") {
            return null
        }
        
        return await axios.get(`${API_URL}/books`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
    addBook: async (bookData) => {
        const token = localStorage.getItem("access_token")
        if(!token || token.trim() === "") {
            return null
        }

        return await axios.post(`${API_URL}/addBook`, bookData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
    searchBooks: async (name, author) => {
        const token = localStorage.getItem("access_token")
        if(!token || token.trim() === "") {
            return null
        }

        return await axios.get(`${API_URL}/books/search`, {
            params: { name, author },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
    removeBook: async (bookId) => {
        const token = localStorage.getItem("access_token")
        if(!token || token.trim() === "") {
            return null
        }

        return await axios.delete(`${API_URL}/books/${bookId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },  
    updateBook: async (bookId) => {
        const token = localStorage.getItem("access_token")
        if(!token || token.trim() === "") {
            return null
        }

        return await axios.put(`${API_URL}/books/${bookId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
    loanBook: async (bookId) => {
        const token = localStorage.getItem("access_token")
        if(!token || token.trim() === "") {
            return null
        }

        return await axios.post(`${API_URL}/loans/${bookId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
        
};

export default BooksService;
