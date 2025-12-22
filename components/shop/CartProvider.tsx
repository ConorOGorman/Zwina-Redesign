"use client";

import React from "react";
import {
  addToCart,
  CartItem,
  readCartFromStorage,
  removeFromCart,
  setCartQuantity,
  writeCartToStorage,
} from "@/lib/shop/cart";

type CartContextValue = {
  items: CartItem[];
  addItem: (productId: string, quantity?: number) => void;
  setQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clear: () => void;
};

const CartContext = React.createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<CartItem[]>([]);
  const hasHydrated = React.useRef(false);

  React.useEffect(() => {
    const state = readCartFromStorage();
    setItems(state.items);
    hasHydrated.current = true;
  }, []);

  React.useEffect(() => {
    if (!hasHydrated.current) return;
    writeCartToStorage({ items });
  }, [items]);

  const value = React.useMemo<CartContextValue>(
    () => ({
      items,
      addItem: (productId, quantity = 1) => {
        setItems((prev) => addToCart(prev, productId, quantity));
      },
      setQuantity: (productId, quantity) => {
        setItems((prev) => setCartQuantity(prev, productId, quantity));
      },
      removeItem: (productId) => {
        setItems((prev) => removeFromCart(prev, productId));
      },
      clear: () => setItems([]),
    }),
    [items],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = React.useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
