import { useState, useEffect } from "react";

import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer } from "./components";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} />
      <AllRoutes currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
