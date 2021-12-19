import { useState, useEffect } from "react";
import Movie from "../component/Movie";

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const url =
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";
    const json = await (await fetch(url)).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => getMovies(), []);
  return (
    <div id="movieApp" style={{ background: "gray"}}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul style={{padding: "0px", width: "960px", margin: "auto", background:"lightGray"}}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              cover_image_url={movie.medium_cover_image}
              url={movie.url}
              title={movie.title_long}
              runtime={movie.runtime}
              rating={movie.rating}
              synpopsis={movie.synopsis}
              genres={movie.genres}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
