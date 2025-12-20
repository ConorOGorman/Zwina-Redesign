import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import { Button } from "@/components/primitives/Button";
import { Link } from "@/components/primitives/Link";
import { Reveal } from "@/components/primitives/Reveal";
import Image from "next/image";

export const ProductCarouselSection: React.FC = () => {
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

  return (
    <Section className="border-t border-foreground/10">
      <Container>
        <Typography variant="h3" className="mb-12 text-foreground">
          Featured Products
        </Typography>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <Reveal key={product.link} as="div" delay={0.06 + index * 0.06}>
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
                    Quick View
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
                      Artisan Made
                    </Typography>
                  </div>
                  <Typography variant="body-sm" className="font-medium text-foreground">
                    {product.price}
                  </Typography>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild effect="sweep">
            <Link href="/shop">Visit the shop</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};
