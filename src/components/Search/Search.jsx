import { useState } from "react";
import Book from "../Book/Book";

const Search = () => {
  const [bookName, SetBookName] = useState("");
  const [bookData, setBookData] = useState("");
  const [author, setAuthor] = useState(null);
  const [cover, setCover] = useState(null);
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState(null);
  const [successful, setSuccessful] = useState(false);

  const handleInputChange = (event) => {
    SetBookName(event.target.value);
  };

  const searchBook = () => {
    const apiUrl = `https://openlibrary.org/search.json?q=${bookName}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setBookData(data.docs[0].title);
        setAuthor(data.docs[0].author_name);
        SetBookName(data.docs[0].title);
        setCover(data.docs[0].cover_i);
        setSummary(data.docs[0].first_sentence);
        setSuccessful(true);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setBookData(null);
        setError("Error fetching weather data. Please try again later.");
      });
  };

  if (successful == true) {
    return (
      <>
        {" "}
        <Search />
        <Book
          author={author}
          title={bookName}
          cover={`https://covers.openlibrary.org/b/id/${cover}-M.jpg`}
          summary={summary}
        />
      </>
    );
  }
  return (
    <>
      <input type="text" value={bookName} onChange={handleInputChange}></input>
      <button onClick={searchBook}>Search</button>

      <span>{bookData}</span>
      <span>{author}</span>
    </>
  );
};

export default Search;
