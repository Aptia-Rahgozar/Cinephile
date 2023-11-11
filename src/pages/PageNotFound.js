import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components";
import PageNotFoundImage from "../assets/images/pagenotfound.png";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found - Cinephile"
  });

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-4xl md:text-7xl text-gray-700 font-bold my-10 dark:text-white ">
            404 - Page Not Found!
          </p>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={PageNotFoundImage}
              alt="Page not found"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back to Cinephile</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
