import "./Search.scss";

const Search = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="search..."
        className="pa2 ba b--blue bg-lightest-blue"
        onChange={searchChange}
      />
    </div>
  );
};

export default Search;
