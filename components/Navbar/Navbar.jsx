"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import { Menu, X } from "lucide-react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCartContext } from "@/contexts/cartContext";

const categories = [
  { name: "All", slug: "shop" },
  { name: "Beauty", slug: "beauty" },
  { name: "Fragrances", slug: "fragrances" },
  { name: "Furniture", slug: "furniture" },
  { name: "Groceries", slug: "groceries" },
];

const Navbar = () => {
  const { setTheme } = useTheme();
  const [menu, setMenu] = useState(false);
  const [catsOpen, setCatsOpen] = useState(false); // desktop hover
  const [mobileCatsOpen, setMobileCatsOpen] = useState(false); // mobile toggle
  const dropdownRef = useRef(null);
  const { totalItems } = useCartContext();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCatsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-20 flex items-center justify-between py-4 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative">
      <Link href={"/"}>
        <img
          src={"/picksy.svg"}
          alt="picksy"
          className="w-[125px] md:w-[150px]"
        />
      </Link>
      {/*Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <nav className="flex items-center gap-6">
          <div
            className="relative"
            ref={dropdownRef}
            onClick={() => setCatsOpen(!catsOpen)}
          >
            <button className="cursor-pointer">Categories</button>
            {catsOpen && (
              <div className="absolute top-full mt-2 left-0 bg-white dark:bg-neutral-900 shadow-md rounded-md py-2 w-48 z-40">
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={
                      c.slug === "shop" ? `/shop` : `/shop?category=${c.slug}`
                    }
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href={"/shop"}>Shop</Link>
          <Link href={"/cart"}>
            <div className="relative">
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-emerald-600 text-white text-xs flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
              <MdOutlineShoppingCart size={28} />
            </div>
          </Link>
        </nav>

        {/* Theme Toggle */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Mobile Menu Toggle */}
      <button
        className={`relative  md:hidden w-10 h-10 flex items-center justify-center transition-transform duration-200 ease-in-out ${
          menu ? "rotate-90" : "rotate-0"
        }`}
        onClick={() => setMenu(!menu)}
        aria-expanded={menu}
        aria-label={menu ? "Close menu" : "Open menu"}
      >
        <Menu
          className={`absolute transition-all duration-200 ease-in-out ${
            menu ? "opacity-0 scale-90" : "opacity-100 scale-100"
          }`}
        />
        <X
          className={`absolute transition-all duration-200 ease-in-out ${
            menu ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        />
      </button>
      {/* Mobile Menu */}
      {menu && (
        <div className="absolute bg-accent top-20 left-0 w-full flex flex-col items-center gap-6 shadow-md md:hidden z-50">
          <nav className="flex flex-col items-center gap-4 py-4 w-full">
            <button
              className="w-full text-left px-6 py-2 text-lg flex justify-between items-center"
              onClick={() => setMobileCatsOpen(!mobileCatsOpen)}
            >
              <span>Categories</span>
              <span>{mobileCatsOpen ? "−" : "+"}</span>
            </button>
            {mobileCatsOpen &&
              categories.map((c) => (
                <Link
                  key={c.slug}
                  href={
                    c.slug === "shop" ? `/shop` : `/shop?category=${c.slug}`
                  }
                  onClick={() => setMenu(false)}
                  className="w-full px-8 py-2"
                >
                  {c.name}
                </Link>
              ))}
            <Link
              href={"/shop"}
              onClick={() => setMenu(false)}
              className="w-full px-6 py-2 text-lg"
            >
              Shop
            </Link>
            <Link
              href={"/cart"}
              onClick={() => setMenu(false)}
              className="relative w-full px-6 py-2 text-lg"
            >
              Cart
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
