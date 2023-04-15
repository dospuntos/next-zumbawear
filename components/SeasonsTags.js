export default function SeasonsTags({
  seasons,
  activeSeason,
  setActiveSeason,
}) {
  return (
    <div>
      {seasons.map((season) => (
        <button
          key={season}
          className={
            "tag px-2 py-1 border border-gray-600 text-gray-800 m-1 rounded" +
            (activeSeason == season ? " active tag-active" : "")
          }
          tagtype="season"
          onClick={() => setActiveSeason(activeSeason == season ? "" : season)}
        >
          {season}
        </button>
      ))}
    </div>
  );
}
