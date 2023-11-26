function Search() {
  return (
    <div className="middle-section">
      <input className="search-bar" type="text" placeholder="Search" />
      <button className="search-button">
        <img className="search-icon" src="./icons/search.svg" />
        <div className="tooltip">Search</div>
      </button>
      <button className="voice-search-button">
        <img
          className="voice-search-icon"
          src="./icons/voice-search-icon.svg"
        />
        <div className="tooltip">Search with your voice</div>
      </button>
    </div>
  );
}

export default Search;
