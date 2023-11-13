import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card, Pagination } from "../components";
import { Paginate } from "../utils/Paginate";

export const MovieList = ({ apiPath, title, currentPage, setCurrentPage }) => {
  const pageSize = 6;
  const { data: movies } = useFetch(apiPath);
  const slicedMovies = Paginate(movies, pageSize, currentPage);

  useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-evenly lgscreen:justify-start flex-wrap">
          {slicedMovies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
      <Pagination
        totalCount={movies.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
      />
    </main>
  );
};
