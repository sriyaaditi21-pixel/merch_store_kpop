import CheckoutForm from "../components/CheckoutForm";

function Checkout({ cart }) {

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-page">

      <h2>Checkout</h2>

      <h3>
        Order Total: ₹{total}
      </h3>

      <CheckoutForm />

    </div>
  );
}

export default Checkout;