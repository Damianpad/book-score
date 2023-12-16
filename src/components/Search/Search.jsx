import { useState } from "react";

const Search = () => {
  const [bookName, SetBookName] = useState('');
  const [bookData, setBookData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    SetBookName(event.target.value)


  }

  const searchBook= () => {
    const apiUrl = `https://openlibrary.org/search.json?q=${bookName}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setBookData(data);
        setError(null);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setBookData(null);
        setError('Error fetching weather data. Please try again later.');
      });
  };
  return (
    <>
     <input type="text" value={bookName} onChange={handleInputChange}
        ></input>
         <button onClick={searchBook}>Search</button>

      <span>{bookData.docs[0].title}</span>
    </>
  )
}

export default Search;