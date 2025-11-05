import Link from "next/link";
import Image from "next/image";
import { useCartContext } from "@/contexts/cartContext";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import ProductQuantityControl from "../Products/ProductCard/ProductQuantityControl";

const CartItem = ({ item, onDeleteItem }) => {
  const { increaseQuantity, decreaseQuantity } = useCartContext();

  return (
    <li>
      <article className="flex justify-between items-center">
        <header className="flex items-center">
          <figure className="flex items-center m-0">
            <Image
              src={item.img}
              alt={item.title}
              width={64}
              height={64}
              className="w-16 h-16 object-cover mr-4 border"
            />
            <figcaption className="sr-only">{item.title}</figcaption>
            <div className="font-medium flex flex-col gap-1">
              <h3 className="m-0">
                <Link
                  href={`/shop/${item.category}/${item.title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  className="hover:underline"
                >
                  {item.title}
                </Link>
              </h3>

              <ProductQuantityControl
                quantity={item.quantity}
                increase={() => increaseQuantity(item.id)}
                decrease={() => decreaseQuantity(item.id)}
              />
            </div>
          </figure>
        </header>

        <footer
          className="flex items-center gap-3"
          aria-label={`Actions for ${item.title}`}
        >
          <span aria-live="polite">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
          <Button
            variant="ghost"
            className="cursor-pointer"
            aria-label={`Remove ${item.title} from cart`}
            onClick={onDeleteItem}
          >
            <X />
          </Button>
        </footer>
      </article>
    </li>
  );
};

export default CartItem;
