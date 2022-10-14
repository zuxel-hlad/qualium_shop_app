import "./app-loader.scss";
import loader from "../../assets/svg/loader.svg";

const AppLoader = ({loading}) => {
    if(!loading) return null
  return (
    <div className="app-loader">
      <div className="app-loader__item">
        <img src={loader} alt="loader" />
      </div>
    </div>
  );
};

export default AppLoader;
