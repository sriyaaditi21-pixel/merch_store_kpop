function ProductCard({
  title,
  price,
  image,
  group,
  addToCart,
  ...rest
}) {
  return (
    <div className="card">
      <img
        src={image}
        alt={title}
      />

      <h3>{title}</h3>

      <p>{group}</p>

      <h4>₹{price}</h4>

      <button onClick={addToCart}>
        Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;