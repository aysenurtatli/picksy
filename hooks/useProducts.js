// hooks/useProducts.js
"use client";
import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);

  // * filter states
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => {
        const formattedData = result.products.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          img: item.images[0],
          category: item.category,
          description: item.description,
          rating: item.rating,
          reviews: item.reviews,
        }));
        setProducts(formattedData);
        setFilteredProducts(formattedData);
        const uniqueCategories = [
          "all",
          ...new Set(formattedData.map((i) => i.category)),
        ];
        setCategories(uniqueCategories.map((c, i) => ({ id: i + 1, name: c })));
        setCategoryLoading(false);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  // * Filtering logic
  useEffect(() => {
    let result = [...products];

    if (selectedCategory && selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim() !== "") {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOption === "lowest") result.sort((a, b) => a.price - b.price);
    else if (sortOption === "highest") result.sort((a, b) => b.price - a.price);

    setFilteredProducts(result);
  }, [products, selectedCategory, searchQuery, sortOption]);

  const topSixProduct = products.slice(0, 6);

  return {
    products,
    filteredProducts,
    loading,
    categories,
    categoryLoading,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    sortOption,
    setSortOption,
    topSixProduct,
  };
};
