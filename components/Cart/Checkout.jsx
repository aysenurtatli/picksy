import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { FaRegCheckCircle } from "react-icons/fa";
import Checkmark from "../ui/checkmark";

const Checkout = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-6">
      <Checkmark />

      <h1 className="text-3xl font-bold">Thank you for your purchase!</h1>
      <p className="text-center max-w-md">
        Your order has been successfully placed. We appreciate your business and
        hope you enjoy your new items!
      </p>
      <Link href="/shop">
        <Button className="cursor-pointer mt-4">Continue Shopping</Button>
      </Link>
    </div>
  );
};

export default Checkout;
