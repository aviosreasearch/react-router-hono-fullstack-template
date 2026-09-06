import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type CartItem = {
  id: string;
  name: string;
  strength: string;
  price: number;
  quantity: number;
  image?: string;
};

type CartContextType = {
  items: CartItem[];
  addItem: (
    item: Omit<CartItem, "quantity">,
  ) => void;
  removeItem: (id: string) => void;
  updateQuantity: (
    id: string,
    quantity: number,
  ) => void;
  clearCart: () => void;

  cartCount: number;
  cartTotal: number;
};

const CartContext =
  createContext<
    CartContextType | undefined
  >(undefined);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<
    CartItem[]
  >([]);

  const [loaded, setLoaded] =
    useState(false);

  useEffect(() => {
    const savedCart =
      localStorage.getItem(
        "avios-cart",
      );

    if (savedCart) {
      try {
        setItems(
          JSON.parse(savedCart),
        );
      } catch {
        localStorage.removeItem(
          "avios-cart",
        );
      }
    }

    /*
      Remove any membership state created by the old test system.
      Membership status now comes from verified Stripe subscription
      data instead of localStorage.
    */
    localStorage.removeItem(
      "avios-membership-active",
    );

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(
        "avios-cart",
        JSON.stringify(items),
      );
    }
  }, [items, loaded]);

  function addItem(
    item: Omit<
      CartItem,
      "quantity"
    >,
  ) {
    setItems((currentItems) => {
      const existingItem =
        currentItems.find(
          (currentItem) =>
            currentItem.id ===
            item.id,
        );

      if (existingItem) {
        return currentItems.map(
          (currentItem) =>
            currentItem.id ===
            item.id
              ? {
                  ...currentItem,
                  quantity:
                    currentItem.quantity +
                    1,
                }
              : currentItem,
        );
      }

      return [
        ...currentItems,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  }

  function removeItem(
    id: string,
  ) {
    setItems((currentItems) =>
      currentItems.filter(
        (item) =>
          item.id !== id,
      ),
    );
  }

  function updateQuantity(
    id: string,
    quantity: number,
  ) {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity,
            }
          : item,
      ),
    );
  }

  function clearCart() {
    setItems([]);
  }

  const cartCount = items.reduce(
    (total, item) =>
      total + item.quantity,
    0,
  );

  const cartTotal = items.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}

      {loaded &&
        cartCount > 0 && (
          <a
            href="/checkout"
            aria-label={`View cart with ${cartCount} ${
              cartCount === 1
                ? "item"
                : "items"
            }`}
            className="fixed bottom-5 right-4 z-[100] flex items-center gap-3 rounded-full border border-sky-300/50 bg-sky-500 px-5 py-3 text-slate-950 shadow-[0_10px_40px_rgba(14,165,233,0.45)] transition hover:-translate-y-0.5 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950 sm:bottom-6 sm:right-6"
          >
            <span className="relative flex h-7 w-7 items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <circle
                  cx="9"
                  cy="20"
                  r="1"
                />

                <circle
                  cx="19"
                  cy="20"
                  r="1"
                />

                <path d="M3 4h2l2.4 10.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H6" />
              </svg>

              <span className="absolute -right-2 -top-2 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-slate-950 px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            </span>

            <span className="flex flex-col leading-tight">
              <span className="text-sm font-bold">
                View Cart
              </span>

              <span className="text-xs font-semibold text-slate-800">
                ${cartTotal.toFixed(2)}
              </span>
            </span>
          </a>
        )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context =
    useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider",
    );
  }

  return context;
}
