import { useParams, Link } from "react-router-dom"

const FilmDetails = ({findFilmById}) => {
    const {id} = useParams()
    const idAsNumber = Number(id)

    const film = findFilmById(idAsNumber)

    return (
        <p>{film.title} {film.price} {film.id}</p>
    )
}

export default FilmDetails