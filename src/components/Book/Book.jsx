import React, { useState } from "react";
import "./Book.css";

import RatingModal from "../RatingModal/RatingModal";

const Book = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (props.cover == undefined) {
    console.log("no cover");
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleRatingSubmit = () => {
    console.log("Rating has been sumbitted");
  };

  return (
    <section className="bookContainer flex flex-row">
      <section className="imgContainer ">
        <img src={props.cover} alt="" className=" w-32 h-40 sm:w-60 sm:h-60" />
      </section>
      <section className="infoContainer flex flex-col items-center justify-center w-full">
        <h2 className="text-xl">{props.title}</h2>
        <p className="text-xs"> {props.author}</p>
        {/* <p className="text-xm"> {props.summary}</p> */}

        {/* Book Rating Component */}
        {/* Add/Remove Component */}
        {props.rating !== undefined && props.rating !== null ? (
          <p>Ink Score: {props.rating.toFixed(1)} / 5 </p>
        ) : (
          <p>No Ink Score</p>
        )}
        <button onClick={openModal}>Rate </button>

        {isModalOpen && (
          <RatingModal
            onClose={closePopup}
            onSubmit={handleRatingSubmit}
            bookTitle={props.title}
          />
        )}
      </section>
    </section>
  );
};

export default Book;
