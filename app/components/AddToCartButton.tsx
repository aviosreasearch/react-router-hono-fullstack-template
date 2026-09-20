import { useState } from "react";
import { useCart } from "./CartProvider";

type AddToCartButtonProps = {
  id: string;
  name: string;
  strength: string;
  price: number;
  image?: string;
};

export default function AddToCartButton({
  id,
  name,
  strength,
  price,
  image,
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    addItem({
      id,
      name,
      strength,
      price,
      image,
    });

    // Google Analytics 4: add_to_cart
    if (
      typeof window !== "undefined" &&
      typeof (window as any).gtag === "function"
    ) {
      (window as any).gtag("event", "add_to_cart", {
        currency: "USD",
        value: price,
        items: [
          {
            item_id: id,
            item_name: name,
            item_variant: strength,
            price,
            quantity: 1,
          },
        ],
      });
    }

    setAdded(true);

    window.setTimeout(() => {
      setAdded(false);
    }, 1500);
  }

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="mt-6 w-full rounded-lg bg-sky-500 px-6 py-3 font-bold text-slate-950 transition hover:bg-sky-400"
    >
      {added ? "Added to Cart ✓" : "Add to Cart"}
    </button>
  );
}
