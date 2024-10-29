import React, { useEffect, useState } from 'react';
import BooksService from '../BooksService';
import './Books.css';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [bookData, setBookData] = useState({ name: '', author: '', year_published: '', type: '' });
    const [searchTerm, setSearchTerm] = useState('');
    const [loanStatus, setLoanStatus] = useState(''); // New state to hold loan status message

    const fetchBooks = async () => {
        try {
            const response = await BooksService.getAllBooks();
            if (!response) {
                alert("Not Logged In");
            }
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const handleAddBook = async () => {
        try {
            await BooksService.addBook(bookData);
            fetchBooks(); // Refresh the book list
            setBookData({ name: '', author: '', year_published: '', type: '' }); // Reset form
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    const handleRemoveBook = async (bookId) => {
        try {
            await BooksService.removeBook(bookId);
            fetchBooks(); // Refresh the book list
        } catch (error) {
            console.error('Error removing book:', error);
        }
    };

    const handleLoanBook = async (bookId) => {
        try {
            const response = await BooksService.loanBook(bookId); // Call loanBook API
            setLoanStatus(response.data.message); // Update loan status message
            fetchBooks(); // Refresh the book list to update book status
        } catch (error) {
            console.error('Error loaning book:', error);
            setLoanStatus('Error loaning book.');
        }
    };

    const handleSearch = async () => {
        try {
            const response = await BooksService.searchBooks(searchTerm, '');
            setBooks(response.data);
        } catch (error) {
            console.error('Error searching for books:', error);
        }
    };

    const handleUpdateBook = async (bookId) => {
        try {
            await BooksService.updateBook(bookId);
            fetchBooks(); // Refresh the book list
        } catch (error) {
            console.error('Error updating book:', error);
        }
    }

    useEffect(() => {
        fetchBooks();
    }, []); // Fetch books on component mount

    return (
        <div>
            <h1>Books</h1>

            <input
                type="text"
                placeholder="Book Name"
                value={bookData.name}
                onChange={(e) => setBookData({ ...bookData, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Author"
                value={bookData.author}
                onChange={(e) => setBookData({ ...bookData, author: e.target.value })}
            />
            <input
                type="number"
                placeholder="Year Published"
                value={bookData.year_published}
                onChange={(e) => setBookData({ ...bookData, year_published: +e.target.value })}
            />
            <input
                type="text"
                placeholder="Type"
                value={bookData.type}
                onChange={(e) => setBookData({ ...bookData, type: +e.target.value })}
            />

            <select name='book_type' onChange={(e) => setBookData({ ...bookData, max_loan_days: +e.target.value })}>
                <option>loan days</option>
                <option value={1}>10 days</option>
                <option value={2}>5 days</option>
                <option value={3}>2 days</option>
            </select>

            <button onClick={handleAddBook}>Add Book</button>

            <input
                type="text"
                placeholder="Search by Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button onClick={handleSearch}>Search</button>

            <h2>Book List</h2>
            {loanStatus && <p>{loanStatus}</p>} {/* Display loan status message */}

            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        {book.name} by {book.author} ({book.year_published})
                        <button onClick={() => handleUpdateBook(book.id)}>Update</button>
                        <button onClick={() => handleRemoveBook(book.id)}>Remove</button>
                        {book.status === 'available' && (
                            <button onClick={() => handleLoanBook(book.id)}>Loan</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Books;
