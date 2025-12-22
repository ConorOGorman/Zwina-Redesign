export type CartItem = {
  productId: string;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
};

const STORAGE_KEY = "zwina.cart.v1";

export function normalizeQuantity(value: number) {
  if (!Number.isFinite(value)) return 1;
  return Math.max(1, Math.floor(value));
}

export function readCartFromStorage(): CartState {
  if (typeof window === "undefined") return { items: [] };

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { items: [] };

    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return { items: [] };

    const itemsRaw = (parsed as { items?: unknown }).items;
    if (!Array.isArray(itemsRaw)) return { items: [] };

    const items: CartItem[] = itemsRaw
      .map((x) => {
        if (!x || typeof x !== "object") return null;
        const productId = (x as { productId?: unknown }).productId;
        const quantity = (x as { quantity?: unknown }).quantity;
        if (typeof productId !== "string") return null;
        if (typeof quantity !== "number") return null;
        return { productId, quantity: normalizeQuantity(quantity) } satisfies CartItem;
      })
      .filter((x): x is CartItem => Boolean(x));

    return { items };
  } catch {
    return { items: [] };
  }
}

export function writeCartToStorage(state: CartState) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

export function addToCart(items: CartItem[], productId: string, quantity: number): CartItem[] {
  const qty = normalizeQuantity(quantity);
  const existing = items.find((i) => i.productId === productId);

  if (!existing) return [...items, { productId, quantity: qty }];

  return items.map((i) =>
    i.productId === productId ? { ...i, quantity: normalizeQuantity(i.quantity + qty) } : i,
  );
}

export function setCartQuantity(items: CartItem[], productId: string, quantity: number): CartItem[] {
  const qty = normalizeQuantity(quantity);
  return items.map((i) => (i.productId === productId ? { ...i, quantity: qty } : i));
}

export function removeFromCart(items: CartItem[], productId: string): CartItem[] {
  return items.filter((i) => i.productId !== productId);
}
