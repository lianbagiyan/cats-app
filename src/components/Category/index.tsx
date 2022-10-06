import { ReactElement, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setItemsByCategory } from "../../app/actions";
import "../style.scss";

const Index = ({categories}: any): ReactElement => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = useCallback(
    (id: number, categoryname: string) => {
      fetch(
        `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${id}`
      )
        .then((response) => response.json())
        .then((res) => {
          dispatch(setItemsByCategory(categoryname, res));
        });
      navigate(`/${categoryname}`);
    },
    [navigate, dispatch]
  );

  return (
    <div className="categorys-wrapper">
      <ul className="categorys-wrapper-list">
        {categories &&
          categories.map((elem: { id: number, name: string }) => {
            return (
              <li
                key={elem.id}
                className="categorys-wrapper-list-item"
                onClick={() => handleClick(elem.id, elem.name)}
              >
                <span className="categorys-wrapper-list-item-text">
                  {elem.name}
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Index;