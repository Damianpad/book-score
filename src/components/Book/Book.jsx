import { useEffect, useState } from "react";
import './Book.css'

const Book = (props) => {
  console.log(props.cover);
  if (props.cover == undefined){
    console.log("no cover");
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
        <h2 className="text-4xl">{props.title}</h2>
        <p>{props.author}</p>
        <p>{props.summary}</p>

        {/* Book Rating Component */}
        {/* Add/Remove Component */}
      </section>
    </section>
  );
};

export default Book;
