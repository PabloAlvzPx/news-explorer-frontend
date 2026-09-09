import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!keyword.trim()) {
      setError("Por favor, introduzca una palabra clave");
      return;
    }

    onSearch(keyword);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        className="search-form__input"
        placeholder="Introduce un tema"
        value={keyword}
        onChange={handleChange}
        required
      />
      <button type="submit" className="search-form__button">
        Buscar
      </button>

      {error && <span className="search-form__error">{error}</span>}
    </form>
  );
}

export default SearchForm;
