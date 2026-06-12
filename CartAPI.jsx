import { useEffect, useState } from "react";

function CartAPI() {

  const [carts, setCarts] = useState([]);

  useEffect(() => {

    async function fetchCarts() {

      const response =
        await fetch(
          "https://dummyjson.com/carts"
        );

      const data =
        await response.json();

      setCarts(data.carts);
    }

    fetchCarts();

  }, []);

  return (
    <div className="api-page">

      <h2>Previous Orders</h2>

      {carts.slice(0, 10).map((cart) => (

        <div
          className="api-card"
          key={cart.id}
        >

          <h3>
            Cart ID:
            {cart.id}
          </h3>

          <p>
            Products:
            {cart.totalProducts}
          </p>

          <p>
            Total:
            ₹{cart.total}
          </p>

        </div>

      ))}

    </div>
  );
}

export default CartAPI;