import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { State } from "../../app/reducer";
import { CategoryItem } from "../../type";
import "../style.scss";

const Index = (): ReactElement => {
  const itemsByCategory: Record<string, CategoryItem[]> = useSelector(
    (state: State) => state.itemsByCategory
  );

  return (
    <div className="cats-wrapper">
      {!Object.keys(itemsByCategory).length ? (
        <span className="cats-wrapper-empty-text">Choose any category.</span>
      ) : (
        Object.values(itemsByCategory)[0]?.map((elem: any) => {
          return (
            <div key={elem.id} className="cats-wrapper-item">
              <img alt="" src={elem.url} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Index;
