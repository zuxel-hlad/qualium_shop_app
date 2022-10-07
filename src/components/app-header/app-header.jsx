import './app-header.scss';
import { useScroll } from '../../hooks/useScroll';
import { NavLink, Link } from 'react-router-dom';

const AppHeader = () => {
  const { scroll } = useScroll();
  return (
    <header className={`app-header${!scroll ? ' app-header_hide' : ''}`}>
      <Link to="/" className="app-header__logo">
        Shop App
      </Link>
      <nav className="app-header__nav">
        <ul className="app-header__nav-list">
          <li>
            <NavLink
              exact
              to="/"
              className="app-header__nav-link"
              activeClassName="app-header__nav-link_active"
            >
              Main View
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart-view"
              className="app-header__nav-link"
              activeClassName="app-header__nav-link_active"
            >
              Cart view
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/edit-view"
              className="app-header__nav-link"
              activeClassName="app-header__nav-link_active"
            >
              EditView
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/create-view"
              className="app-header__nav-link"
              activeClassName="app-header__nav-link_active"
            >
              Create View
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
