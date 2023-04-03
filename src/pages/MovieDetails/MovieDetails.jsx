import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchDetails } from 'service/api';
import { Link, Outlet } from 'react-router-dom';


export const MovieDetails = () => {
    const { movieId } = useParams();
    const [details, setDetailsFilm] = useState(null);

    useEffect(() => {
        fetchDetails(movieId).then(({ data }) =>  setDetailsFilm(data))
    }, [movieId]);

    if (!details) {
        return
    }
    return <div>
        <img
               src={
              details.poster_path
                ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
                : `https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif`
            }
            alt={details.title ?? details.name}
          />
          <div>
            <h2>{details.original_title}</h2>
            <p>
              User score:
              <span> {details.vote_average}</span>
            </p>
            <p>Overview: </p>
            <span> {details.overview}</span>

            <p>Genres:</p>
            <span>
              {details.genres
                ? details.genres.map(el => el.name).join(' ')
                : ''}
            </span>
          </div>
          <ul >
                <li>
                <Link to="cast">
                    <h2 >Cast information:</h2>
                </Link>
                </li>
                <li>
                <Link to="rewievs">
                    <h2 >Rewiev information:</h2>
                </Link>
                </li>
          </ul>
          <Outlet />
    </div>
};
