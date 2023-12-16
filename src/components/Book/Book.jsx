import { useEffect, useState } from "react";
import './Book.css'

const Book = (props) => {
  const [title, setTitle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [summary, setSummary] = useState(null);
  const [cover, setCover] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://openlibrary.org/search.json?q=the+lord+of+the+rings"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        setTitle(result.docs[0].title);
        setAuthor(result.docs[0].author_name);
        setSummary(result.docs[0].first_sentence);
        setCover(result.docs[0].cover_i);
        console.log(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section className="bookContainer" >
      <section className="imgContainer">
        <img
          src={props.cover}
          alt=""
        />
      </section>
      <section className="infoContainer">
        <h2>{props.title}</h2>
        <p>{props.author}</p>
        <p>{props.summary}</p>

        {/* Book Rating Component */}
        {/* Add/Remove Component */}
      </section>
    </section>
  );
};

export default Book;
