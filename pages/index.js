import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Filters from "../components/Filters";
import { useState } from "react";
import Cartfield from "../components/Cartfield";

export default function Home() {
  const [activeSeason, setActiveSeason] = useState("");
  const [activeTag, setActiveTag] = useState("");
  const [cart, setCart] = useState({
    total: 12,
    items: {
      name: "TEST",
      price: 12,
      quantity: 1,
    },
  });

  return (
    <div className="min-h-screen relative pb-24">
      <Head>
        <title>Zumba Wear Reseller Shop</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="container pt-16 px-4 h-full min-h-full">
        <h3 className="mt-12 text-3xl">Current</h3>

        <Filters
          activeSeason={activeSeason}
          setActiveSeason={setActiveSeason}
          activeTag={activeTag}
          setActiveTag={setActiveTag}
        />

        <Products activeSeason={activeSeason} activeTag={activeTag} />
      </div>

      <Footer />
      <Cartfield value={cart.total} />
    </div>
  );
}
