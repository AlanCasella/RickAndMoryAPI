import React, { useState } from "react";
import Characters from "./characters";
import Character from "./character";

const Search = () => {
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");

  function handleChange(e) {
      if(e.target.value == "") {
          setSearch("")
      }
    setName(e.target.value);
  }

  function handleSubmit(e) {
      e.preventDefault()
      console.log(name, "Es lo que esta en la search bar")
      setSearch(name)
  }

  return (
    <>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Search Name

          <input type="text" value={name} name="name" onChange={(e) => handleChange(e)}/>
          </label>
          <input type="submit" value="Search" />
        </form>
      </div>
      {search === "" ? (
          <Characters></Characters>
          ) : (
          <Character search={name}></Character>
      )}
    </>
  );
};

export default Search;
