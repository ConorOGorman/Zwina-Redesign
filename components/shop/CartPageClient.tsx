"use client";

import { Button } from "@/components/primitives/Button";
import { Container } from "@/components/primitives/Container";
import { Link } from "@/components/primitives/Link";
import { Reveal } from "@/components/primitives/Reveal";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import { useCart } from "@/components/shop/CartProvider";
import { formatEUR, getShopProductById, getShopProductPrimaryImage } from "@/lib/shop/products";
import Image from "next/image";
import React from "react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { t } from "@/lib/i18n/t";

function clampQuantity(value: number) {
  if (!Number.isFinite(value)) return 1;
  return Math.max(1, Math.floor(value));
}

export function CartPageClient() {
  const cart = useCart();
  const { locale } = useLocale();

  const rows = React.useMemo(() => {
    return cart.items
      .map((item) => {
        const product = getShopProductById(item.productId);
        return { item, product };
      })
      .filter((row) => Boolean(row.product));
  }, [cart.items]);

  const subtotal = React.useMemo(() => {
    return rows.reduce((sum, row) => sum + (row.product?.priceEUR ?? 0) * row.item.quantity, 0);
  }, [rows]);

  const isEmpty = cart.items.length === 0 || rows.length === 0;

  return (
    <>
      <Section
        spacing="none"
        className="relative overflow-hidden bg-secondary pt-[93px] pb-14 lg:pt-[109px] lg:pb-16 border-b border-foreground/10"
      >
        <Container>
          <Reveal as="div" delay={0.02}>
            <Typography variant="caption" className="text-accent mb-4 block">
              {t(locale, "cart.heroTag")}
            </Typography>
            <Typography variant="h1" className="mb-4 text-balance">
              {t(locale, "cart.heroTitle")}
            </Typography>
            <Typography variant="body" className="text-muted-foreground max-w-[70ch]">
              {t(locale, "cart.heroBody")}
            </Typography>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10" spacing="lg">
        <Container>
          {isEmpty ? (
            <div className="max-w-2xl">
              <Reveal as="div" delay={0.04}>
                <div className="rounded-md border border-foreground/10 bg-surface p-8">
                  <Typography variant="h4" className="m-0 mb-3">
                    {t(locale, "cart.emptyTitle")}
                  </Typography>
                  <Typography variant="body-sm" className="text-muted-foreground m-0">
                    {t(locale, "cart.emptyBody")}
                  </Typography>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button variant="primary" asChild effect="none">
                      <Link href="/shop" className="no-underline">
                        {t(locale, "cart.browseShop")}
                      </Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-8">
                <div className="space-y-4">
                  {rows.map(({ item, product }, idx) => {
                    if (!product) return null;
                    const image = getShopProductPrimaryImage(product);

                    return (
                      <Reveal key={product.id} as="div" delay={0.04 + idx * 0.04} y={12}>
                        <div className="rounded-md border border-foreground/10 bg-background overflow-hidden">
                          <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-5 p-5">
                            <div className="relative aspect-[4/3] sm:aspect-square rounded-md border border-foreground/10 bg-surface overflow-hidden">
                              <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="120px"
                                className="object-contain p-3"
                              />
                            </div>

                            <div className="flex flex-col gap-3">
                              <div className="flex items-start justify-between gap-6">
                                <div>
                                  <Typography variant="h6" className="m-0">
                                    {product.title}
                                  </Typography>
                                  <Typography variant="caption" className="text-muted-foreground mt-2 block">
                                    {product.badge ?? t(locale, "product.artisanMade")}
                                  </Typography>
                                </div>

                                <Typography variant="body" className="m-0 text-accent font-semibold">
                                  {formatEUR(product.priceEUR)}
                                </Typography>
                              </div>

                              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-foreground/10 pt-4">
                                <div className="inline-flex items-center rounded-[var(--radius-button)] border border-foreground/15 bg-background">
                                  <button
                                    type="button"
                                    onClick={() => cart.setQuantity(product.id, clampQuantity(item.quantity - 1))}
                                    className="h-10 w-11 grid place-items-center text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                                    aria-label={`${t(locale, "cart.decreaseQtyFor")} ${product.title}`}
                                  >
                                    −
                                  </button>
                                  <div className="h-10 w-10 grid place-items-center text-sm font-semibold text-foreground">
                                    {item.quantity}
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => cart.setQuantity(product.id, clampQuantity(item.quantity + 1))}
                                    className="h-10 w-11 grid place-items-center text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                                    aria-label={`${t(locale, "cart.increaseQtyFor")} ${product.title}`}
                                  >
                                    +
                                  </button>
                                </div>

                                <div className="flex items-center gap-3">
                                  <Button variant="outline" size="sm" asChild effect="none">
                                    <Link href={`/product/${product.id}`} className="no-underline">
                                      {t(locale, "cart.view")}
                                    </Link>
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    type="button"
                                    onClick={() => cart.removeItem(product.id)}
                                  >
                                    {t(locale, "cart.remove")}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>

                <div className="mt-8 flex items-center justify-between gap-4">
                  <Button variant="outline" type="button" effect="none" onClick={cart.clear}>
                    {t(locale, "cart.clearCart")}
                  </Button>
                  <Button variant="outline" asChild effect="none">
                    <Link href="/shop" className="no-underline">
                      {t(locale, "cart.continueShopping")}
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-4">
                <Reveal as="div" delay={0.06}>
                  <div className="rounded-md border border-foreground/10 bg-surface p-7">
                    <Typography variant="h5" className="m-0 mb-4">
                      {t(locale, "cart.summary")}
                    </Typography>

                    <div className="flex items-center justify-between gap-6 border-b border-foreground/10 pb-4">
                      <Typography variant="caption" className="text-muted-foreground">
                        {t(locale, "cart.subtotal")}
                      </Typography>
                      <Typography variant="body" className="m-0 font-semibold text-foreground">
                        {formatEUR(subtotal)}
                      </Typography>
                    </div>

                    <Typography variant="body-sm" className="text-muted-foreground mt-4">
                      {t(locale, "cart.note")}
                    </Typography>

                    <div className="mt-6 grid grid-cols-1 gap-3">
                      <Button variant="primary" asChild effect="none" className="w-full shadow-none">
                        <Link href="/shop" className="no-underline w-full justify-center">
                          {t(locale, "cart.continueBrowsing")}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
