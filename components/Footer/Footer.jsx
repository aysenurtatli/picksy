import React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Shop", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
];

const categories = [
  { label: "Men", href: "#" },
  { label: "Women", href: "#" },
  { label: "Accessories", href: "#" },
  { label: "New Arrivals", href: "#" },
];

const customerService = [
  { label: "FAQ", href: "#" },
  { label: "Shipping & Returns", href: "#" },
  { label: "Order Tracking", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const contactInfo = [
  { icon: MapPin, text: "123 Fashion St, New York, USA" },
  { icon: Mail, text: "support@shopnow.com" },
  { icon: Phone, text: "+1 (800) 555-1234" },
];

const socials = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Youtube, href: "#" },
];

const Footer = () => {
  return (
    <footer className="border-t py-12 mt-20 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link href={"/"} className="block mb-4">
            <img
              src={"/picksy.svg"}
              alt="picksy"
              className="w-[85px] md:w-[100px]"
            />
          </Link>
          <p className="text-gray-400 mb-6">
            Discover the latest fashion trends and shop your favorite styles at
            the best prices.
          </p>
          <ul className="flex space-x-4">
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <li key={i}>
                  <a
                    href={s.href}
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 hover:border-primary hover:text-primary transition"
                  >
                    <Icon size={18} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
          <ul className="space-y-2">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="text-gray-400 transition">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Categories</h5>
          <ul className="space-y-2">
            {categories.map((cat, i) => (
              <li key={i}>
                <a href={cat.href} className="text-gray-400 transition">
                  {cat.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
          <ul className="space-y-3">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <li
                  key={i}
                  className="flex items-start space-x-3 text-gray-400"
                >
                  <Icon size={18} className="text-primary mt-1" />
                  <span>{item.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t  mt-10 pt-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} ShopNow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
