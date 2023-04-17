import Card from "./Card";

const Products = ({ activeSeason, activeTag, products }) => {
  let filteredProducts = Array.from(products);

  if (activeSeason !== "") {
    filteredProducts = products.filter(
      (product) => product.season == activeSeason
    );
  }

  /* if (activeTag !== "" || activeTag !== "all") {
    filteredProducts = products.filter((product) =>
      product.tags.includes(activeTag)
    );
  } */

  return (
    <div>
      {filteredProducts.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;
