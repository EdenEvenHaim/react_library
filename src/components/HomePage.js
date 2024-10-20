import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import BookCarousel from "./BookCarousel";


const HomePage = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <h1>Welcome to Eden's Online Library</h1>
        <p>
          Explore thousands of books, from classics to modern hits, right at
          your fingertips.
        </p>
        <Link to="/books" className="explore-btn">
          Explore Our Collection
        </Link>
      </section>

      <section className="features">
        <h2>Why Choose My Library?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Wide Selection of Books</h3>
            <p>
              Browse through a vast collection of books from different genres,
              including fiction, non-fiction, and academic resources.
            </p>
          </div>
          <div className="feature-card">
            <h3>Personalized Recommendations</h3>
            <p>
              Get tailored book suggestions based on your reading preferences
              and past purchases.
            </p>
          </div>
          <div className="feature-card">
            <h3>Community Reviews</h3>
            <p>
              See what other readers think of your favorite books and contribute
              your own reviews!
            </p>
          </div>
        </div>
      </section>

    <BookCarousel></BookCarousel>

      <footer className="footer">
        <p>
          Contact Us: <a href="mailto:info@library.com">info@library.com</a>
          <br />
          Github: <a href="https://github.com/EdenEvenHaim">EdenEvenHaim</a>
          <br />
        </p>
        <p>&copy; 2024 Online Library. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
