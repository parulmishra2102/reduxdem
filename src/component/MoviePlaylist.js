import { createRandomMovie } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../store";

function MoviePlaylist() {
  const dispatch = useDispatch();
  // To Do:
  // Get list of movies

  const moviePlaylist = useSelector((state) => {
    return state.movies;
    console.log(state);
  });

  const handleMovieAdd = (movie) => {
    const action = addMovie(movie);
    dispatch(action);
    console.log(action);
    // To Do:
    // Add movie to list of movies
  };
  const handleMovieRemove = (movie) => {
    // To Do:
    // Remove movie from list of movies
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="buttons">
        <button
          onClick={() => handleMovieAdd(createRandomMovie())}
          className="button is-link"
        >
          + Add Movie to Playlist
        </button>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
