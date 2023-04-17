export default function ViewCart() {
  return (
    <div className="flex flex-wrap mt-8">
      <div className="flex-auto mr-4 mb-8">
        <div className="flex flex-col">
          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                      Item
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                      Unit Price
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                      Total
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr upc="888562381580">
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            src="https://4750be237d0d872b5566-68faac92c40bbd561b56e400eee74ddb.ssl.cf3.rackcdn.com/125/14844.jpg"
                            className="h-10 w-10 rounded-full"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm leading-5 font-medium text-gray-900">
                            J1B000002 Zumba X Hello Kitty &amp; Friends ZW
                            Juniors Joggers
                          </div>
                          <div className="text-sm leading-5 text-gray-600">
                            Wear It Out White XS
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-sm text-center border-gray-200">
                      <input
                        type="text"
                        style={{ width: 40 }}
                        value="1"
                        className="overview-quantity order-amount text-sm"
                        av="18"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm rate">
                      10.73
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                      $ <span className="product_total_price">10.73</span>{" "}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium cursor-pointer">
                      <span className="overview-remove icon-remove">X</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-auto w-64" style={{ position: "relative" }}>
        <form
          method="post"
          action="https://shop.zumbawear.eu/place_order"
          id="place_order_form"
        >
          <input
            type="hidden"
            name="_token"
            value="9e3sb0Fe5hiKbDTm4G1SQGq9BL9Brk1FaodLdOVQ"
          />{" "}
          <input
            type="hidden"
            name="collection"
            id="collection"
            value="Current"
          />
          <input type="hidden" name="PID" id="PID" value="" />
          <input
            type="hidden"
            name="reseller_id"
            id="reseller_id"
            value="100408"
          />
          <input
            type="hidden"
            name="cg"
            id="collection_group"
            value="Current"
          />
          <div id="overview_total">
            <div className="block text-sm font-medium leading-5 text-gray-700">
              Total Current:
            </div>
            <div className="text-xl">$ 10,73</div>

            <div className="block text-sm font-medium text-red-800 bg-red-100 p-2 my-2">
              ⚠️ Minimum order value: 500,00
            </div>

            <div className="mt-2">
              <label
                for="shipping"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Shipping:
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <select
                  name="shipping"
                  id="shipping"
                  className="form-select block w-full sm:text-sm sm:leading-5"
                >
                  <option value="10">Ground ($ 10.43)</option>
                  <option value="11">3 Day Select ($ 14.38)</option>
                  <option value="12">2nd Day Air ($ 22.75)</option>
                  <option value="13">Next Day Air ($ 41.65)</option>
                </select>
              </div>
            </div>

            <hr className="mt-4 border border-gray-400" />
          </div>
          <div>
            <b>Last 4 digits Credit card number:</b>
            <br />
            <input
              id="ccnumber"
              type="text"
              name="details[ccnumber]"
              maxlength="4"
            />
          </div>
          <div id="shippingAddress" className="my-6">
            <div className="mt-2">
              <label
                for="addressee"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Recipient Name *
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  name="shippingAddress[addressee]"
                  id="addressee"
                  maxlength="35"
                  className="form-input block w-full sm:text-sm sm:leading-5"
                  value="Johan Wagenheim"
                  placeholder=""
                  required="required"
                />
              </div>
            </div>

            <div className="mt-2">
              <label
                for="attention"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Attention
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  name="shippingAddress[attention]"
                  id="attention"
                  maxlength="35"
                  className="form-input block w-full sm:text-sm sm:leading-5"
                  value=""
                  placeholder=""
                />
              </div>
            </div>

            <div className="mt-2">
              <label
                for="addressline1"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Addressline 1 *
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  name="shippingAddress[addressline1]"
                  id="addressline1"
                  maxlength="35"
                  className="form-input block w-full sm:text-sm sm:leading-5"
                  value="14029 SW 150 Terrace"
                  placeholder=""
                  required="required"
                />
              </div>
            </div>

            <div className="mt-2">
              <label
                for="addressline2"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Addressline 2
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  name="shippingAddress[addressline2]"
                  id="addressline2"
                  maxlength="35"
                  className="form-input block w-full sm:text-sm sm:leading-5"
                  value=""
                  placeholder=""
                />
              </div>
            </div>

            <div className="mt-2">
              <label
                for="postal_code"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Zip / Postal Code *
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  name="shippingAddress[postal_code]"
                  id="postal_code"
                  maxlength="10"
                  className="form-input block w-full sm:text-sm sm:leading-5"
                  value="33186"
                  placeholder=""
                  required="required"
                />
              </div>
            </div>

            <div className="mt-2">
              <label
                for="city"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                City *
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  name="shippingAddress[city]"
                  id="city"
                  maxlength="35"
                  className="form-input block w-full sm:text-sm sm:leading-5"
                  value="Miami"
                  placeholder=""
                  required="required"
                />
              </div>
            </div>

            <div className="mt-2">
              <label
                for="state"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                State / Province
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="stateText"
                  name="shippingAddress[state]"
                  maxlength="35"
                  className="form-input block w-full sm:text-sm sm:leading-5"
                  value="FL"
                  placeholder=""
                  disabled=""
                />
                <select
                  id="stateSelect"
                  name="shippingAddress[state]"
                  className="form-select block w-full sm:text-sm sm:leading-5"
                >
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL" selected="selected">
                    Florida
                  </option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
            </div>

            <div className="mt-2">
              <label
                for="city"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Country *
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <select
                  id="shippingCountry"
                  name="shippingAddress[country]"
                  className="form-select block w-full sm:text-sm sm:leading-5"
                >
                  <option value="BO">Bolivia</option>
                  <option value="US" selected="selected">
                    United States
                  </option>
                </select>
              </div>
            </div>

            <div className="mt-2">
              <label
                for="telephone"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Telephone #
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  name="shippingAddress[telephone]"
                  id="telephone"
                  maxlength="35"
                  className="form-input block w-full sm:text-sm sm:leading-5"
                  value="+1 7863174847"
                  placeholder=""
                  required="required"
                />
              </div>
            </div>

            <div className="mt-2">
              <label>
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  name="shippingAddress[setDefault]"
                />{" "}
                Save as default
              </label>
            </div>

            <div className="mt-4">
              <label
                for="telephone"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Additional Shipping Notes:
              </label>
              <textarea
                id="additionalshippingdetails"
                name="details[additional_shipping_details]"
                className=" mt-1 rounded shadow-sm w-full form-textarea text-sm"
              ></textarea>
            </div>
          </div>
          <button
            className="bg-indigo-700 text-white px-4 py-2 text-xl text-center font-bold w-full"
            type="submit"
            id="place_order"
            style={{ display: "inline-block" }}
          >
            Place order
          </button>
        </form>
      </div>
    </div>
  );
}
