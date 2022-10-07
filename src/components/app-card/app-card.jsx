import { Link } from 'react-router-dom';
import image from '../../assets/img/example_image.png';
import './app-card.scss';

const AppCard = () => {
  return (
    <div className="app-card">
      <div className="app-card__image">
        <span>product image</span>
        <img src={image} alt="product" />
      </div>
      <div className="app-card__text">
        <h2 className="app-card__title">Example Title</h2>
        <p className="app-card__description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed libero
          quisquam autem maxime atque cumque?
        </p>
      </div>
      <div className="app-card__links">
        <Link className="app-card__link" to="#">edit</Link>
        <Link className="app-card__link" to="#">delete</Link>
        <Link className="app-card__link" to="#">add to cart</Link>
      </div>
    </div>
  );
};

export default AppCard;
