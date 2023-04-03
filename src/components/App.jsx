import { Route,Routes, Navigate } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Home } from "pages/Home/Home";
import { MovieSearch } from "pages/MovieSearch/MovieSearch";
import { MovieDetails } from "pages/MovieDetails/MovieDetails";
import { Cast } from "pages/Cast/Cast";
import { Rewievs } from "pages/Reviews/Reviews";


export const App = () => {
  return (
    <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home/>} />
          <Route path="/movie" element={<MovieSearch />} />
          <Route path="/movie/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="rewievs" element={<Rewievs />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
  );
};
