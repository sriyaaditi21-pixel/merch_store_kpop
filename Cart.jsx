function Cart({
  cart,
  increaseQty,
  decreaseQty,
  removeItem
}) {

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <h3>🛒 Cart is Empty</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div
              className="cart-item"
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.title}
              />

              <div>
                <h3>{item.title}</h3>

                <p>{item.group}</p>

                <p>
                  ₹{item.price}
                </p>

                <div className="qty-controls">

                  <button
                    onClick={() =>
                      decreaseQty(item.id)
                    }
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQty(item.id)
                    }
                  >
                    +
                  </button>

                </div>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeItem(item.id)
                  }
                >
                  Remove
                </button>

              </div>

            </div>
          ))}

          <h2>
            Total: ₹{total}
          </h2>

        </>
      )}

    </div>
  );
}

export default Cart;