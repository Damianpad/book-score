import { useEffect, useState } from "react";
import './Book.css'

const Book = (props) => {


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
