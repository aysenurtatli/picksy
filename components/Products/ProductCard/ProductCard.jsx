import Link from "next/link";
import { Button } from "../../ui/button";
import { motion } from "framer-motion";
import { useCartContext } from "@/contexts/cartContext";
import { useState } from "react";
import ProductImage from "./ProductImage";
import ProductQuantityControl from "./ProductQuantityControl";

const ProductCard = ({ product }) => {
  const { addToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`md:p-4 lg:p-7 p-3 border border-grayshade-50 dark:border-grayshade-300 rounded-xl dark:bg-grayshade-500 w-full justify-center justify-items-center justify-self-center `}
    >
      <Link
        href={`/shop/${product.category}/${product.title
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
      >
        <ProductImage src={product.img} alt={product.title} />
      </Link>
      <div className="w-full border-t pt-4 flex flex-col gap-4">
        <Link
          href={`/shop/${product.category}/${product.title
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
          className="hover:underline"
        >
          <h3 className="font-bold line-clamp-2">{product.title}</h3>
        </Link>
        <div className="flex justify-between items-center w-full">
          <div>
            <p className="text-grayshade-100 dark:text-grayshade-50 text-xs">
              Price
            </p>
            <p className="font-semibold text-grayshade-300 dark:text-white text-lg">
              ${product.price}
            </p>
          </div>
          <div>
            <Button
              onClick={() => addToCart(product, quantity)}
              className=" cursor-pointer"
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
