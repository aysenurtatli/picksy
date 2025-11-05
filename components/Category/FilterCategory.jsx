"use client";
import React from "react";
import { motion } from "framer-motion";
import { useProducts } from "@/hooks/useProducts";
import CategorySkeleton from "../Loading/CategorySkeleton";

const FilterCategory = ({
  categories = [],
  selectedCategory,
  setSelectedCategory,
  categoryLoading,
}) => {
  return (
    <div className="w-full lg:w-2/12 lg:mb-0 mb-7 pl-0 lg:pl-6 lg:sticky top-10">
      <ul className="flex flex-col gap-3">
        {categoryLoading ? (
          Array(5)
            .fill(null)
            .map((_, i) => <CategorySkeleton key={i} />)
        ) : (
          <>
            {categories.map((category) => (
              <motion.li
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`py-1 cursor-pointer px-2 border border-grayshade-50 dark:border-grayshade-300 rounded-md dark:bg-grayshade-500 transition-all duration-300 ${
                  selectedCategory === category.name ? "bg-secondary" : ""
                }`}
              >
                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
              </motion.li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default FilterCategory;
