export default function Search({ input = "", setInput, handleClick }) {
  return (
    <form className="top-bar">
      <input
        type="text"
        className="input"
        placeholder="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="search-icon" onClick={handleClick}>
        <img src="./Assets/search.png" alt=" search icaon" />
      </button>
    </form>
  );
}
