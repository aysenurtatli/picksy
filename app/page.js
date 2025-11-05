"use client";
import Header from "@/components/Header/Header";
import ProductCard from "@/components/Products/ProductCard/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import CardSkeleton from "@/components/Loading/CardSkeleton";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const { topSixProduct, loading } = useProducts();

  return (
    <div>
      <Header />
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {loading
            ? Array(6)
                .fill()
                .map((_, i) => <CardSkeleton key={i} />)
            : topSixProduct.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </motion.div>
        <div className="flex items-center justify-center">
          <Link href={"/shop"}>See all</Link>
        </div>
      </section>
    </div>
  );
}
