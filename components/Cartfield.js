export default function Cartfield({ value }) {
  // Create our number formatter.
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <div
      id="collection_total"
      className="z-50 bg-white rounded fixed top-0 left-1/2 min-w-64 -ml-32 mt-3 leading-9 px-2 flex"
    >
      <div className="flex-1 w-48">
        <span id="collection_total_price">{formatter.format(value)}</span>{" "}
      </div>
      <div className="text-right">
        <a
          href="https://shop.zumbawear.eu/overview?collection=Current&amp;cg=Current"
          className="bg-indigo-800 text-white rounded py-1 px-2"
          id="view_cart"
        >
          View Cart
        </a>
      </div>
    </div>
  );
}
