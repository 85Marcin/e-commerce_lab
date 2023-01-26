import { Link } from "react-router-dom";
import styled from "styled-components";

const ListOfFilms = styled.div`
  /* display: flex;
  flex-wrap: row;
  justify-content: center;
  gap: 10px;
  margin: 20px; */
  align-items: center;
  background-color: #f4f4f4;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  width: 300px;
  list-style: none;
`;

const Button = styled.button`
  background-color: #2ecc71;
  border: none;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
`;

// Button:hover {
//   background-color: #27ae60;
//   cursor: pointer;
// }

const FilmList = ({ films, addToBasket }) => {
  const filmItems = films.map((film) => {
    return (
      <ListOfFilms className="film-list" key={film.id}>
        <Link to={`/films/${film.id}`}>
          <li>{film.title}</li>
        </Link>
        <Button onClick={() => addToBasket(film)}>Add to basket</Button>
      </ListOfFilms>
    );
  });

  return <ul>{filmItems}</ul>;
};

export default FilmList;
