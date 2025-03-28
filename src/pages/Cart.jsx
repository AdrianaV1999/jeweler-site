import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import DeleteIcon from "@mui/icons-material/Delete";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const tempData = [];
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        tempData.push({
          id: item,
          quantity: cartItems[item],
        });
      }
    }
    console.log(tempData);
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product.id === Number(item.id)
          );

          return (
            <div
              key={index}
              className="py-4 border-t border-b border-gray-300 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={productData.image} alt="" />

                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(item.id, Number(e.target.value))
                }
                className="border border-gray-300 max-w-10 sm:max-w-20 px-1 sm:px-2 py-1="
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
              <DeleteIcon
                onClick={() => updateQuantity(item.id, 0)}
                className="w-4 mr-4 sm:w-5 cursor-pointer ml-auto"
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[460px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white text-sm my-8 px-8 py-3"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
