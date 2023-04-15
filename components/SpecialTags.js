export default function SpecialTags({ tags, activeTag, setActiveTag }) {
  return (
    <div>
      <button
        className={
          "tag px-2 py-1 bg-red-800 text-white font-bold border border-gray-600 m-1 rounded" +
          (activeTag == "all" ? " active tag-active" : "")
        }
        tagtype="clearance"
        tag="see-all"
        onClick={() => setActiveTag(activeTag == "all" ? "" : "all")}
      >
        See All
      </button>
      {tags.map((tag, index) =>
        tag.length ? (
          <button
            key={index}
            className={
              "tag px-2 py-1 bg-red-800 text-white font-bold border border-gray-600 m-1 rounded" +
              (activeTag == tag ? " active tag-active" : "")
            }
            tagtype="clearance"
            tag="new"
            onClick={() => setActiveTag(activeTag == tag ? "" : tag)}
          >
            {tag}
          </button>
        ) : null
      )}{" "}
    </div>
  );
}
