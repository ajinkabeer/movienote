import React from "react";

export function ResetSearch({ searchValue, setSearchValue }) {
  if (!searchValue) {
    return "";
  }
  return <button onClick={() => setSearchValue("")}>Reset Search</button>;
}
