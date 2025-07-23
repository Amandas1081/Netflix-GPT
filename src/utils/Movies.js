import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddMovies, Popular, UpComing, TopRated } from "./movieSlice";
import { options } from "./constants";

function Movies() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie.movies);

  async function movieList() {
    await fetch(
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
  async function movieList2() {
    await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        dispatch(UpComing(res.results));
      })
      .catch((err) => console.error(err));
  }
  async function movieList3() {
    await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&region=usa",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results, "topmrated");
        dispatch(TopRated(res.results));
      })
      .catch((err) => console.error(err));
  }
  async function movieList4() {
    await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        dispatch(Popular(res.results));
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    movieList();
    movieList2();
    movieList3();
    movieList4();
  }, []);
}

export default Movies;
