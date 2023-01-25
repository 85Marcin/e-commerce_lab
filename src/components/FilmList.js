import { Link } from "react-router-dom";

const FilmList = ({ films, addToBasket }) => {
  const filmItems = films.map((film) => {
    return (
      <div className="film-list" key={film.id}>
        <Link to={`/films/${film.id}`}>
          <li>{film.title}</li>
        </Link>
        <button onClick={() => addToBasket(film)}>Add to basket</button>
      </div>
    );
  });

  return <ul>{filmItems}</ul>;
};

export default FilmList;
