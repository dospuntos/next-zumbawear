import { formatter } from "../utils/helpers";

export default function Cartfield({ value, setViewCart }) {
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
          href="#/"
          onClick={() => setViewCart(true)}
          className="bg-indigo-800 text-white rounded py-1 px-2"
          id="view_cart"
        >
          View Cart
        </a>
      </div>
    </div>
  );
}
