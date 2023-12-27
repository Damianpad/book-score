import React, { useState, useEffect } from "react";
import Book from "../Book/Book";
import NoCover from "../../assets/img/no_cover.jpg";

const Search = () => {
  const [bookName, setBookName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [successful, setSuccessful] = useState(false);
  const [counter, setCounter] = useState(0);
  const [base, setBase] = useState(10);
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setBookName(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchBook();
    }
  };

  const searchBook = () => {
    setSearchResults([]);
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
        setResults(data);
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

  return (
    <>
      <section className="flex flex-col justify-between">
        <input
          type="text"
          value={bookName}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
        />
        <button onClick={searchBook}>Search</button>
      </section>

      {error && <p>{error}</p>}
      <section>
        <ul>
          {searchResults.map((book, index) => (
            <li key={index}>
              <Book
                author={book.author_name ? book.author_name.join(", ") : "N/A"}
                title={book.title}
                cover={
                  book.cover_i == undefined
                    ? NoCover
                    : `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                }
                summary={book.first_sentence}
              />
            </li>
          ))}
        </ul>
      </section>
      <button onClick={moreBooks}>More</button>
    </>
  );
};

export default Search;
