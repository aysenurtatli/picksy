"use client";
import { useRouter, useSearchParams } from "next/navigation";
import ProductList from "@/components/Products/ProductList";
import { useProducts } from "@/hooks/useProducts";
import React, { useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FilterCategory from "@/components/Category/FilterCategory";

const Page = () => {
  const {
    filteredProducts,
    loading,
    categories,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categoryLoading,
    sortOption,
    setSortOption,
  } = useProducts();

  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam, setSelectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const queryParam = category === "all" ? "" : `?category=${category}`;
    router.push(`/shop${queryParam}`, { scroll: false });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="my-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
            </BreadcrumbItem>

            {categoryParam && categoryParam !== "all" && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryChange("all");
                    }}
                  >
                    Categories
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}

            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {categoryParam && categoryParam !== "all"
                  ? categoryParam
                  : "All Items"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center gap-6 my-3">
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <Select
            value={sortOption}
            onValueChange={(value) => setSortOption(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="recommended">recommended</SelectItem>
                <SelectItem value="lowest">lowest price</SelectItem>
                <SelectItem value="highest">highest price</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="w-full flex lg:flex-row flex-col-reverse items-start">
        <ProductList products={filteredProducts} loading={loading} />
        <FilterCategory
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategoryChange}
          categoryLoading={categoryLoading}
        />
      </div>
    </div>
  );
};

export default Page;
