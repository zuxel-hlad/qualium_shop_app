import AppCard from "../app-card/app-card";
import { AppContext } from "../app-provider/app-provider";
import { useContext } from "react";
import "./app-cart-list.scss";

const AppCartList = () => {
  const { cart } = useContext(AppContext);

  const content = cart.map((product) => {
    const { title, description, id, price } = product;
    return (
      <AppCard
        cart={true}
        title={title}
        description={description}
        price={price}
        key={id}
        id={id}
      />
    );
  });
  return (
    <div className="cart-list">
      {content && content.length > 0 ? (
        content
      ) : (
        <h3 className="cart-list__empty-list">cart is empty.</h3>
      )}
    </div>
  );
};

export default AppCartList;
