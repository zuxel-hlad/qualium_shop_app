import { Link } from "react-router-dom";
import "./404.scss";

const ErrorPage = () => {
  return (
    <section className="section app-error">
      <h1 className="app-error__error-title">OOOOOPS...!</h1>
      <span className="app-error__error-description">
        Something goes wrong.
      </span>
      <Link className="app-error__error-link" to="/">go to main</Link>
    </section>
  );
};

export default ErrorPage;
