import { Link } from "react-router-dom";
import { AppContext } from "../app-provider/app-provider";
import { useContext } from "react";
import image from "../../assets/img/example_image.png";
import "./app-card.scss";

const AppCard = ({ title, description, id, cart, price }) => {
  const { deleteProduct } = useContext(AppContext);

  return (
    <div className="app-card">
      <div className="app-card__image">
        <span className="app-card__product-image">product image</span>
        <img src={image} alt="product" />
        <span className="app-card__price">{price}&nbsp;$</span>
      </div>
      <div className="app-card__text">
        <h2 className="app-card__title">{title}</h2>
        <p className="app-card__description">{description}</p>
      </div>
      <div className={`app-card__links${cart ? " app-card__links_cart" : ""}`}>
        <Link
          className={`app-card__link ${cart ? " app-card__link_hidden" : ""}`}
          to={`/edit-view/product-${id}`}
        >
          edit
        </Link>
        <button
          type="button"
          className="app-card__link app-card__delete"
          onClick={() => deleteProduct(id)}
        >
          delete
        </button>
        <Link
          className={`app-card__link ${cart ? " app-card__link_hidden" : ""}`}
          to="#"
        >
          add to cart
        </Link>
        <div
          className={`app-card__card-counter${
            cart ? " app-card__card-counter_visible" : " app-card__card-counter_hidden"
          }`}
        >
          <button className="app-card__count">+&nbsp;1</button>
          <span className="app-card__quantity">0</span>
          <button className="app-card__count">-&nbsp;1</button>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
