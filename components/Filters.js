import { useEffect, useState } from "react";
import SeasonsTags from "./SeasonsTags";
import SpecialTags from "./SpecialTags";

export default function Filters({
  activeSeason,
  setActiveSeason,
  activeTag,
  setActiveTag,
  tags,
  seasons,
}) {
  /* const seasons = [...new Set(products.map((item) => item.season))];
  let tags = [...new Set(products.flatMap((item) => item.tags.split(",")))]; */

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
