export const Pagination = ({
  totalCount,
  currentPage,
  pageSize,
  onPageChange,
}) => {
  const pages = Math.ceil(totalCount / pageSize);
  const pagesArray = Array.from({ length: pages }, (_, i) => i + 1);

  return (
    <div className="text-center mt-10">
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-base h-10">
          <li
            onClick={() =>
              onPageChange(currentPage !== 1 ? currentPage - 1 : currentPage)
            }
          >
            <button
              className={
                currentPage !== 1
                  ? "flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  : "cursor-auto flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              }
            >
              Previous
            </button>
          </li>
          {pagesArray.map((p) => (
            <li key={p} onClick={() => onPageChange(p)}>
              <button
                aria-current={p === currentPage ? "page" : ""}
                className={
                  p === currentPage
                    ? "flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    : "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }
              >
                {p}
              </button>
            </li>
          ))}

          <li
            onClick={() =>
              onPageChange(
                currentPage !== pages ? currentPage + 1 : currentPage
              )
            }
          >
            <button
              href="#"
              className={
                currentPage !== pages
                  ? "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  : "cursor-auto flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 "
              }
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
