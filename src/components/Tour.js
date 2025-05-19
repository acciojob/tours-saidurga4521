import React from "react";
import { useState } from "react";
const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div>
      <div className="single-tour">
        <h2>{name}</h2>
        <img src={image} />
        <p id={`tour-item-para-${id}`} className="tour-info">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "showless" : "showMore"}
          </button>
        </p>
        <span className="tour-price">{price}</span>
        <button
          id={`delete-btn-${id}`}
          className="delete-btn"
          onClick={() => {
            removeTour(id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Tour;
