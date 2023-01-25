import { useParams } from "react-router-dom";
const FilmDetails = ({ findFilmById }) => {
  const { id } = useParams();
  const idAsNumber = Number(id);

  const film = findFilmById(idAsNumber);

  return (
    <div className="film-details">
      <p>
        {film.title} price: {film.price}
      </p>
    </div>
  );
};

export default FilmDetails;
