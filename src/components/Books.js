import React, { useEffect, useState } from 'react';
import api from '../api';

function Books() {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function fetchBooks() {
            const response = await api.get('/books');
            setBooks(response.data);
        }
        fetchBooks();
    }, []);

    const handleSearch = async () => {
        const response = await api.get(`/books/search?name=${search}`);
        setBooks(response.data);
    };

    const handleLoan = async (bookId) => {
        try {
            await api.post('/loan', { book_id: bookId });
            alert('Book loaned successfully!');
        } catch (error) {
            alert('Failed to loan book.');
        }
    };

    return (
        <div>
            <h2>Books</h2>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by book name"
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        {book.name} by {book.author} ({book.year_published}) - {book.status}
                        {book.status === 'available' && (
                            <button onClick={() => handleLoan(book.id)}>Loan</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Books;
