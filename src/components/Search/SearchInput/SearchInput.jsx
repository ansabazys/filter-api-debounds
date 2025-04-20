import React from "react";
import "./searchInput.css";
import searchIcon from "../../../assets/search.png";
import closeIcon from "../../../assets/close.png";

export const SearchInput = ({ handleInput, searchInput, clearSearch }) => {
  return (
    <div className="input-container">
      <img src={searchIcon} width={25} alt="" />
      <input
        type="text"
        value={searchInput}
        placeholder="Search"
        onChange={handleInput}
      />
      {searchInput && (
        <button onClick={clearSearch}>
          <img
            src={closeIcon}
            className="input-close"
            alt=""
            
          />
        </button>
      )}
    </div>
  );
};
