import FilmList from "./FilmList";

const Home = ({ films, addToBasket }) => {
  return (
    <div className="films-for-sale">
      <h1>Films For Sale</h1>
      <FilmList films={films} addToBasket={addToBasket}></FilmList>
    </div>
  );
};

export default Home;
