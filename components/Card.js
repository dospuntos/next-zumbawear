import { useState } from "react";
import {
  generateFileName,
  nameToColor,
  funHash,
  createNewInputs,
  formatter,
} from "../utils/helpers";

export default function Card({ product, setCart, cart }) {
  let sizes = product.size.split(",");
  let colors = product.color.split(",");
  let fileName = generateFileName(product, false);
  const [edited, setEdited] = useState(false);
  const [cardTotal, setCardTotal] = useState(0);
  const [inputs, setInputs] = useState(
    createNewInputs(colors.length * sizes.length)
  );

  function handleInputChange(event) {
    const { name, value } = event.target;
    const index = inputs.findIndex((input) => input.name === name);

    const updatedInputs = [...inputs];
    updatedInputs[index].value = Number(value);
    setInputs(updatedInputs);

    // Add value of all input fields
    const productCount = updatedInputs.reduce(
      (sum, input) => sum + input.value,
      0
    );

    // Calculate card total
    setCardTotal(productCount * product.price);
  }

  return (
    <div
      className="mt-4 border-b border-gray-300 py-4 product"
      style={
        edited
          ? { backgroundColor: "rgb(254, 235, 200)" }
          : { backgroundColor: "#fff" }
      }
    >
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
              {colors.map((color, index) => {
                return (
                  <tr key={index}>
                    <td className="p-1">
                      <span
                        className="inline-block w-4 h-4"
                        style={{ backgroundColor: nameToColor(color) }}
                      ></span>
                      <span> {color}</span>
                    </td>
                    {sizes.map((size, index) => (
                      <td
                        key={size}
                        name={`input${index}`}
                        style={{ textAlign: "center" }}
                        className="p-2"
                      >
                        <input
                          type="number"
                          name={`input-${index}`}
                          required={true}
                          min="0"
                          max={funHash(product.name + color + size)}
                          className="order order-amount"
                          onChange={handleInputChange}
                          onBlur={(e) => {
                            setEdited(true);
                          }}
                        />{" "}
                        {funHash(product.name + color + size)}
                      </td>
                    ))}
                  </tr>
                );
              })}
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
              onClick={() => {
                setCart({ ...cart, total: cardTotal + cart.total });
                setEdited(false);
              }}
            />
          </div>
          <span className="text-right product_total_price text-xl inline-block mt-2">
            {formatter.format(cardTotal)}
          </span>
        </div>
      </div>
    </div>
  );
}
