import { Link } from "react-router-dom"

export const MovieList = ( {movies} ) => {
    return (
        <ul>
            {movies.map(movie =>
              <li key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                <img
                       src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : 'https://ih1.redbubble.net/image.512138487.5983/fposter,small,wall_texture,product,750x1000.u3.jpg'
            }
            alt={movie.name ?? movie.title}
          />
          <h2 >{movie.title ?? movie.name}</h2>  
                </Link>
              </li>  
                ) }
        </ul>
    )
}