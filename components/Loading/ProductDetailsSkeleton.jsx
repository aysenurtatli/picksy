import React from "react";
import { Skeleton } from "../ui/skeleton";

const ProductDetailsSkeleton = () => {
  return (
    <div className="border p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 w-full">
      {/* Sol taraf: ürün görseli */}
      <div className="flex-1 flex  items-center">
        <Skeleton className="w-full max-w-md h-80 rounded-md" />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        {/* Başlık ve açıklama */}
        <div>
          <Skeleton className="h-6 w-3/4 mb-3" /> {/* ürün başlığı */}
          <Skeleton className="h-4 w-full mb-2" /> {/* açıklama satırı */}
          <Skeleton className="h-4 w-5/6 mb-6" /> {/* açıklama satırı */}
          {/* Shipping + Return bilgisi */}
          <div className="flex gap-2 mb-4">
            <Skeleton className="h-8 w-56 rounded-md" />
            <Skeleton className="h-8 w-44 rounded-md" />
          </div>
        </div>

        {/* Fiyat + Butonlar */}
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-20 rounded-md" /> {/* fiyat */}
          <div className="flex items-end gap-2">
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-8 rounded-md" /> {/* - */}
              <Skeleton className="h-8 w-6 rounded-md" /> {/* sayı */}
              <Skeleton className="h-8 w-8 rounded-md" /> {/* + */}
            </div>
            <Skeleton className="h-8 w-28 rounded-md" /> {/* Add to Cart */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
