import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState } from "react"

import './App.css';
import FilmDetails from "./components/FilmDetails";
import Home from './Home';

function App() {

  const [selectedFilm, setSelectedFilm] = useState(null)
  const [films, setFilms] = useState([
    {id: 1, title: "The Big Lebowski", price: 69},
    {id: 2, title: "Titanic", price: 6},
    {id: 3, title: "The Blues Brothers", price: 9},
    {id: 4, title: "Red Rocket", price: 25},
    {id: 5, title: "Tron", price: 8},
    {id: 6, title: "The Room", price: 1}
])


  const findFilmById = (id) => {
    return films.find(film => film.id === id)
  }


  return (
    <Router>
      <Routes>
        <Route exact path="/"  element={<Home films={films} />}/>
        {/* <Route path="/filmdetails/1" element={<FilmDetails films={films}/>}/> */}
        {/* <Route path="/filmdetails/2" element={<FilmDetails films={films}/>}/> */}
        {/* <Route path="/filmdetails/2" element={<FilmDetails film={film}/>}/> */}
        <Route path="/filmdetails/:id" element={<FilmDetails findFilmById={findFilmById}/>}/>
        {/* <Route path="/filmdetails/:id" element={<FilmDetails films={films}/>}/> */}

      </Routes>



    </Router>
  );
}

export default App;
