import AppCardList from "../../components/app-card-list/app-card-list";
import AppSearchForm from "../../components/app-serach-form/app-search-form";
import "./main-view.scss";



const MainView = () => {
  return (
    <section className="section main-view">
      <AppSearchForm className="main-view__search" />
      <h1 className="main-view__title">Available Products</h1>
      <AppCardList />
    </section>
  );
};

export default MainView;
