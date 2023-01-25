import React from "react";

const Basket = ({ basket, removeFromBasket }) => {
  const filmsInBasket = basket.map((film) => (
    <div className="basket-list" key={film.id}>
      <li>
        {film.title} price: {film.price}
      </li>
      <button className="button" onClick={() => removeFromBasket(film.id)}>
        Remove
      </button>
    </div>
  ));
  return (
    <div>
      <ul>{filmsInBasket}</ul>
    </div>
  );
};

export default Basket;
