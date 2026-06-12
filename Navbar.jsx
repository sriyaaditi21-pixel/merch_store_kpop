function Navbar({
  currentPage,
  setCurrentPage,
  cartCount
}) {
  return (
    <nav className="navbar">

      <div>
        <h1>Kartify K-Pop Store</h1>
        <p>K-Pop Merch Store</p>
      </div>

      <div className="nav-buttons">

        <button
          onClick={() =>
            setCurrentPage("home")
          }
        >
          Home
        </button>

        <button
          onClick={() =>
            setCurrentPage("cart")
          }
        >
          Cart ({cartCount})
        </button>

        <button
          onClick={() =>
            setCurrentPage("checkout")
          }
        >
          Checkout
        </button>

        <button
          onClick={() =>
            setCurrentPage("users")
          }
        >
          Users
        </button>

        <button
          onClick={() =>
            setCurrentPage("comments")
          }
        >
          Comments
        </button>

        <button
          onClick={() =>
            setCurrentPage("Orders")
          }
        >
          Previous Orders
        </button>

      </div>

    </nav>
  );
}

export default Navbar;