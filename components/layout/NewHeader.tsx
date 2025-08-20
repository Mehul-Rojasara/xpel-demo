"use client";
import React from "react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import logoDark from "@/assets/images/common/logo-dark.png";
import logoWhite from "@/assets/images/common/logo-white.png";
import product1 from "@/assets/images/common/product1.png";
import product2 from "@/assets/images/common/product2.png";
import product3 from "@/assets/images/common/product3.png";
import product4 from "@/assets/images/common/product4.png";
import { FormSection, Input, InputGroup } from "../ui/Input";
import { usePathname } from "next/navigation";

const solidHeaderRouteSubstrings = ["/legal"];

export const NewHeader = () => {
  const [isProductsOpen, setIsProductsOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);
  const pathname = usePathname();

  const isLegalRoute = React.useMemo(() => {
    if (!pathname) return false;
    return solidHeaderRouteSubstrings.some((route) => pathname.includes(route));
  }, [pathname]);
  const shouldApplySolidHeader = isScrolled || isMobileMenuOpen || isProductsOpen || isLegalRoute;

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const shouldLockScroll = isProductsOpen || isMobileMenuOpen;
    if (shouldLockScroll) {
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    };
  }, [isProductsOpen, isMobileMenuOpen]);

  React.useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const scrolled = currentY > 10;
      setIsScrolled(scrolled);

      if (currentY <= 10) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(currentY < lastScrollY.current);
      }

      lastScrollY.current = currentY;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`${shouldApplySolidHeader ? "bg-[rgba(255,255,255,0.9)] backdrop-blur-[10px] border-b border-[rgba(205,205,205,0.8)]" : "bg-transparent"} fixed top-0 left-0 right-0 z-[1000] transition-transform duration-300 ${
          isMobileMenuOpen || isProductsOpen || isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Container fullWidth={true} className="xl:!px-12">
          <div className="h-[4rem] md:h-[5rem] Lgx:h-[5.5rem] flex items-center">
            <div className="flex justify-between w-full h-full gap-4">
              <div className="flex items-center justify-center">
                <Link href="/" className="max-w-[93px] md:max-w-[125px]">
                  <Image
                    src={shouldApplySolidHeader ? logoDark : logoWhite}
                    alt="XPEL"
                    title="XPEL"
                    width={125}
                    height={32}
                    layout="intrinsic"
                  />
                </Link>
                <span
                  className={`inline-block h-[2rem] md:h-[3.438rem] w-[0.094rem] ${shouldApplySolidHeader ? "bg-neutral-900" : "bg-white"} mx-[0.625rem]`}
                ></span>
                <h3
                  className={`${shouldApplySolidHeader ? "text-neutral-900" : "text-white"} uppercase font-bold tracking-wide mt-1 md:mt-2 text-[28px] md:text-[36px]  xl:text-[40px] leading-normal font-display`}
                >
                  INDIA
                </h3>
              </div>
              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className={`lg:hidden ${shouldApplySolidHeader ? "text-neutral-900" : "text-white"} hover:opacity-80 transition-opacity duration-300 cursor-pointer`}
              >
                <i
                  className={`text-[20px] md:text-[22px] ${isMobileMenuOpen ? "icon-Close text-[14px] md:text-[18px]" : "icon-Hamburger"}`}
                ></i>
              </button>
              <nav
                className={`hidden lg:flex items-center gap-8 xl:gap-16 ${shouldApplySolidHeader ? "text-neutral-900" : "text-white"}`}
              >
                <ul className="flex items-center gap-4 xl:gap-8 h-full  text-[16px] lg:text-[18px] leading-[20px] font-[500] font-display tracking-tight">
                  <li className="transition-opacity duration-300 hover:opacity-80">
                    <Link href="/us/en/about-us">About Us</Link>
                  </li>
                  <li className="transition-opacity duration-300 hover:opacity-80">
                    <button
                      type="button"
                      aria-expanded={isProductsOpen}
                      aria-controls="products-dropdown"
                      onClick={() => setIsProductsOpen((prev) => !prev)}
                      className={`flex items-center gap-2 ${isProductsOpen ? "active" : ""}`}
                    >
                      Products
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        className={`transition-transform duration-300 ${isProductsOpen ? "rotate-180" : ""}`}
                      >
                        <path
                          d="M10.1663 1.91675L5.99967 6.08342L1.83301 1.91675"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </li>
                  <li className="transition-opacity duration-300 hover:opacity-80">
                    <Link href="/">FAQs</Link>
                  </li>
                  <li className="transition-opacity duration-300 hover:opacity-80">
                    <Link href="/">For Business</Link>
                  </li>
                  <li className="transition-opacity duration-300 hover:opacity-80">
                    <Link href="/">Contact Us</Link>
                  </li>
                </ul>
                <div className="flex items-center gap-8 xl:gap-6">
                  <Link
                    href="/"
                    className={`flex items-center gap-1.5 ${shouldApplySolidHeader ? "bg-neutral-900 text-white" : "bg-white text-neutral-900"} py-2.5 px-4 min-w-[112px] rounded-[100px] text-[16px] leading-[18px] font-[500] font-display tracking-[0] hover:bg-opacity-90  transition-all duration-300`}
                  >
                    <i className="icon-Map"></i>
                    Installer Locator
                  </Link>

                  <button
                    type="button"
                    className={`-ml-2 text-xl transition-opacity duration-300 hover:opacity-80 ${shouldApplySolidHeader ? "text-neutral-900" : "text-white"}`}
                    aria-label="Search"
                  >
                    <i className="icon-Search"></i>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </Container>
      </header>
      {/* Dropdown Menu */}
      <div className={`relative z-[1100] dropdown-menu ${isProductsOpen ? "active" : ""}`} id="products-dropdown">
        <div
          className={`overlay fixed top-[4rem] md:top-[5rem] lg:top-[5rem] Lgx:top-[5.5rem] left-0 bg-[#212D42] bg-opacity-40 blur-[32px] inset-0 z-[102] backdrop-blur-[1rem] bg-[rgba(44,53,70,.4)] hidden lg:block w-full lg:h-[calc(100vh-5rem)] Lgx:h-[calc(100vh-5.5rem)] transition-[background-color,opacity,visibility] duration-[.25s] ease-out opacity-0 invisible ${isProductsOpen ? "!opacity-100 !visible" : ""}`}
          onClick={() => setIsProductsOpen(false)}
          aria-hidden="true"
        ></div>
        <div
          className={`bg-neutral-100 md:p-[3rem_0.75rem] fixed top-[4rem] md:top-[5rem] lg:top-[5rem] Lgx:top-[5.5rem] left-0 right-0 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] lg:h-auto Lgx:h-auto overflow-y-auto lg:overflow-hidden [scrollbar-width:thin] Xxl:p-[4rem_6.25rem_5rem_6.25rem] transition-[visibility] ease-in duration-[0s,0.15s,0.25s] delay-[0s,0.20s,0.25s] invisible z-[105] ${isProductsOpen ? " !visible" : ""}`}
        >
          <div className="lg:hidden flex items-center gap-2 justify-center bg-neutral-200 p-[1rem_1.5rem] relative">
            <button
              type="button"
              className="flex items-center gap-2 absolute left-6 top-[50%] -translate-y-1/2"
              onClick={() => setIsProductsOpen(false)}
            >
              <i className="icon-Chevron-Left text-[14px] font-bold"></i>
            </button>
            <p className="font-h4">Products</p>
          </div>

          <Container>
            <ul
              className={`product-list grid p-[2.5rem_0] sm:grid-cols-2 lg:p-0 lg:grid-cols-5 gap-8 lg:translate-y-full transition-[visibility,transform,opacity] ease-in duration-[0s,0.15s,0.25s] delay-[0s,0.25s,0.25s] invisible opacity-0 ${isProductsOpen ? "!opacity-100 !visible lg:!translate-y-0" : ""}`}
            >
              {/* Starting one box space for empty space */}
              <li className="hidden lg:block"></li>
              <li>
                <Link href="/" className="flex flex-col gap-6 group cursor-pointer">
                  <div className="overflow-hidden rounded-[14px]">
                    <Image
                      src={product1}
                      alt="product"
                      // title="product"
                      width={262}
                      height={262}
                      layout="intrinsic"
                      className="object-cover h-full w-full group-hover:scale-110 transition duration-700 ease-in-out"
                    />
                  </div>
                  <div className="flex xl:items-center gap-2">
                    <h3 className="font-h4">Paint Protection Film</h3>
                    <i className="icon-Arrow-Right mt-1 xl:mt-0 text-[18px] lg:text-[20px] xl:text-[23px] "></i>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/" className="flex flex-col gap-6 group cursor-pointer">
                  <div className="overflow-hidden rounded-[14px]">
                    <Image
                      src={product2}
                      alt="product"
                      // title="product"
                      width={262}
                      height={262}
                      layout="intrinsic"
                      className="object-cover h-full w-full group-hover:scale-110 transition duration-700 ease-in-out"
                    />
                  </div>
                  <div className="flex xl:items-center gap-2">
                    <h3 className="font-h4">Ceramic Coating</h3>
                    <i className="icon-Arrow-Right mt-1 xl:mt-0 text-[18px] lg:text-[20px] xl:text-[23px] "></i>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/" className="flex flex-col gap-6 group cursor-pointer">
                  <div className="overflow-hidden rounded-[14px]">
                    <Image
                      src={product3}
                      alt="product"
                      // title="product"
                      width={262}
                      height={262}
                      layout="intrinsic"
                      className="object-cover h-full w-full group-hover:scale-110 transition duration-700 ease-in-out"
                    />
                  </div>
                  <div className="flex xl:items-center gap-2">
                    <h3 className="font-h4">Window Film</h3>
                    <i className="icon-Arrow-Right mt-1 xl:mt-0 text-[18px] lg:text-[20px] xl:text-[23px] "></i>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/" className="flex flex-col gap-6 group cursor-pointer">
                  <div className="overflow-hidden rounded-[14px]">
                    <Image
                      src={product4}
                      alt="product"
                      // title="product"
                      width={262}
                      height={262}
                      layout="intrinsic"
                      className="object-cover h-full w-full group-hover:scale-110 transition duration-700 ease-in-out"
                    />
                  </div>
                  <div className="flex xl:items-center gap-2">
                    <h3 className="font-h4">Interior Protection</h3>
                    <i className="icon-Arrow-Right mt-1 xl:mt-0 text-[18px] lg:text-[20px] xl:text-[23px] "></i>
                  </div>
                </Link>
              </li>
            </ul>
          </Container>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed top-[4rem] md:top-[5rem] right-0 ${isMobileMenuOpen ? "left-0" : "left-full"} py-6 bottom-0 z-50 transition-all duration-500 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] w-full bg-neutral-100 overflow-y-auto`}
      >
        <Container>
          <FormSection>
            <InputGroup className="relative">
              <Input id="search" placeholder="Search" height={48} name="search" className="!pr-11 !text-[18px]" />
              <button
                type="button"
                className="absolute right-4 flex items-center justify-center top-[14px]"
                aria-label="Search"
              >
                <i className="icon-Search text-[16px] p-0.5 text-neutral-900 font-bold"></i>
              </button>
            </InputGroup>
          </FormSection>
          <ul className="flex flex-col gap-8 py-8 border-b border-solid border-neutral-300 text-neutral-900">
            <li>
              <Link href="/" className="font-h3">
                About Us
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  setIsProductsOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                aria-controls="products-dropdown"
                aria-expanded={isProductsOpen}
                className="font-h3 flex items-center justify-between gap-2 w-full text-left"
              >
                Products
                <i className="icon-Chevron-Right text-[16px] font-bold"></i>
              </button>
            </li>
            <li>
              <Link href="/" className="font-h3">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/" className="font-h3">
                For Business
              </Link>
            </li>
            <li>
              <Link href="/" className="font-h3">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="py-8 flex flex-col gap-6 text-neutral-900">
            <Link href="/" className="font-h5 flex gap-2 items-center">
              <i className="icon-Map text-[24px]"></i>
              Find An Installer
            </Link>
            <Link href="/" className="font-h5 flex gap-2 items-center">
              <i className="icon-Help-Center text-[24px]"></i>
              Help Center
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};
