import React, { useState, useEffect } from "react";
import Book from "../Book/Book";

const Search = () => {
  const [bookName, setBookName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [successful, setSuccessful] = useState(false);

  const handleInputChange = (event) => {
    setBookName(event.target.value);
  };

  const searchBook = () => {
    const apiUrl = `https://openlibrary.org/search.json?q=${bookName}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.docs.slice(0, 10));
        setSuccessful(true);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
        setError("Error fetching book data. Please try again later.");
      });
  };

  if (successful) {
    return (
      <>
        <Search />
        <section>
          <ul>
            {searchResults.map((book, index) => (
              <li key={index}>
                <Book
                  author={
                    book.author_name ? book.author_name.join(", ") : "N/A"
                  }
                  title={book.title}
                  cover={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  summary={book.first_sentence}
                />
              </li>
            ))}
          </ul>
        </section>
      </>
    );
  }

  return (
    <>
      <input type="text" value={bookName} onChange={handleInputChange} />
      <button onClick={searchBook}>Search</button>
      {error && <p>{error}</p>}
    </>
  );
};

export default Search;
