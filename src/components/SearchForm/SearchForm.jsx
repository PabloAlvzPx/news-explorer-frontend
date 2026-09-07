import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search-form">
      <input
        type="text"
        className="search-form__input"
        placeholder="Introduce un tema"
        required
      />
      <button type="submit" className="search-form__button">
        Buscar
      </button>
    </form>
  );
}

export default SearchForm;
