import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Filters from "../components/Filters";
import { useState } from "react";
import Cartfield from "../components/Cartfield";

export default function Home({ products }) {
  let seasons = [...new Set(Array.from(products).map((item) => item.season))];
  let tags = [
    ...new Set(Array.from(products).flatMap((item) => item.tags.split(","))),
  ];
  const [activeSeason, setActiveSeason] = useState("");
  const [activeTag, setActiveTag] = useState("");
  const [cart, setCart] = useState({
    total: 0,
    items: {
      name: "TEST",
      price: 12,
      quantity: 1,
    },
  });
  const [viewCart, setViewCart] = useState(false);

  return (
    <div className="min-h-screen relative pb-24">
      <Head>
        <title>Zumba Wear Reseller Shop</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="High quality sports wear" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="container pt-16 px-4 h-full min-h-full">
        {!viewCart ? (
          <>
            <div
              class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
              role="alert"
            >
              <p class="font-bold">Technical difficulties</p>
              <p>
                Sorry, we are currently experiencing temporary technical
                difficulties. We are working to resolve the issue as quickly as
                possible. Thank you for your patience.
              </p>
            </div>

            <h3 className="mt-12 text-3xl">Current</h3>
            <Filters
              activeSeason={activeSeason}
              setActiveSeason={setActiveSeason}
              activeTag={activeTag}
              setActiveTag={setActiveTag}
              seasons={seasons}
              tags={tags}
            />

            <Products
              activeSeason={activeSeason}
              activeTag={activeTag}
              products={products}
              setCart={setCart}
              cart={cart}
            />
          </>
        ) : (
          <ViewCart />
        )}
      </div>

      <Footer />
      <Cartfield value={cart.total} setViewCart={setViewCart} />
    </div>
  );
}

// Fetching data from the JSON file
import fsPromises from "fs/promises";
import path from "path";
import ViewCart from "../components/ViewCart";
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "/public/data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const products = JSON.parse(jsonData);

  return {
    props: products,
  };
}
