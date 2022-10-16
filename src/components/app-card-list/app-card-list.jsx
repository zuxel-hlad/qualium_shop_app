import AppCard from "../app-card/app-card";
import { AppContext } from "../../components/app-provider/app-provider";
import { useContext } from "react";
import "./app-card-list.scss";

const AppCardList = () => {
  const { products } = useContext(AppContext);

  const content = products.map((product) => {
    const { title, description, id, price } = product;
    return (
      <AppCard
        title={title}
        description={description}
        price={price}
        key={id}
        id={id}
      />
    );
  });
  return (
      <div className="card-list">
        {content && content.length > 0 ? (
          content
        ) : (
          <h3 className="card-list__empty-list">there are no products yet.</h3>
        )}
      </div>
  );
};

export default AppCardList;
