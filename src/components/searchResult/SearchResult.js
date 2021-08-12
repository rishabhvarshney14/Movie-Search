import React, { useEffect, useState } from "react";
import axios from "axios";
import { getURL } from "../../API/URLs";

// Custom Component
import Message from "./Message";
import MovieResult from "./movieResult";

// SearchResult Component
const SearchResult = (props) => {
  const [loading, setLoading] = useState(true);
  const [lists, setList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Get the list of Movies based on given query
    const searchMovie = async () => {
      // get query from the url

      const value = props.match.params.query;

      await axios
        .get(getURL.search(value))
        .then((res) => {
          const data = res.data.results;
          // If there is no data fetched show error
          if (data.length === 0) {
            setError(true);
          } else {
            setList(data);
          }
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          setError(true);
        });
    };

    searchMovie();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {loading ? (
        <Message message="Please wait fetching data..." />
      ) : error ? (
        <Message
          message="Fetching data failed. Please Try Again."
          color="red"
        />
      ) : (
        <MovieResult list={lists} />
      )}
    </div>
  );
};

export default SearchResult;
