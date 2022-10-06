import { lazy, Suspense, ReactElement } from "react";
import "../style.scss";

const Category = lazy(() => import("../Category"));
const Cats = lazy(() => import("../Cats"));

const MainInfo = ({categories}: any): ReactElement => {
  return (
    <div className="main-container">
      <Suspense fallback={<div>Loading...</div>}>
        <Category categories={categories} />
        <Cats />
      </Suspense>
    </div>
  );
};

export default MainInfo;