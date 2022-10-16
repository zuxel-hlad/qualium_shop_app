import AppCartList from "../../components/app-cart-list/app-cart-list";
import "./cart-view.scss";

const CartView = () => {
  return (
    <section className="section cart-view">
      <AppCartList />
      <span className="cart-view__amount">sum of all purchases: 2000$</span>
    </section>
  );
};

export default CartView;
