"use client";
import { useProducts } from "@/hooks/useProducts";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import ProductDetails from "@/components/Products/ProductDetails";
import ProductDetailsSkeleton from "@/components/Loading/ProductDetailsSkeleton";
import ProductReviews from "@/components/Products/ProductReviews";

const Page = () => {
  const { category, item } = useParams();
  const { products, loading } = useProducts();
  const product = products.find(
    (prod) =>
      prod.category.toLowerCase() === category.toLowerCase() &&
      prod.title.replace(/\s+/g, "-").toLowerCase() === item.toLowerCase()
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="max-w-7xl mx-auto my-4 px-4 md:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="mb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {product?.category ? product.category : ""}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Product Details</h1>
        <Link href="/shop">
          <Button variant={"outline"} className={"cursor-pointer"}>
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>
      </header>
      {loading ? (
        <ProductDetailsSkeleton />
      ) : (
        <motion.article
          className="max-w-7xl mx-auto my-10"
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <section aria-labelledby="product-overview">
            <h2 id="product-overview" className="sr-only">
              {product ? (
                <ProductDetails product={product} key={product.id} />
              ) : (
                <ProductDetailsSkeleton />
              )}
            </h2>
            <ProductDetails product={product} />
          </section>
          {product ? <ProductReviews product={product} /> : null}
        </motion.article>
      )}
    </main>
  );
};

export default Page;
