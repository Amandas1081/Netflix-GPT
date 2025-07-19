import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddMovies } from "./movieSlice";
import { options } from "./constants";

function Movies() {
  const dispatch = useDispatch();

  function movieList() {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        dispatch(AddMovies(res.results));
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    movieList();
  }, []);
}

export default Movies;
