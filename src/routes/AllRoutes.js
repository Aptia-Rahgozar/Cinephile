import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";

export const AllRoutes = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route
          path="/"
          element={
            <MovieList
              apiPath="movie/now_playing"
              title="Home"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="movies/popular"
          element={
            <MovieList
              apiPath="movie/popular"
              title="Popular"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="movies/top"
          element={
            <MovieList
              apiPath="movie/top_rated"
              title="Top Rated"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="movies/upcoming"
          element={
            <MovieList
              apiPath="movie/upcoming"
              title="Upcoming"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="search"
          element={
            <Search
              apiPath="search/movie"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
