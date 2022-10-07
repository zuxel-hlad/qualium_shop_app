import { useState } from 'react';
import clear from '../../assets/svg/clear.svg';
import './app-search-form.scss';

const AppSearchForm = (props) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <form className={`search-form ${props.className}`}>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        name="search"
        placeholder="Find your product"
      />
      <button
        className="search-form__clear"
        type="button"
        onClick={() => setSearchQuery('')}
      >
        <img src={clear} alt="clear" />
      </button>
    </form>
  );
};

export default AppSearchForm;
