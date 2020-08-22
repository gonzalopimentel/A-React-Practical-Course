import React from "react";
import "../assets/styles/components/Search.scss";

const mainTitleText = "¿What do you wanna watch?";
const inputPlaceholder = "Search...";

const Search = () => (
  <section className="main">
    <h2 className="main__title">{mainTitleText}</h2>
    <input type="text" className="input" placeholder={inputPlaceholder} />
  </section>
);

export default Search;
