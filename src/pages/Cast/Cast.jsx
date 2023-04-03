import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchCredits } from "service/api";

export const Cast = () => {
    const { movieId } = useParams();
  
    const [castInfo, setCastInfo] = useState([]);
    useEffect(() => {
      fetchCredits(movieId).then(({ data }) => setCastInfo(data.cast));
    }, [movieId]);
    return (
      <>
        {castInfo.length !== 0 ? (
          <ul>
            {castInfo.map(({ id, profile_path, name, character }) => {
              return (
                <li key={id + name + character}>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500${profile_path}`
                        : `https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif`
                    }
                    alt={name}
                  />
                  <p>{name}</p>
                  <p>{character}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>
            <br />
            Sorry, we dont have any casts for this movie.
          </p>
        )}
      </>
    );
  };