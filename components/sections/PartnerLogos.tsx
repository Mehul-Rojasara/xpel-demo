import Image from "next/image";

const logos = [
  { id:1 ,src: "/images/partnership/logo-1.png", alt: "Logo 1" },
  { id:2 ,src: "/images/partnership/logo-2.png", alt: "Logo 2" },
  { id:3 ,src: "/images/partnership/logo-3.png", alt: "Logo 3" },
  { id:4 ,src: "/images/partnership/logo-4.png", alt: "Logo 4" },
  { id:5 ,src: "/images/partnership/logo-5.png", alt: "Logo 5" },
];

export const PartnerLogos = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {logos?.map((logo) => (
            <div
              key={logo?.id}
              className="flex items-center justify-center grayscale opacity-80 hover:opacity-100 transition"
            >
              <Image
                src={logo?.src}
                alt={logo?.alt}
                width={140}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
