export interface ProductCard {
  readonly id: string;
  readonly title: string;
  readonly price: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly isNew?: boolean;
  readonly options?: ReadonlyArray<{
    readonly value: string;
    readonly label: string;
    readonly defaultChecked?: boolean;
  }>;
  readonly href: string;
}

export const windowProducts: readonly ProductCard[] = [
  {
    id: "ceramic-boost",
    title: "XPEL Ceramic Boost",
    price: "$436.95",
    image: "/images/header/ceramic-coating.webp",
    imageAlt: "XPEL Ceramic Boost spray bottle",
    isNew: true,
    options: [
      { value: "16oz", label: "16 Oz", defaultChecked: true },
      { value: "1gal", label: "1 Gallons" },
      { value: "5gal", label: "5 Gallons" }
    ],
    href: "/products/ceramic-boost"
  },
  {
    id: "fusion-handle",
    title: "8\" Fusion Big Mouth Handle",
    price: "$40.65",
    image: "/images/header/ceramic-coating.webp",
    imageAlt: "8 inch Fusion Big Mouth Handle squeegee",
    href: "/products/fusion-handle"
  },
  {
    id: "ogio-polo",
    title: "XPEL Mens Grey Ogio Polo",
    price: "$47.79",
    image: "/images/header/ceramic-coating.webp",
    imageAlt: "XPEL Mens Grey Ogio Polo shirt",
    isNew: true,
    href: "/products/ogio-polo"
  },
  {
    id: "stealth-custom-1",
    title: "STEALTH Custom Length",
    price: "$12.98 to $1,557.50",
    image: "/images/header/bmw-rally.webp",
    imageAlt: "STEALTH Custom Length paint protection film",
    href: "/products/stealth-custom"
  },
  {
    id: "stealth-custom-2",
    title: "STEALTH Custom Length",
    price: "$18.98 to $1,557.50",
    image: "/images/header/bmw-rally.webp",
    imageAlt: "STEALTH Custom Length paint protection film",
    href: "/products/stealth-custom"
  },
  {
    id: "stealth-custom-3",
    title: "STEALTH Custom Length",
    price: "$67.98 to $1,557.50",
    image: "/images/header/bmw-rally.webp",
    imageAlt: "STEALTH Custom Length paint protection film",
    href: "/products/stealth-custom"
  },
  {
    id: "stealth-custom-4",
    title: "STEALTH Custom Length",
    price: "$10.98",
    image: "/images/header/bmw-rally.webp",
    imageAlt: "STEALTH Custom Length paint protection film",
    href: "/products/stealth-custom"
  }
]; 