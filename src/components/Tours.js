import React from "react";
import Tour from "./Tour";
const Tours = ({ tourDetails, removeTour }) => {
  console.log(tourDetails);
  return (
    <div>
      {tourDetails.map((tour) => (
        <Tour key={tour.id} {...tour} removeTour={removeTour} />
      ))}
    </div>
  );
};

export default Tours;
