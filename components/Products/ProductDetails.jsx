import React, { useState } from "react";
import { Truck, RotateCcw } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useCartContext } from "@/contexts/cartContext";
import ProductQuantityControl from "./ProductCard/ProductQuantityControl";

const ProductDetails = ({ product }) => {
  const { addToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <article
      className="border p-4 md:p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6"
      aria-labelledby={`product-${product.id || product.title}`}
    >
      <figure className="w-full md:w-1/2 flex-shrink-0">
        <Image
          src={product.img}
          alt={product.title}
          width={800}
          height={800}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full h-64 md:h-80 object-contain rounded-md border"
        />
        <figcaption className="sr-only">{product.title}</figcaption>
      </figure>

      <div className="flex flex-col justify-between w-full md:w-1/2">
        <header>
          <h1
            id={`product-${product.id || product.title}`}
            className="text-2xl font-semibold mb-2"
          >
            {product.title}
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {product.description || "No description available."}
          </p>
        </header>

        <section
          aria-label="Shipping and return information"
          className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4"
        >
          <div className="bg-accent p-1 rounded-md text-sm w-fit">
            <div className="flex items-center gap-2">
              <Truck />
              <span>{product.shippingInformation}</span>
            </div>
          </div>

          <div className="bg-accent p-1 rounded-md text-sm w-fit">
            <div className="flex items-center gap-2">
              <RotateCcw />
              <span>{product.returnPolicy}</span>
            </div>
          </div>
        </section>

        <footer className="flex flex-col sm:flex-row justify-between items-center mt-auto gap-4">
          <p className="text-xl font-bold text-green-600">
            ${Number(product.price).toFixed(2)}
          </p>

          <div className="flex items-center gap-3">
            <ProductQuantityControl
              increase={increaseQuantity}
              decrease={decreaseQuantity}
              quantity={quantity}
            />

            <Button
              onClick={() => addToCart(product, quantity)}
              className="h-8 px-4 cursor-pointer"
              aria-label="Add to cart"
            >
              Add To Cart
            </Button>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default ProductDetails;
