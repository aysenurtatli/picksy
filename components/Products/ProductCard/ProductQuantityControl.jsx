import React from "react";
import { Button } from "../../ui/button";
import { Plus, Minus } from "lucide-react";

const ProductQuantityControl = ({ quantity, increase, decrease }) => {
  return (
    <div className="flex items-center border rounded-md w-max">
      <Button
        variant={"ghost"}
        size={"sm"}
        className={"cursor-pointer"}
        onClick={decrease}
      >
        <Minus />
      </Button>
      <span className="mx-2">{quantity}</span>
      <Button
        variant={"ghost"}
        size={"sm"}
        className={"cursor-pointer"}
        onClick={increase}
      >
        <Plus />
      </Button>
    </div>
  );
};

export default ProductQuantityControl;
