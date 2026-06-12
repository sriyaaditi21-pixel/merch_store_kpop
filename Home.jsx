import products from "../data/product";
import ProductCard from "../components/ProductCard";

function Home({
  addToCart,
  search,
  selectedGroup
}) {

  const filteredProducts =
    products.filter((product) => {

      const matchesSearch =
        product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesGroup =
        selectedGroup === "All"
        ||
        product.group === selectedGroup;

      return matchesSearch && matchesGroup;
    });

  return (
    <div className="products">

      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          group={product.group}
          addToCart={() => addToCart(product)}
        />
      ))}

    </div>
  );
}

export default Home;