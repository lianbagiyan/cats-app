import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainInfo from "./components/MainInfo/MainInfo";

function App() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/categories")
      .then((response) => response.json())
      .then((res) => {
        res.sort((a: { id: number }, b: { id: number }) => a.id - b.id);
        setCategories(res);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainInfo categories={categories} />} />
        <Route
          path="/:categoryname"
          element={<MainInfo categories={categories} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
