import { useState } from "react";

function CheckoutForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      address === ""
    ) {
      setMessage("Please fill all fields");
      return;
    }

    setMessage("🎉 Order Placed Successfully!");

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <form
      className="checkout-form"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) =>
          setPhone(e.target.value)
        }
      />

      <textarea
        placeholder="Address"
        value={address}
        onChange={(e) =>
          setAddress(e.target.value)
        }
      />

      <button type="submit">
        Place Order
      </button>

      <p>{message}</p>

    </form>
  );
}

export default CheckoutForm;