import React from "react";
import "./SearchList.css";

export const SearchList = ({ data }) => {
   return (
    
    <div className="list-container">
      { data.map((movie) => (
        <div className="list-item">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            className="poster"
            alt=""
          />
          <div>
            <p>{movie.title}</p>
            <p className="list-date">
              {movie.release_date?.split("-").reverse().join("-")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
