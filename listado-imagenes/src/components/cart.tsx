import React from "react";
import { listContext } from "../cartContext";

export const Cart: React.FC = () => {
  const { listItems, removeFromCart } = React.useContext(listContext);

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  return (
    <div className="container-cart">
      <h2 className="title-cart">Carrito</h2>
      <div className="container-cartList-article">
        {listItems.map((pet) => {
          return (
            <article className="cart-article" key={pet.id}>
              <img src={pet.picUrl} alt="" />
              <span>{pet.title}</span>
              <input className="check"
                type="checkbox"
                checked={pet.selected}
                onChange={() => {
                  handleRemoveFromCart(pet);
                }}
              />
            </article>
          );
        })}
      </div>
    </div>
  );
};
