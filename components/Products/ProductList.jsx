import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import "react-loading-skeleton/dist/skeleton.css";
import CardSkeleton from "../Loading/CardSkeleton";

const ProductList = ({ products = [], loading }) => {
  if (loading) {
    return (
      <div className="lg:w-10/12 md:w-10/12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 lg:gap-7 gap-4 m-auto">
        {Array(8)
          .fill()
          .map((_, i) => (
            <CardSkeleton key={i} />
          ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full mx-auto min-h-[500px]">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No products found.
        </p>
      )}
    </div>
  );
};

export default ProductList;
