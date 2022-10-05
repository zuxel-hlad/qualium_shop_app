import AppHeader from '../app-header/app-header';
import AppFooter from '../app-footer/app-footer';
import './app.scss';

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <main className="app-main">h1 MAIN APP</main>
      <AppFooter />
    </div>
  );
};

export default App;
