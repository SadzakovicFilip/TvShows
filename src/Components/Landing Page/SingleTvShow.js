import React from "react";
import "../App.css";

function SingleTvShow({ data }) {
  return (
    <div className="singleShow">
      <img src={data.image.medium} alt={data.name}></img>
      <div>
        <h3>{data.name}</h3>
        <h4>Rating : {data.rating.average} ★</h4>
      </div>
    </div>
  );
}

export default SingleTvShow;
