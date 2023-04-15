import Image from "next/image";
import { generateFileName, nameToColor } from "../utils/helpers";

export default function Card({ product }) {
  let sizes = product.size.split(",");
  let colors = product.color.split(",");
  let fileName = generateFileName(product, false);

  if (colors.length < 2) {
    colors.push("Bold Black");
  }
  return (
    <div className="mt-4 border-b border-gray-300 py-4 product">
      <div className="flex px-4">
        <div className="w-32">
          <a
            href={"https://www.google.com/search?q=" + fileName + "&tbm=isch"}
            target="_new"
            onClick={() => {
              navigator.clipboard.writeText(fileName + ".jpg");
            }}
          >
            <img
              src={"/" + fileName + ".jpg"}
              alt={product.name}
              style={{ width: 125, height: "auto" }}
            />
          </a>
          {/* <img
            src="https://4750be237d0d872b5566-68faac92c40bbd561b56e400eee74ddb.ssl.cf3.rackcdn.com/125/14331.jpg"
            alt=""
            style={{ width: 125, height: "auto" }}
          /> */}
          <div>{product.item.split("-")[0]}</div>
          <div className="text-sm">{product.season}</div>
          <div>{product.date}</div>
        </div>
        <div className="flex-1 px-4">
          <span className="text-xl">{product.name}</span>
          <span style={{ width: 50, display: "inline-block" }}> </span>Retail
          price (ex VAT/Tax): $ {product.msrp} -{">"} Your Price:{" "}
          <b>$ {product.price}</b> (-
          {Math.round(
            ((product.msrp - product.price) / product.msrp) * 100
          )}%){" "}
          <table className="mt-4 ml-4">
            <tbody>
              <tr>
                <td></td>
                {/* Empty heading */}
                {sizes.map((size, index) => (
                  <th style={{ textAlign: "center" }} key={index}>
                    {size}
                  </th>
                ))}
              </tr>
              {colors.map((color, index) => (
                <tr key={index}>
                  <td className="p-1">
                    <span
                      className="inline-block w-4 h-4"
                      style={{ backgroundColor: nameToColor(color) }}
                    ></span>
                    <span> {color}</span>
                  </td>
                  {sizes.map((size) => (
                    <td
                      key={size}
                      style={{ textAlign: "center" }}
                      className="p-2"
                    >
                      <input
                        type="number"
                        className="order order-amount"
                        av="72"
                        name="order[888562354942]"
                      />{" "}
                      50
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="span2 text-right">
          <div className="ml-4">
            <input
              type="button"
              value="Save"
              className="bg-indigo-800 text-white rounded py-1 px-2 cursor-pointer"
              name="save_product"
            />
          </div>
          ${" "}
          <span className="text-right product_total_price text-xl inline-block mt-2">
            0
          </span>
        </div>
      </div>
    </div>
  );
}
