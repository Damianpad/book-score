import React, { useState, useEffect } from "react";
import Book from "../Book/Book";

const Search = () => {
  const [bookName, setBookName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [successful, setSuccessful] = useState(false);
  const [counter, setCounter] = useState(0);
  const [base, setBase] = useState(10);
  const [results, setResults] = useState([])

  const handleInputChange = (event) => {
    setBookName(event.target.value);
  };

  const searchBook = () => {
    const apiUrl = `https://openlibrary.org/search.json?q=${bookName}`;
    console.log(counter);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCounter(counter + 10);
        setBase(base + 10);
        setSearchResults(data.docs.slice(counter, base));
        setSuccessful(true);
        setError(null);
        setResults(data)
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
        setError("Error fetching book data. Please try again later.");
      });
  };

  const moreBooks = () => {
    setCounter(counter + 10);
    setBase(base + 10);
    setSearchResults(results.docs.slice(counter, base));
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
        <button onClick={moreBooks}>More</button>
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
