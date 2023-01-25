import { Link } from "react-router-dom"

const FilmList = ({films}) => {

    const filmItems = films.map(film =>{
        return <Link to={`/filmdetails/${film.id}`}><li>{film.title}</li></Link>
    })
    

    return(
        <ol>{filmItems}</ol>
    )
}

export default FilmList