import React, { useState, useEffect } from "react";
import axios from "axios";

import SingleTvShow from "./SingleTvShow";
import "../App.css";

function ShowData() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    return async () => {
      const response = await axios.get(`http://api.tvmaze.com/shows`);
      setSeries(response.data);
    };
  }, []);

  const topFifty = series.slice(0, 48).map((item) => {
    return <SingleTvShow key={item.id} data={item} />;
  });

  return (
    <div className="wrapper">
      <h2>Popular Tv Shows</h2>
      <div className="TopFifty">{topFifty}</div>
    </div>
  );
}

export default ShowData;
