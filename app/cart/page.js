"use client";
import { Button } from "@/components/ui/button";
import { useCartContext } from "@/contexts/cartContext";
import Link from "next/link";
import React, { useState } from "react";
import Checkout from "@/components/Cart/Checkout";
import CartList from "@/components/Cart/CartList";

const Page = () => {
  const { cartItems, clearCart } = useCartContext();
  const [ordered, setOrdered] = useState(false);
  const shippingTax = 5.99;

  function handleOrderComplete() {
    clearCart();
    setOrdered(true);
  }

  function calculateTotal() {
    const itemsTotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    if (itemsTotal >= 50) {
      return itemsTotal.toFixed(2);
    }

    return (itemsTotal + shippingTax).toFixed(2);
  }

  return (
    <main className="max-w-7xl mx-auto h-[calc(100vh-100px-128px)] px-4 md:px-6 lg:px-8">
      <section className="max-w-3xl mx-auto my-10 p-6 border rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

        {!ordered && (
          <>
            {cartItems.length === 0 ? (
              <section className="text-center">
                <p>Your cart is empty.</p>
                <Link href="/shop">
                  <Button className="mt-4 cursor-pointer">Go to Shop</Button>
                </Link>
              </section>
            ) : (
              <CartList items={cartItems} />
            )}

            {cartItems.length > 0 && (
              <div className="mt-4 block md:flex justify-between items-center border-t pt-4">
                <div>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mb-2">
                    <span
                      className={`transition-all ${
                        cartItems.reduce(
                          (t, i) => t + i.price * i.quantity,
                          0
                        ) >= 50
                          ? "line-through text-gray-400 dark:text-gray-500"
                          : ""
                      }`}
                    >
                      Shipping tax: ${shippingTax}
                    </span>
                    {cartItems.reduce((t, i) => t + i.price * i.quantity, 0) >=
                      50 && (
                      <span className="text-green-600 font-medium">
                        Free Shipping
                      </span>
                    )}
                  </div>

                  <h2 className="text-lg font-semibold">
                    Total: ${calculateTotal()}
                  </h2>
                </div>
                <Button
                  onClick={handleOrderComplete}
                  className="cursor-pointer w-full md:w-fit mt-4 md:mt-0"
                >
                  Proceed to Checkout
                </Button>
              </div>
            )}
          </>
        )}

        {ordered && (
          <section className="text-center mt-6">
            <Checkout />
          </section>
        )}
      </section>
    </main>
  );
};

export default Page;
