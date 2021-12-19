import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({
  id,
  cover_image_url,
  url,
  title,
  runtime,
  rating,
  synpopsis,
  genres,
}) => {
  return (
    <li style={{ listStyle: "none", margin: "10px"}}>
      <div style={{ display: "flex" }}>
        <img src={cover_image_url} style={{ margin: "0px 10px 0px 0px", width: "100px" }} />
        <div>
          <h4 style={{margin: "0px 0px 10px 0px"}}>
            <Link to={`/movie/${id}`} style={{color: "blue"}}>
              {title}
            </Link>
          </h4>
          <p>
            <span style={{color: "gray"}}>{runtime}min</span>
            <span> {genres.join(" | ")}</span>
          </p>
          <p><span style={{backgroundColor: "lightGreen"}}>{rating}</span></p>
          <p>
            {synpopsis.length > 100
              ? `${synpopsis.slice(0, 100)}...`
              : synpopsis}
          </p>
        </div>
      </div>
    </li>
  );
};

Movie.propTypes = {
  id: propTypes.number.isRequired,
  cover_image_url: propTypes.string,
  url: propTypes.string,
  title: propTypes.string.isRequired,
  synpopsis: propTypes.string,
  genres: propTypes.arrayOf(propTypes.string),
};
export default Movie;
