import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const movieId = useParams().id;
  const getMovie = async () => {
    const url = `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`;
    const json = await (await fetch(url)).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => getMovie(), []);
  console.log(movie);
  return (
    <div id="detail">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <img src={movie.large_cover_image} />
          <h1>{movie.title_long} {movie.rating}</h1>
          <h3>{movie.genres.join(" ")}</h3>
        </>
      )}
    </div>
  );
};

export default Detail;
