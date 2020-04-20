import React, { useRef, useEffect } from "react";

export function Search({ searchValue, setSearchValue }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        placeholder="search for a movie"
        value={searchValue}
        onChange={handleChange}
      />
    </>
  );
}
