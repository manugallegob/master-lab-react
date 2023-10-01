import React from "react";
import { pets, PictureInfo } from "../pets-mock";
import { Navbar } from "./nav";
import { useParams } from "react-router-dom";
import { listContext } from "../cartContext";

export const List: React.FC = () => {
  const { listItems, addToCart, removeFromCart } = React.useContext(listContext);
  const [petsList, setPetsList] = React.useState([]);
  const params = useParams();

  React.useEffect(() => {
    if (Object.entries(params).length === 0) {
      setPetsList(pets);
    } else {
      const result = pets.filter((pet) => {
        return pet.category === params.id;
      });
      setPetsList(result);
    }
  }, [params]);

  const handleCheckboxChange = (event, item:PictureInfo) => {
    event.target.checked ? addToCart(item) : removeFromCart(item);
  };

  const isChecked = (item: PictureInfo) => {
    return listItems.some((e: PictureInfo) => e.id === item.id);
  };

  return (
    <div className="container-list">
      <Navbar />
      <h2 className="title-list">Categoria: {params.id ? params.id : 'Todos'}</h2>
      <div className="container-list-article">
        {petsList.map((item) => {
          return (
            <article className="container-article" key={item.id}>
              <img src={item.picUrl} alt="" />
              <span>{item.title}</span>
              <input className="check"
                type="checkbox"
                checked={isChecked(item)}
                onChange={(event) => {
                  handleCheckboxChange(event, item);
                }}
              />
            </article>
          );
        })}
      </div>
    </div>
  );
};
