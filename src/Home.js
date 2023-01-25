import FilmList from "./components/FilmList"

const Home = ({films}) => {



    return (
        <>
            <h3>Films For Sale</h3>
            <FilmList films={films}></FilmList>
        </>
    )}

export default Home