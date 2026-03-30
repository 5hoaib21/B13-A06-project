import React from "react";
import { PiTrolleyFill } from "react-icons/pi";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handleProceedToCheckout = () => {
    setCarts([]);
  };
    const handleRemoveFromCart = (cart) => {
   carts.filter((item) => item.id !== cart.id);
   setCarts(carts.filter((item) => item.id !== cart.id))
  }

  return (
    <div className="container mx-auto p-10">
      <div className=" p-3 m-3 bg-base-100 border border-zinc-300 rounded-2xl">
        <h2 className="text-start font-semibold text-2xl">Your Cart</h2>
        <div>
          {
            carts.length === 0 ? <div className="flex flex-col justify-center items-center text-3xl p-20 m-20 space-y-5 text-zinc-400"><PiTrolleyFill /> <p>Your cart is empty</p></div> : <div><div>
           <div>
            {carts.map((cart) => (
              <div key={cart.id}>
                <div className="flex justify-between bg-base-200 items-center p-5 m-5 shadow-lg rounded-2xl border border-zinc-300 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center gap-3">
                    <img
                      className="h-10 w-10 object-contain"
                      src={cart.image}
                      alt={cart.name}
                    />
                    <div>
                      <h1 className="font-semibold">{cart.name}</h1>
                      <p className="text-sm text-zinc-400">
                        ${cart.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                    onClick={()=> handleRemoveFromCart(cart)}
                     className="btn btn-error btn-soft">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="flex justify-between items-center p-5 m-2">
              <p>Total</p>
              <p>${totalPrice}</p>
            </div>
            <div>
              <button
                onClick={() => handleProceedToCheckout()}
                className="btn btn-primary w-full rounded-2xl mb-3"
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
         </div></div>
          }
         
        </div>
      </div>
    </div>
  );
};

export default Cart;
