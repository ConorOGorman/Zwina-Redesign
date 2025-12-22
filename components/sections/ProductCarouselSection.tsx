import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import { Button } from "@/components/primitives/Button";
import { Link } from "@/components/primitives/Link";
import { Reveal } from "@/components/primitives/Reveal";
import Image from "next/image";
import { getLocale } from "@/lib/i18n/server";
import { t } from "@/lib/i18n/t";

export const ProductCarouselSection: React.FC = () => {
  const locale = getLocale();
  const products = [
    {
      name: "Jacket Safi",
      price: "€120.00",
      link: "/product/12",
      imageSrc: "/images/projects/Products/Jacket%20Safi.png",
    },
    {
      name: "Essauria Jacket",
      price: "€140.00",
      link: "/product/7",
      imageSrc: "/images/projects/Products/Essauria.png",
    },
    {
      name: "Blazer Agadir",
      price: "€140.00",
      link: "/product/6",
      imageSrc: "/images/projects/Products/Blazer%20Agadir.png",
    },
    {
      name: "Blazer Ourzazate",
      price: "€180.00",
      link: "/product/9",
      imageSrc: "/images/projects/Products/Blazer%20Ourzazate.png",
    },
  ];

  const ProductCard = ({
    product,
    index,
  }: {
    product: (typeof products)[number];
    index: number;
  }) => (
    <Reveal as="div" delay={0.06 + index * 0.06}>
      <div className="group cursor-pointer transition-transform duration-500 ease-default hover:-translate-y-1">
        <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-lg bg-secondary/70">
          <Image
            src={product.imageSrc}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            unoptimized
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/35 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="rounded-full border border-white/60 bg-foreground/30 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white">
              {t(locale, "home.featured.quickView")}
            </span>
          </div>
        </div>
        <div className="flex items-start justify-between">
          <div>
            <Link
              href={product.link}
              className="block no-underline text-foreground transition-colors hover:text-primary"
            >
              <Typography variant="h6" className="mb-1">
                {product.name}
              </Typography>
            </Link>
            <Typography variant="caption" className="text-[var(--muted-foreground)]">
              {t(locale, "home.featured.artisanMade")}
            </Typography>
          </div>
          <Typography variant="body-sm" className="font-medium text-foreground">
            {product.price}
          </Typography>
        </div>
      </div>
    </Reveal>
  );

  return (
    <Section className="border-t border-foreground/10">
      <Container>
        <Typography variant="h3" className="mb-12 text-foreground">
          {t(locale, "home.featured.title")}
        </Typography>

        {/* Mobile: horizontal swipe carousel */}
        <div className="sm:hidden" aria-label="Featured products carousel">
          <div className="-mx-4 px-4 overflow-x-auto scroll-px-4">
            <div className="flex gap-6 snap-x snap-mandatory">
              {products.map((product, index) => (
                <div
                  key={product.link}
                  className="snap-start shrink-0 w-[82%]"
                  aria-label={`${index + 1} of ${products.length}`}
                >
                  <ProductCard product={product} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop/tablet: existing grid */}
        <div className="hidden grid-cols-1 gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={product.link} product={product} index={index} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild effect="none">
            <Link href="/shop" className="no-underline">{t(locale, "home.featured.cta")}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};
