import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import FilmDetails from "./components/FilmDetails";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Basket from "./components/Basket";

function App() {
  const [films, setFilms] = useState([
    { id: 1, title: "The Big Lebowski", price: 69 },
    { id: 2, title: "Titanic", price: 6 },
    { id: 3, title: "The Blues Brothers", price: 9 },
    { id: 4, title: "Red Rocket", price: 25 },
    { id: 5, title: "Tron", price: 8 },
    { id: 6, title: "The Room", price: 1 },
  ]);
  const [basket, setBasket] = useState([]);

  const findFilmById = (id) => {
    return films.find((film) => film.id === id);
  };
  const addToBasket = (film) => {
    const newBasket = [...basket, film];
    setBasket(newBasket);
  };
  const removeFromBasket = (id) => {
    const updatedBasket = basket.filter((film) => film.id !== id);
    setBasket(updatedBasket);
  };
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home films={films} addToBasket={addToBasket} />}
        />
        <Route
          path="/basket"
          element={
            <Basket basket={basket} removeFromBasket={removeFromBasket} />
          }
        />
        <Route
          path="/films/:id"
          element={<FilmDetails findFilmById={findFilmById} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
