/**
 * Partner organizations data
 */

export type Partner = {
  name: string;
  logoSrc?: string;
  logoContainerClassName?: string;
  logoImageClassName?: string;
  logoSizes?: string;
  unoptimized?: boolean;
};

export const partners: Partner[] = [
  {
    name: "Fondazione Ragione Sociale",
    logoSrc: "/Trusted%20Brands/fondazione.png"
  },
  {
    name: "GoFundMe",
    logoSrc: "/Trusted%20Brands/idXhJFs9Dn_logos.svg"
  },
  {
    name: "The Hague University of Applied Sciences",
    logoSrc: "/Trusted%20Brands/The_Hague_University_of_Applied_Sciences_Logo.svg",
    // Keep this logo legible in a 4-across row.
    logoContainerClassName: "h-16 w-full max-w-[380px] sm:max-w-[460px] md:h-20 md:max-w-[560px]",
    logoImageClassName: "opacity-100",
    logoSizes: "(min-width: 768px) 560px, (min-width: 640px) 460px, 380px",
    // This SVG includes an XML prolog and can fail Next's image optimization; serve it as-is.
    unoptimized: true,
  },
  {
    name: "High Atlas Foundation",
    logoSrc: "/Trusted%20Brands/high%20atlas%20foundation%20.png"
  },
  {
    name: "KiCo Kitchen",
    logoSrc: "/Trusted%20Brands/KiCo-Logo.webp"
  },
  {
    name: "College LaSalle Maroc",
    logoSrc: "/Trusted%20Brands/Logo_College-LaSalle-Maroc.svg"
  },
  {
    name: "Bidyanondo Foundation",
    logoSrc: "/Trusted%20Brands/Bidyanondo.png"
  }
];
