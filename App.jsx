import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Users from "./pages/Users";
import Comments from "./pages/Comments";
import CartAPI from "./pages/CartAPI";

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("All");
  const [currentPage, setCurrentPage] = useState("home");

  const addToCart = (product) => {
    const existing = cart.find(
      (item) => item.id === product.id
    );

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  };

  return (
    <>
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartCount={cart.length}
      />

      {currentPage === "home" && (
        <>
          <div className="controls">
            <input
              type="text"
              placeholder="Search albums, lightsticks, hoodies..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

            <button
  onClick={() =>
    setSelectedGroup("All")
  }>
  All
</button>

<button
  onClick={() =>
    setSelectedGroup("ENHYPEN")
  }>
  ENHYPEN
</button>

<button
  onClick={() =>
    setSelectedGroup("BTS")
  }>
  BTS
</button>

<button
  onClick={() =>
    setSelectedGroup("BLACKPINK")
  }>
  BLACKPINK
</button>

<button
  onClick={() =>
    setSelectedGroup("TWICE")
  }>
  TWICE
</button>

<button
  onClick={() =>
    setSelectedGroup("Stray Kids")
  }>
  Stray Kids
</button>

<button
  onClick={() =>
    setSelectedGroup("SEVENTEEN")
  }>
  SEVENTEEN
</button>

<button
  onClick={() =>
    setSelectedGroup("TXT")
  }>
  TXT
</button>

<button
  onClick={() =>
    setSelectedGroup("ATEEZ")
  }>
  ATEEZ
</button>

<button
  onClick={() =>
    setSelectedGroup("Merch")
  }>
  Merch
</button>
          </div>

          <Home
            addToCart={addToCart}
            search={search}
            selectedGroup={selectedGroup}
          />
        </>
      )}

      {currentPage === "cart" && (
        <Cart
          cart={cart}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          removeItem={removeItem}
        />
      )}

            {currentPage === "cart" && (
        <Cart
          cart={cart}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          removeItem={removeItem}
        />
      )}

      {currentPage === "checkout" && (
        <Checkout cart={cart} />
      )}

      {currentPage === "users" && (
        <Users />
      )}

      {currentPage === "comments" && (
        <Comments />
      )}

      {currentPage === "Orders" && (
        <CartAPI/>
      )}

    </>
  );
}

export default App;