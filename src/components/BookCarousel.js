import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookCarousel.css';
import Carousel from 'react-bootstrap/Carousel'; 
import gatsby from "../assets/images/the_great_gatsby_book.jpg";
import pic1984 from "../assets/images/1984_novel_book.jpg";
import mockingbird from "../assets/images/to_kill_a_mockingbird.jpg";
import bookshelf from "../assets/images/bookshelf.jpg";

function BookCarousel() {
  return (
    <div className="container mt-5 carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bookshelf}
            alt="Image of an old bookshelf"
          />
          <Carousel.Caption>
            <h3>Our Popular Books</h3>
            <p>Slide to see some of our popular books</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={gatsby}
            alt="Cover of The Great Gatsby"
          />
          <Carousel.Caption>
            <h3 style={{ color: 'black' }}>The Great Gatsby</h3>
            <p style={{ color: 'black' }}> 
              A tragic tale of love, wealth, and the American Dream,
              exploring the disillusionment of the Roaring Twenties through
              the enigmatic figure of Jay Gatsby and his obsession with the
              unattainable Daisy Buchanan.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={pic1984}
            alt="1984 Book Cover"
          />
          <Carousel.Caption>
            <h3>1984</h3>
            <p>
              George Orwell's "1984" is a chilling portrayal of a dystopian
              society under totalitarian rule, where oppressive
              surveillance, thought control, and the erasure of truth define
              life under the ever-watchful eye of Big Brother.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={mockingbird}
            alt="To Kill a Mockingbird Book Cover"
          />
          <Carousel.Caption>
            <h3 style={{ color: 'black' }}>To Kill The Mockingbird</h3>
            <p style={{ color: 'black' }}>
              Harper Lee's "To Kill a Mockingbird" explores racial injustice
              and moral growth, through the eyes of young Scout Finch, as
              her father, Atticus, defends an innocent Black man in the
              prejudiced American South.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BookCarousel;
