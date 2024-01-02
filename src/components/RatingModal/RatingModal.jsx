import React, { useState } from "react";

const RatingModal = (props) => {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (e) => {
        setRating(Number(e.target.value));
    }
  return (
    <>
      <span>Rate {props.bookTitle}</span>
      <input
        type="number"
        id="rating"
        min={1}
        max={5}
        value={rating}
        onChange={handleRatingChange}
        required
      />
    </>
  );
};

export default RatingModal;
