"use client";
import React, { useMemo, useState, useEffect, useId } from "react";
import { Button } from "../ui/Button";
import { Select } from "../ui/Select";

/** ---------------- Types ---------------- */
type City = string;
type StateName = string;
type Country = string;

type GeoMap = Record<Country, Record<StateName, City[]>>;

interface Installer {
  id: string;
  name: string;
  address1: string;
  address2?: string;
  phone?: string;
  website?: string;
  miles?: string;
  country: Country;
  state: StateName;
  city: City;
  products?: string[];
  productsExpanded?: boolean;
}

/** --------------- Data --------------- */
const GEO: GeoMap = {
  "United States": {
    California: ["Los Angeles", "San Diego", "Santa Ana", "Laguna Hills"],
    "New York": ["New York"],
    Texas: ["Austin", "Dallas"],
  },
  Canada: {
    Ontario: ["Toronto"],
    "British Columbia": ["Vancouver"],
  },
  Japan: {
    Tokyo: ["Shibuya", "Shinjuku"],
    Osaka: ["Osaka"],
  },
  India: {
    Maharashtra: ["Mumbai", "Pune"],
    Delhi: ["New Delhi"],
  },
};

const INSTALLERS: Installer[] = [
  // USA / California
  {
    id: "pfs",
    name: "Protective Film Solutions",
    address1: "3502 S Susan St",
    address2: "Santa Ana, CA 92704",
    phone: "(949) 599-5964",
    website: "#",
    miles: "1.8 MILES",
    country: "United States",
    state: "California",
    city: "Santa Ana",
  },
  {
    id: "405",
    name: "405 Motoring",
    address1: "3502 S Susan St",
    address2: "Santa Ana, CA 92704",
    miles: "1.8 MILES",
    country: "United States",
    state: "California",
    city: "Santa Ana",
  },
  {
    id: "aae",
    name: "Advance Auto Engineering",
    address1: "3502 S Susan St",
    address2: "Santa Ana, CA 92704",
    phone: "(626) 808-7756",
    website: "#",
    miles: "1.8 MILES",
    country: "United States",
    state: "California",
    city: "Santa Ana",
  },
  {
    id: "1cb",
    name: "1 Clear Bra Co.",
    address1: "23342 Peralta Drive, Suite 2",
    address2: "Laguna Hills, CA, 92653",
    phone: "(949) 310-7344",
    website: "#",
    miles: "1.8 MILES",
    country: "United States",
    state: "California",
    city: "Laguna Hills",
    productsExpanded: true,
    products: [
      "FUSION PLUS Ceramic Coating",
      "Paint Protection Film",
      "PRIME Automotive Window Tint",
    ],
  },
  {
    id: "cf",
    name: "Coastal Films",
    address1: "3502 S Susan St",
    address2: "Santa Ana, CA 92704",
    phone: "(714) 726-6983",
    website: "#",
    miles: "1.8 MILES",
    country: "United States",
    state: "California",
    city: "Santa Ana",
  },

  // USA / New York
  {
    id: "nyc-wraps",
    name: "NYC Wraps",
    address1: "100 Broadway",
    address2: "New York, NY 10005",
    miles: "2.4 MILES",
    country: "United States",
    state: "New York",
    city: "New York",
  },

  // Canada
  {
    id: "toronto-ppf",
    name: "Toronto PPF",
    address1: "123 King St W",
    address2: "Toronto, ON",
    country: "Canada",
    state: "Ontario",
    city: "Toronto",
  },

  // Japan
  {
    id: "tokyo-pro",
    name: "Tokyo Pro Detailing",
    address1: "1-2-3 Jingumae",
    address2: "Shibuya, Tokyo",
    phone: "(81) 03-1234-5678",
    miles: "5.2 KM",
    country: "Japan",
    state: "Tokyo",
    city: "Shibuya",
  },

  // India
  {
    id: "mumbai-gloss",
    name: "Mumbai Gloss Garage",
    address1: "Bandra Kurla Complex",
    address2: "Mumbai, MH",
    country: "India",
    state: "Maharashtra",
    city: "Mumbai",
  },
];

/** --------------- Icons --------------- */
const FilterIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
    <path fill="currentColor" d="M4 6h16v2H4V6zm3 5h10v2H7v-2zm3 5h4v2h-4v-2z" />
  </svg>
);
const PhoneIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
    <path
      fill="currentColor"
      d="M6.6 10.8a15.6 15.6 0 006.6 6.6l2.2-2.2a1 1 0 011.1-.24c1.2.48 2.6.74 4 .76a1 1 0 011 1v3a1 1 0 01-1 1C11.4 21.72 2.28 12.6 2 3.5A1 1 0 013 2.5h3a1 1 0 011 1c.02 1.36.28 2.75.76 4a1 1 0 01-.24 1.1L6.6 10.8z"
    />
  </svg>
);
const GlobeIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
    <path
      fill="currentColor"
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2c1.8 0 3.4 2.6 3.9 6H8.1C8.6 6.6 10.2 4 12 4zM6.3 12c.1-1.4.5-2.7 1.1-4h9.2c.6 1.3 1 2.6 1.1 4-.1 1.4-.5 2.7-1.1 4H7.4c-.6-1.3-1-2.6-1.1-4zM12 20c-1.8 0-3.4-2.6-3.9-6h7.8c-.5 3.4-2.1 6-3.9 6z"
    />
  </svg>
);
const ArrowRight = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
    <path fill="currentColor" d="M13 5l7 7-7 7v-5H4v-4h9V5z" />
  </svg>
);

/** --------------- Component --------------- */
export const SearchInstaller: React.FC = () => {
  const [country, setCountry] = useState<Country>("");
  const [stateName, setStateName] = useState<StateName>("");
  const [city, setCity] = useState<City>("");

  const [chips, setChips] = useState<string[]>([
    "Automotive",
    "Paint Protection Film",
    "Window Tint",
  ]);

  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const productsId = useId();

  /* ---------- Derived dropdown options ---------- */
  const countries = useMemo(() => Object.keys(GEO), []);
  const states = useMemo(
    () => (country ? Object.keys(GEO[country]) : []),
    [country]
  );
  const cities = useMemo(
    () => (country && stateName ? GEO[country][stateName] : []),
    [country, stateName]
  );

  /* ---------- Filter installers ---------- */
  const results = useMemo(() => {
    return INSTALLERS.filter((i) => {
      if (country && i.country !== country) return false;
      if (stateName && i.state !== stateName) return false;
      if (city && i.city !== city) return false;
      return true;
    });
  }, [country, stateName, city]);

  const resultsCount = results.length;

  /* ---------- Helpers ---------- */
  const resetBelowCountry = () => {
    setStateName("");
    setCity("");
  };
  const resetBelowState = () => setCity("");

  const btnBase =
    "locator__btn inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 px-3.5 py-2 text-base font-medium leading-none hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 active:translate-y-px transition";

  const labelBase =
    "locator__label block text-[11px] tracking-wide text-gray-700 mb-1";

  /* Lock scroll when mobile sidebar is open */
  useEffect(() => {
    document.body.style.overflow = showMobileFilters ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMobileFilters]);

  return (
    <section className="locator bg-white px-4 md:px-8 lg:px-10 py-6 md:py-8">
      {/* ---------------- Controls Row (3 equal dropdowns in one row) ---------------- */}
      <div className="locator__row grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Country */}
        <div className="locator__field">
          <label className={labelBase}>Country</label>
          <Select
            ariaLabel="Country"
            value={country}
            onChange={(value) => {
              setCountry(value);
              resetBelowCountry();
            }}
            options={countries.map((c) => ({ value: c, label: c }))}
            placeholder="Select a Country"
          />
        </div>

        {/* State */}
        <div className="locator__field">
          <label className={labelBase}>State</label>
          <Select
            ariaLabel="State"
            value={stateName}
            onChange={(value) => {
              setStateName(value);
              resetBelowState();
            }}
            options={states.map((s) => ({ value: s, label: s }))}
            placeholder="Select State"
            disabled={!country}
          />
        </div>

        {/* City */}
        <div className="locator__field">
          <label className={labelBase}>City</label>
          <Select
            ariaLabel="City"
            value={city}
            onChange={(value) => setCity(value)}
            options={cities.map((ci) => ({ value: ci, label: ci }))}
            placeholder="Select City"
            disabled={!stateName}
          />
        </div>
      </div>

      {/* ---------------- Sub-row: results left, Filters button right (under the dropdowns) ---------------- */}
      <div className="locator__subrow mt-3 flex items-center justify-between">
        <p className="locator__results text-xs text-gray-700">
          {resultsCount} Results
        </p>

        {/* Desktop/Tablet Filters button (also opens mobile slide-over on small screens) */}
        <Button
          onClick={() => setShowMobileFilters(true)}
          aria-label="Open filters"
          variant="secondary"
          buttonStyle="outlined"
          size="md"
        >
          <FilterIcon />
          <span className="text-sm">Filters</span>
        </Button>
      </div>

      {/* ---------------- Applied chips row (optional, like screenshot 1) ---------------- */}
      {chips.length > 0 && (
        <div className="locator__chips mt-4 flex flex-wrap items-center gap-2">
          {chips.map((t) => (
            <span
              key={t}
              className="locator__chip inline-flex items-center gap-1 rounded-md bg-gray-100 px-2.5 py-1 text-xs"
            >
              {t}
              <Button
                type="button"
                aria-label={`Remove ${t}`}
                onClick={() => setChips((c) => c.filter((x) => x !== t))}
                variant="tertiary"
                buttonStyle="outlined"
                size="sm"
                className="ml-1 rounded p-0.5 hover:bg-gray-200"
              >
                ×
              </Button>
            </span>
          ))}
          <Button
            type="button"
            onClick={() => setChips([])}
            variant="tertiary"
            buttonStyle="outlined"
            size="sm"
            className="text-xs font-medium text-gray-700 underline-offset-2 hover:underline"
          >
            Clear All
          </Button>
        </div>
      )}

      {/* ---------------- Results grid / Empty state ---------------- */}
      {resultsCount > 0 ? (
        <div className="locator__grid mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((it) => (
            <article
              key={it.id}
              className="locator__card relative rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              {it.miles && (
                <span className="locator__distance absolute right-3 top-3 rounded-md bg-gray-100 px-2 py-1 text-[10px] font-semibold tracking-wide">
                  {it.miles}
                </span>
              )}

              <h3 className="locator__title mb-1 text-base font-semibold">
                {it.name}
              </h3>
              <p className="locator__addr text-sm text-gray-600">
                {it.address1}
                {it.address2 ? (
                  <>
                    <br />
                    {it.address2}
                  </>
                ) : null}
              </p>

              <div className="locator__meta mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                {it.phone && (
                  <a
                    className="inline-flex items-center gap-1 hover:underline"
                    href={`tel:${it.phone.replace(/[^\d+]/g, "")}`}
                  >
                    <PhoneIcon />
                    {it.phone}
                  </a>
                )}
                {it.website && (
                  <a
                    className="inline-flex items-center gap-1 hover:underline"
                    href={it.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GlobeIcon />
                    Visit Website
                  </a>
                )}
              </div>

              <div className="locator__products mt-2 border-t border-gray-100 pt-2">
                <Button
                  type="button"
                  aria-controls={`${productsId}-${it.id}`}
                  aria-expanded={!!it.productsExpanded}
                  onClick={() =>
                    (it.productsExpanded = !it.productsExpanded) &&
                    (/* force re-render */ setCity((c) => c))
                  }
                  variant="tertiary"
                  buttonStyle="outlined"
                  size="sm"
                  className="flex w-full items-center justify-between text-left text-xs text-gray-700"
                >
                  <span>Products offered at this location</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className={`h-3.5 w-3.5 transition ${
                      it.productsExpanded ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      fill="currentColor"
                      d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z"
                    />
                  </svg>
                </Button>

                {it.productsExpanded && it.products?.length ? (
                  <div
                    id={`${productsId}-${it.id}`}
                    className="mt-2 flex flex-wrap gap-2"
                  >
                    {it.products.map((p) => (
                      <span
                        key={p}
                        className="rounded-md bg-gray-100 px-2 py-1 text-[11px]"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="locator__actions mt-3 flex gap-3 border-t border-gray-100 pt-3">
                <a href="#" className={`${btnBase} flex-1 justify-between`}>
                  <span className="text-sm">Get a Quote</span>
                  <ArrowRight />
                </a>
                <a href="#" className={`${btnBase} flex-1 justify-between`}>
                  <span className="text-sm">Get Directions</span>
                  <ArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="locator__empty mt-8 flex min-h-[160px] items-center justify-center rounded-lg bg-gray-50 px-4 text-center text-sm text-gray-600">
          There’s an XPEL product for every need. Select a country, state, and
          city to find an authorized XPEL installer in your area.
        </div>
      )}

      {/* ---------------- Mobile slide-over for Filters (same button opens this) ---------------- */}
      {showMobileFilters && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowMobileFilters(false)}
          />
          <aside className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white p-4 shadow-xl">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-base font-semibold">Filters</h2>
              <Button
                className="rounded p-1 text-2xl leading-none hover:bg-gray-100"
                aria-label="Close filters"
                onClick={() => setShowMobileFilters(false)}
                variant="tertiary"
                buttonStyle="outlined"
                size="sm"
              >
                ×
              </Button>
            </div>

            <p className="text-xs text-gray-600">
              (Hook up your extra filter controls here)
            </p>

            <div className="mt-6">
              <Button
                onClick={() => setShowMobileFilters(false)}
              >
                Apply
              </Button>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}
