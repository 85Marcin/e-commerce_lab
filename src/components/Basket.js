import React from "react";
import styled from "styled-components";

const ListOfFilms = styled.div`
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

const Basket = ({ basket, removeFromBasket }) => {
  const filmsInBasket = basket.map((film) => (
    <ListOfFilms key={film.id}>
      <li>
        {film.title} price: {film.price}
      </li>
      <Button onClick={() => removeFromBasket(film.id)}>Remove</Button>
    </ListOfFilms>
  ));
  return (
    <div>
      <ul>{filmsInBasket}</ul>
    </div>
  );
};

export default Basket;
