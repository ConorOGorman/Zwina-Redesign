"use client";

import { Button } from "@/components/primitives/Button";
import { Container } from "@/components/primitives/Container";
import { Link } from "@/components/primitives/Link";
import { Reveal } from "@/components/primitives/Reveal";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import {
  formatEUR,
  getShopProductPrimaryImage,
  shopProducts,
  SHOP_INSTAGRAM_URL,
  SHOP_WHATSAPP_URL,
} from "@/lib/shop/products";
import Image from "next/image";
import React from "react";
import { Heart } from "lucide-react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { t } from "@/lib/i18n/t";

export const ShopListingsSection: React.FC = () => {
  const { locale } = useLocale();
  const categories = React.useMemo(() => {
    const set = new Set(shopProducts.map((p) => p.category));
    return ["All", ...Array.from(set).sort()] as const;
  }, []);

  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState<(typeof categories)[number]>("All");
  const [sort, setSort] = React.useState<"featured" | "price-asc" | "price-desc">("featured");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    let result = shopProducts.slice();

    if (category !== "All") {
      result = result.filter((p) => p.category === category);
    }

    if (q.length > 0) {
      result = result.filter((p) => p.title.toLowerCase().includes(q));
    }

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.priceEUR - b.priceEUR);
        break;
      case "price-desc":
        result.sort((a, b) => b.priceEUR - a.priceEUR);
        break;
      case "featured":
      default:
        break;
    }

    return result;
  }, [category, query, sort]);

  return (
    <>
      <Section className="bg-secondary border-b border-foreground/10 pt-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <Reveal as="div" delay={0.03}>
                <Typography variant="caption" className="text-accent mb-4 block">
                  {t(locale, "shop.heroTag")}
                </Typography>
                <Typography variant="h1" className="mb-6 text-balance">
                  {t(locale, "shop.heroTitle")}
                </Typography>
                <Typography variant="body" className="text-muted-foreground max-w-[60ch]">
                  {t(locale, "shop.heroBody")}
                </Typography>
                <Typography variant="body-sm" className="text-muted-foreground mt-5 max-w-[62ch]">
                  {t(locale, "shop.heroNote")}
                </Typography>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal as="div" delay={0.08}>
                <div className="bg-background border border-foreground/10 p-7 rounded-md">
                  <Typography variant="body" className="text-muted-foreground">
                    {t(locale, "shop.impactCallout")}
                  </Typography>

                  <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Button variant="primary" asChild effect="none" className="w-full shadow-none">
                      <Link href={SHOP_WHATSAPP_URL} className="no-underline w-full justify-center">
                        {t(locale, "shop.contactWhatsApp")}
                      </Link>
                    </Button>
                    <Button variant="outline" asChild effect="none" className="w-full shadow-none">
                      <Link href={SHOP_INSTAGRAM_URL} className="no-underline w-full justify-center">
                        {t(locale, "shop.instagram")}
                      </Link>
                    </Button>
                  </div>

                  <div className="mt-7 border-t border-foreground/10 pt-6">
                    <Typography variant="body-sm" className="text-muted-foreground m-0">
                      {t(locale, "shop.tailorMade")}
                    </Typography>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-foreground/10" spacing="lg">
        <Container>
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <Reveal as="div" delay={0.02}>
              <Typography variant="h3" className="mb-2">
                {t(locale, "shop.browseTitle")}
              </Typography>
              <Typography variant="body-sm" className="text-muted-foreground max-w-[70ch]">
                {t(locale, "shop.browseBody")}
              </Typography>
            </Reveal>
            <Reveal as="div" delay={0.08}>
              <Button variant="outline" asChild effect="none">
                <Link href={SHOP_WHATSAPP_URL} className="no-underline">
                  {t(locale, "shop.whatsAppUs")}
                </Link>
              </Button>
            </Reveal>
          </div>

          <Reveal as="div" delay={0.05}>
            <div className="border border-foreground/10 bg-surface p-5 md:p-7 rounded-md">
              <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_auto] gap-4 md:gap-6 items-end">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2" htmlFor="shop-search">
                    {t(locale, "shop.search")}
                  </label>
                  <input
                    id="shop-search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t(locale, "shop.searchPlaceholder")}
                    className="h-12 w-full rounded-[var(--radius-button)] border border-foreground/15 bg-background px-5 text-foreground placeholder:text-muted-foreground outline-none transition focus:border-foreground/30 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2" htmlFor="shop-category">
                    {t(locale, "shop.category")}
                  </label>
                  <select
                    id="shop-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value as (typeof categories)[number])}
                    className="h-12 w-full rounded-[var(--radius-button)] border border-foreground/15 bg-background px-5 text-foreground outline-none transition focus:border-foreground/30 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c === "All" ? t(locale, "shop.all") : c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2" htmlFor="shop-sort">
                    {t(locale, "shop.sort")}
                  </label>
                  <select
                    id="shop-sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value as typeof sort)}
                    className="h-12 w-full rounded-[var(--radius-button)] border border-foreground/15 bg-background px-5 text-foreground outline-none transition focus:border-foreground/30 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface"
                  >
                    <option value="featured">{t(locale, "shop.sortFeatured")}</option>
                    <option value="price-asc">{t(locale, "shop.sortAsc")}</option>
                    <option value="price-desc">{t(locale, "shop.sortDesc")}</option>
                  </select>
                </div>

                <div className="md:flex md:justify-end">
                  <Button
                    variant="outline"
                    size="md"
                    effect="none"
                    type="button"
                    onClick={() => {
                      setQuery("");
                      setCategory("All");
                      setSort("featured");
                    }}
                    className="h-12 w-full md:w-auto px-6"
                    disabled={query.length === 0 && category === "All" && sort === "featured"}
                  >
                    {t(locale, "shop.clear")}
                  </Button>
                </div>
              </div>

              <Typography variant="caption" className="text-muted-foreground mt-5 block">
                {t(locale, "shop.showing")} {filtered.length} {t(locale, "shop.of")} {shopProducts.length}
              </Typography>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {filtered.map((product) => {
              const primaryImage = getShopProductPrimaryImage(product);

              return (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group block h-full rounded-md border border-foreground/10 bg-background overflow-hidden no-underline transition-[transform,box-shadow,border-color,background-color] duration-normal ease-default hover:-translate-y-1.5 hover:border-foreground/20 hover:bg-secondary/40 hover:shadow-[0_26px_56px_-44px_rgba(0,0,0,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-surface border-b border-foreground/10">
                    <div className="absolute left-4 top-4 z-10 inline-flex items-center rounded-full border border-foreground/10 bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/80 backdrop-blur">
                      {product.category}
                    </div>
                    <div className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full border border-foreground/10 bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/80 backdrop-blur">
                      {formatEUR(product.priceEUR)}
                    </div>

                    <div className="absolute bottom-4 right-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 bg-background/80 text-foreground/70 backdrop-blur">
                      <Heart className="h-4 w-4" aria-hidden="true" />
                    </div>

                    <div className="absolute inset-0 p-6">
                      <div className="relative h-full w-full rounded-md bg-secondary/30 border border-foreground/10 p-5 transition-[transform,border-color,background-color] duration-slow ease-default group-hover:bg-secondary/45 group-hover:border-foreground/15 motion-reduce:transition-none">
                        <Image
                          src={primaryImage.src}
                          alt={primaryImage.alt}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                          className="object-contain transition-transform duration-slow ease-default group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:transform-none"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-md bg-gradient-to-t from-foreground/10 via-transparent to-transparent opacity-0 transition-opacity duration-normal ease-default group-hover:opacity-100 motion-reduce:transition-none" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <Typography
                      variant="h6"
                      className="m-0 text-foreground transition-colors duration-normal ease-default group-hover:text-accent"
                    >
                      {product.title}
                    </Typography>

                    <Typography variant="caption" className="text-muted-foreground mt-3 block">
                      {product.badge ?? t(locale, "product.artisanMade")}
                    </Typography>

                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-foreground/10 pt-4">
                      <Typography variant="caption" className="text-muted-foreground m-0">
                        {t(locale, "shop.viewDetails")}
                      </Typography>
                      <span
                        aria-hidden="true"
                        className="text-muted-foreground transition-transform duration-normal ease-default group-hover:translate-x-1 motion-reduce:transition-none"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
};
