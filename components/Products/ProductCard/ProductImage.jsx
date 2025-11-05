import React from "react";

const ProductImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full rounded-lg self-stretch h-72 min-h-52 mb-7 object-contain"
    />
  );
};

export default ProductImage;
