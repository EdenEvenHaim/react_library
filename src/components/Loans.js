import React, { useEffect, useState } from 'react';
import LoansService from './LoansService';
import './Loans.css';

const Loans = () => {
    const [loans, setLoans] = useState([]);
    const [error, setError] = useState('');

    const fetchUserLoans = async () => {
        try {
            const response = await LoansService.getUserLoans();
            setLoans(response.data); // Assuming the response contains an array of loans
        } catch (error) {
            console.error('Error fetching user loans:', error);
            setError('Failed to load loans. Please try again later.');
        }
    };

    useEffect(() => {
        fetchUserLoans();
    }, []); // Fetch user loans on component mount

    return (
        <div>
            <h1>Your Loans</h1>
            {error && <p className="error">{error}</p>} {/* Display error if any */}
            
            {loans.length > 0 ? (
                <ul>
                    {loans.map((loan) => (
                        <li key={loan.id}>
                            <h3>{loan.book.name}</h3> {/* Assuming loan object has a book with name */}
                            <p>Author: {loan.book.author}</p>
                            <p>Loan Date: {new Date(loan.loan_date).toLocaleDateString()}</p> {/* Format date */}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>You have no loans.</p>
            )}
        </div>
    );
};

export default Loans;
