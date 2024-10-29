// LoansService.js
import axios from 'axios';

const LoansService = {
    getUserLoans: () => axios.get('/loans') // Adjust endpoint as necessary
};

export default LoansService;
