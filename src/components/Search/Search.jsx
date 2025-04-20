import React, { useEffect, useState } from "react";
import "./Search.css";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchList } from "./SearchList/SearchList";
import axios from "axios";

const API_KEY =
  "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";

export const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchList, setSearchList] = useState([]);
//   const [filteredList, setFilteredList] = useState([]);

  const handleInput = (event) => {
    const { value } = event.target;
    setSearchInput(value);
    // const newFilteredList = searchList.filter((data) => {
    //   return data.title.toLowerCase().includes(value.toLowerCase());
    // });

    // setFilteredList(newFilteredList);
  };

  const clearSearch = () => {
    setSearchInput("");
    setSearchList([])
  };

  const fetchMovieList = async () => {
    const response = await axios(API_KEY, {
      params: {
        query: searchInput,
      },
    });

    setSearchList(response.data.results);
    // setFilteredList(response.data.results);
  };

  console.log(searchList);

  //Implementing debounce
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchInput) fetchMovieList();
    }, 1000);

    return () => {
      clearInterval(timeout);
    };
  }, [searchInput]);

  console.log(searchInput);
  return (
    <div className="search-container">
      <div className="heading-section">
        <h1>Looking for a movie?</h1>
      </div>
      <SearchInput
        handleInput={handleInput}
        clearSearch={clearSearch}
        searchInput={searchInput}
      />
      <SearchList data={searchList} />
    </div>
  );
};
