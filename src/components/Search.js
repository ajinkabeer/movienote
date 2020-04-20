import React, { useState, useRef, useEffect } from "react";

export function Search() {
  const [input, setInput] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        placeholder="search for a movie"
        value={input}
        onChange={handleChange}
      />
    </>
  );
}
