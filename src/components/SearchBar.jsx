import searchIcon from '../images/search.svg';

const SearchBar = ({ query, onQueryChange, onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <form className="search-bar" role="search" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search movies, series, games..."
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        aria-label="Search movies"
      />
      <button type="submit" aria-label="Search" disabled={!query.trim()}>
        {/* <img src={searchIcon} alt="" /> */}
        <span className="search-icon" aria-hidden="true">💭🤔</span>
      </button>
    </form>
  );
};

export default SearchBar;
