import { useEffect, useState } from "react";
import Card from "./Card";

const Products = ({ activeSeason, activeTag }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/data.json");
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  if (!products) {
    return <div>Loading...</div>;
  }

  let filteredProducts = products;

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
