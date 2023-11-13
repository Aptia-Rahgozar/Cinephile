import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card, Pagination } from "../components";
import { Paginate } from "../utils/Paginate";

export const Search = ({ apiPath, currentPage, setCurrentPage }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data: movies } = useFetch(apiPath, queryTerm);
  const pageSize = 6;
  const slicedMovies = Paginate(movies, pageSize, currentPage);

  useTitle(`Search Result for "${queryTerm}"`);

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No result found for "${queryTerm}".`
            : `Results for "${queryTerm}":`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
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
