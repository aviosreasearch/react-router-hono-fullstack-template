
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
