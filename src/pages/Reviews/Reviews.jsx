import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviews } from "service/api";

export const Rewievs = () => {
    const { movieId } = useParams();
    const [rewInfo, setRewInfo] = useState([]);
    useEffect(() => {
      fetchReviews(movieId).then(({ data }) => setRewInfo(data.results));
    });
  
    return (
      <>
        {rewInfo.length !== 0 ? (
          <ul>
            {rewInfo.map(({ author, content }) => {
              return (
                <li key={author}>
                  <h2>
                    Autor:
                    <span> {author}</span>
                  </h2>
                  <p>{content}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>
            <br />
            Sorry, we dont have any rewievs for this movie.
          </p>
        )}
      </>
    );
  };