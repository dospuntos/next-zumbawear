import { useEffect, useState } from "react";
import SeasonsTags from "./SeasonsTags";
import SpecialTags from "./SpecialTags";

export default function Filters({
  activeSeason,
  setActiveSeason,
  activeTag,
  setActiveTag,
}) {
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

  const seasons = [...new Set(products.map((item) => item.season))];
  let tags = [...new Set(products.flatMap((item) => item.tags.split(",")))];

  return (
    <>
      <SpecialTags
        tags={tags}
        activeTag={activeTag}
        setActiveTag={setActiveTag}
      />
      <br />
      <SeasonsTags
        seasons={seasons}
        activeSeason={activeSeason}
        setActiveSeason={setActiveSeason}
      />
    </>
  );
}
