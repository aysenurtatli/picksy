import React from "react";
import { CartProvider } from "@/contexts/cartContext";

const providers = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default providers;
