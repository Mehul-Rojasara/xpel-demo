import Image from "next/image";

const logos = [
  { id: 2, src: "/images/partnership/logo-2.png", alt: "Logo 2" },
  { id: 1, src: "/images/partnership/logo-1.png", alt: "Logo 1" },
  { id: 4, src: "/images/partnership/logo-4.png", alt: "Logo 4" },
  { id: 3, src: "/images/partnership/logo-3.png", alt: "Logo 3" },
  { id: 2, src: "/images/partnership/logo-2.png", alt: "Logo 2" },
  { id: 5, src: "/images/partnership/logo-5.png", alt: "Logo 5" },
];

export const PartnerLogos = () => {
  return (
    <section className="bg-neutral-900 py-8 md:py-16 relative w-full overflow-hidden">
      <div className="max-w-[90rem] w-full m-auto ">
        <div className="flex items-center gap-6 md:gap-16 justify-between w-full overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] pl-6 Xxl:pl-0">
          {logos?.map((logo) => (
            <div
              key={logo?.id}
              className="flex items-center justify-center flex-1 min-w-[7.5rem] md:min-w-[11.625rem] max-w-[11.625rem]: min-h-[4.063rem] md:min-h-[6.25rem]"
            >
              <Image src={logo?.src} alt={logo?.alt} width={186} height={100} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 w-[1.75rem] h-[1.75rem] text-white flex items-center justify-center cursor-pointer">
          <i className="icon-Pause"></i>
        </div>
      </div>
    </section>
  );
};
