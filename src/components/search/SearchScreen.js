import React from "react";
import { heroes } from "../../data/Heroes";
import { HeroCard } from "../heroes/HeroCard";

export const SearchScreen = () => {
  const heroesFilter = heroes;
  const handleSearch = () => {};
  return (
    <div>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
            ></input>
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            ></button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {heroesFilter.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
