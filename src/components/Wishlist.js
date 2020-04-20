import React from "react";

export function Wishlist({ wishlist, setWishlist }) {
  return (
    <>
      <h2>Wishlist</h2>
      <pre>{JSON.stringify(wishlist, null, 1)}</pre>
    </>
  );
}
