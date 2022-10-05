import './app-header.scss';

const AppHeader = () => {
  return (
    <header className="app-header">
      <a href="#" className="app-header__logo">
        Shop App
      </a>
      <nav className="app-header__nav">
        <ul className="app-header__nav-list">
          <li>
            <a href="!#" className="app-header__nav-link">
              Main View
            </a>
          </li>
          <li>
            <a href="!#" className="app-header__nav-link">
              Cart view
            </a>
          </li>
          <li>
            <a href="!#" className="app-header__nav-link">
              EditView
            </a>
          </li>
          <li>
            <a href="!#" className="app-header__nav-link">
              Create View
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
