"use client";

import { Button } from "@/components/primitives/Button";
import { Container } from "@/components/primitives/Container";
import { Link } from "@/components/primitives/Link";
import { Reveal } from "@/components/primitives/Reveal";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import { useCart } from "@/components/shop/CartProvider";
import {
  formatEUR,
  getShopProductGalleryImages,
  ShopProduct,
  SHOP_IMPACT_NOTE,
  SHOP_PREORDER_NOTE,
  SHOP_TAILOR_MADE_NOTE,
  SHOP_WHATSAPP_URL,
} from "@/lib/shop/products";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { t } from "@/lib/i18n/t";

function buildWhatsAppLink(product: ShopProduct) {
  const price = `€${product.priceEUR}`;
  const text = `Hi! I'm interested in the ${product.title} (${price}). I'd like to know more about sizing and availability.`;
  return `${SHOP_WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
}

function getSavedSet() {
  if (typeof window === "undefined") return new Set<string>();
  try {
    const raw = window.localStorage.getItem("zwina.savedProducts");
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    if (Array.isArray(parsed)) return new Set(parsed.filter((x) => typeof x === "string"));
  } catch {
    // ignore
  }
  return new Set<string>();
}

function setSavedSet(set: Set<string>) {
  try {
    window.localStorage.setItem("zwina.savedProducts", JSON.stringify(Array.from(set)));
  } catch {
    // ignore
  }
}

export function ProductDetailClient({ product }: { product: ShopProduct }) {
  const { locale } = useLocale();
  const cart = useCart();
  const router = useRouter();
  const images = React.useMemo(() => getShopProductGalleryImages(product), [product]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);
  const [isGalleryOpen, setIsGalleryOpen] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);
  const [shareState, setShareState] = React.useState<"idle" | "copied">("idle");

  React.useEffect(() => {
    const saved = getSavedSet();
    setIsSaved(saved.has(product.id));
  }, [product.id]);

  const whatsappHref = buildWhatsAppLink(product);

  const onToggleSaved = () => {
    const saved = getSavedSet();
    if (saved.has(product.id)) {
      saved.delete(product.id);
      setIsSaved(false);
    } else {
      saved.add(product.id);
      setIsSaved(true);
    }
    setSavedSet(saved);
  };

  const onShare = async () => {
    const href = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: product.title, url: href });
        return;
      }
    } catch {
      // ignore
    }

    try {
      await navigator.clipboard.writeText(href);
      setShareState("copied");
      window.setTimeout(() => setShareState("idle"), 1200);
    } catch {
      // ignore
    }
  };

  const activeImage = images[Math.min(selectedIndex, images.length - 1)];

  return (
    <>
      <Section
        spacing="none"
        className="relative overflow-hidden bg-secondary pt-[93px] pb-14 lg:pt-[109px] lg:pb-16 border-b border-foreground/10"
      >
        <Container>
          <Reveal as="div" delay={0.02}>
            <Link href="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-foreground/75 hover:text-foreground no-underline">
              <span aria-hidden="true">←</span> Back to all products
            </Link>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <Reveal as="div" delay={0.06} y={14}>
                <div className="bg-surface border border-foreground/10 rounded-md overflow-hidden">
                  <div className="relative aspect-[4/3] bg-background p-6 md:p-8">
                    {activeImage && (
                      <Image
                        src={activeImage.src}
                        alt={activeImage.alt}
                        fill
                        sizes="(min-width: 1024px) 58vw, 100vw"
                        className="object-contain"
                        priority
                      />
                    )}
                  </div>
                </div>
              </Reveal>

              <div className="mt-5 grid grid-cols-4 gap-3">
                {images.slice(0, 4).map((img, idx) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setSelectedIndex(idx)}
                    className={`relative aspect-[4/3] rounded-md border bg-background transition-colors ${
                      idx === selectedIndex ? "border-foreground/30" : "border-foreground/10 hover:border-foreground/20"
                    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary`}
                    aria-label={`${t(locale, "product.selectImage")} ${idx + 1}`}
                  >
                    <Image src={img.src} alt={img.alt} fill sizes="200px" className="object-contain p-2" />
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <Button variant="outline" size="md" type="button" effect="none" className="w-full" onClick={() => setIsGalleryOpen(true)}>
                  {t(locale, "product.viewFullSizeImages")}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Reveal as="div" delay={0.08} y={12}>
                <Typography variant="h2" className="text-balance">
                  {product.title}
                </Typography>
                <div className="mt-3 flex items-center gap-3">
                  <Typography variant="body" className="text-accent font-semibold m-0">
                    {formatEUR(product.priceEUR)}
                  </Typography>
                  <span className="h-px flex-1 bg-foreground/10" aria-hidden="true" />
                  <span className="inline-flex items-center rounded-full border border-foreground/10 bg-background/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/80">
                    {product.badge ?? t(locale, "product.artisanMade")}
                  </span>
                </div>
              </Reveal>

              <Reveal as="div" delay={0.12}>
                <div className="mt-6 bg-surface border border-foreground/10 rounded-md p-5 border-l-4 border-l-accent">
                  <Typography variant="h6" className="m-0 mb-2">
                    {t(locale, "product.tailorMadeTitle")}
                  </Typography>
                  <Typography variant="body-sm" className="text-muted-foreground m-0">
                    {SHOP_TAILOR_MADE_NOTE}
                  </Typography>
                </div>
              </Reveal>

              <Reveal as="div" delay={0.16}>
                <div className="mt-7 space-y-6">
                  <div>
                    <Typography variant="h6" className="mb-2">
                      {t(locale, "product.descriptionTitle")}
                    </Typography>
                    <Typography variant="body-sm" className="text-muted-foreground m-0">
                      {product.description}
                    </Typography>
                  </div>

                  <div>
                    <Typography variant="h6" className="mb-2">
                      {t(locale, "product.materialsTitle")}
                    </Typography>
                    <Typography variant="body-sm" className="text-muted-foreground m-0">
                      {product.materials}
                    </Typography>
                  </div>

                  <div>
                    <Typography variant="h6" className="mb-2">
                      {t(locale, "product.storyTitle")}
                    </Typography>
                    <Typography variant="body-sm" className="text-muted-foreground m-0">
                      {product.story}
                    </Typography>
                  </div>

                  <div>
                    <Typography variant="h6" className="mb-2">
                      {t(locale, "product.careTitle")}
                    </Typography>
                    <Typography variant="body-sm" className="text-muted-foreground m-0">
                      {product.careInstructions}
                    </Typography>
                  </div>
                </div>
              </Reveal>

              <Reveal as="div" delay={0.2}>
                <div className="mt-8 flex items-center justify-between gap-4">
                  <Typography variant="caption" className="text-muted-foreground">
                    {t(locale, "product.quantity")}
                  </Typography>
                  <div className="inline-flex items-center rounded-[var(--radius-button)] border border-foreground/15 bg-background">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="h-10 w-11 grid place-items-center text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                      aria-label={t(locale, "product.decreaseQty")}
                    >
                      −
                    </button>
                    <div className="h-10 w-10 grid place-items-center text-sm font-semibold text-foreground">
                      {quantity}
                    </div>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="h-10 w-11 grid place-items-center text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                      aria-label={t(locale, "product.increaseQty")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </Reveal>

              <Reveal as="div" delay={0.24}>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button
                    variant="primary"
                    size="lg"
                    type="button"
                    effect="none"
                    className="w-full"
                    onClick={() => {
                      cart.addItem(product.id, quantity);
                      router.push("/cart");
                    }}
                  >
                    {t(locale, "product.addToCart")}
                  </Button>

                  <Button variant="outline" size="lg" asChild effect="none" className="w-full">
                    <Link href={whatsappHref} className="no-underline w-full justify-center">
                      {t(locale, "product.whatsAppUs")}
                    </Link>
                  </Button>
                </div>
              </Reveal>

              <Reveal as="div" delay={0.28}>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  <Button variant="outline" size="md" type="button" effect="none" className="justify-center">
                    {t(locale, "product.preOrder")}
                  </Button>
                  <Button
                    variant={isSaved ? "primary" : "outline"}
                    size="md"
                    type="button"
                    effect="none"
                    className="justify-center"
                    onClick={onToggleSaved}
                  >
                    {isSaved ? t(locale, "product.saved") : t(locale, "product.save")}
                  </Button>
                  <Button variant="outline" size="md" type="button" effect="none" className="justify-center" onClick={onShare}>
                    {shareState === "copied" ? t(locale, "product.copied") : t(locale, "product.share")}
                  </Button>
                </div>
              </Reveal>

              <Reveal as="div" delay={0.32}>
                <div className="mt-6 bg-surface border border-foreground/10 rounded-md p-6">
                  <Typography variant="h6" className="mb-3">
                    {t(locale, "product.yourImpact")}
                  </Typography>
                  <Typography variant="body-sm" className="text-muted-foreground m-0">
                    {SHOP_IMPACT_NOTE}
                  </Typography>
                </div>
              </Reveal>

              <Reveal as="div" delay={0.36}>
                <div className="mt-4 bg-background border border-foreground/10 rounded-md p-5">
                  <Typography variant="body-sm" className="text-muted-foreground m-0">
                    {SHOP_PREORDER_NOTE}
                  </Typography>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {isGalleryOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t(locale, "product.galleryLabel")}
          className="fixed inset-0 z-50"
        >
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={() => setIsGalleryOpen(false)} />
          <div className="absolute inset-0 grid place-items-center p-4">
            <div className="w-full max-w-5xl bg-surface border border-foreground/10 rounded-md overflow-hidden">
              <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-foreground/10">
                <Typography variant="h6" className="m-0">
                  {product.title}
                </Typography>
                <Button variant="outline" size="sm" type="button" effect="none" onClick={() => setIsGalleryOpen(false)}>
                  {t(locale, "product.close")}
                </Button>
              </div>
              <div className="p-6">
                <div className="relative aspect-[16/10] bg-background border border-foreground/10 rounded-md overflow-hidden">
                  {activeImage && (
                    <Image
                      src={activeImage.src}
                      alt={activeImage.alt}
                      fill
                      sizes="(min-width: 1024px) 960px, 100vw"
                      className="object-contain"
                    />
                  )}
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    type="button"
                    effect="none"
                    onClick={() => setSelectedIndex((i) => Math.max(0, i - 1))}
                    disabled={selectedIndex <= 0}
                  >
                    {t(locale, "product.prev")}
                  </Button>
                  <div className="flex gap-2 overflow-x-auto">
                    {images.map((img, idx) => (
                      <button
                        key={img.src}
                        type="button"
                        onClick={() => setSelectedIndex(idx)}
                        className={`relative h-16 w-24 shrink-0 rounded-md border bg-background ${
                          idx === selectedIndex
                            ? "border-foreground/30"
                            : "border-foreground/10 hover:border-foreground/20"
                        }`}
                        aria-label={`${t(locale, "product.selectImage")} ${idx + 1}`}
                      >
                        <Image src={img.src} alt={img.alt} fill sizes="96px" className="object-contain p-2" />
                      </button>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    type="button"
                    effect="none"
                    onClick={() => setSelectedIndex((i) => Math.min(images.length - 1, i + 1))}
                    disabled={selectedIndex >= images.length - 1}
                  >
                    {t(locale, "product.next")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
