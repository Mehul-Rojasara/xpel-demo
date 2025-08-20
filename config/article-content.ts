export interface IntroductionSection {
  readonly paragraphs: readonly string[];
}

export interface MainArticleSection {
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly bulletPoints?: readonly string[];
}

export interface GlareReductionSection {
  readonly title: string;
  readonly paragraph1: string;
  readonly paragraph2: string;
  readonly leftImage: {
    readonly src: string;
    readonly alt: string;
    readonly overlayText: string;
  };
  readonly rightImage: {
    readonly src: string;
    readonly alt: string;
  };
  readonly quote: string;
}

export interface SecurityFilmSection {
  readonly title: string;
  readonly paragraphs: readonly string[];
}

export interface SingleArticleData {
  readonly introduction: IntroductionSection;
  readonly mainArticle: MainArticleSection;
  readonly glareReduction: GlareReductionSection;
  readonly securityFilm: SecurityFilmSection;
}

export const singleArticleData: SingleArticleData = {
  introduction: {
    paragraphs: [
      "Managing or owning a building is more than providing a roof over a client's head. It involves understanding the critical aspects of windows and their impact on energy efficiency and occupant comfort.",
      "This is where XPEL VISION window films come into play. These advanced films offer a comprehensive solution for building owners looking to enhance their properties while reducing costs and improving the overall quality of their interior spaces."
    ]
  },
  mainArticle: {
    title: "Energy Savings And Thermal Comfort",
    paragraphs: [
      "Architecture window film provides significant advantages when it comes to energy savings and thermal comfort. By applying these films to your building's windows, you can effectively reduce heat gain during hot months and heat loss during cold months.",
      "The advanced technology in XPEL window films helps reject solar heat, reducing the load on your HVAC systems and ultimately lowering energy costs. Additionally, these films provide excellent UV protection, helping to preserve interior furnishings and improve occupant comfort."
    ],
    bulletPoints: [
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod."
    ]
  },
  glareReduction: {
    title: "No More Squinting Eyes With Window Film Glare Reduction",
    paragraph1: "Sun glare can prevent screen visibility, cause premature eye fatigue, and discomfort. Nothing halts a train of thought like sun glare. It can prevent you from seeing the screen. Potentially cause premature fatigue from adjusting your eyes to compensate for the excess brightness. Plus, it's not comfortable. XPEL window films work to reduce glare by up to 90 percent. Thus, the film improves visual comfort for occupants, enabling them to focus better and be more productive.",
    paragraph2: "Whether it's a conference room, office space, or retail establishment, the glare reduction provided by XPEL commercial window film enhances the overall experience. It makes your building more appealing in the process.",
    leftImage: {
      src: "/images/header/about-us.webp",
      alt: "Modern office space with large windows and comfortable seating",
      overlayText: "Lorem ipsum dolor sit amet consectetur. Learn More"
    },
    rightImage: {
      src: "/images/header/ceramic-coating.webp",
      alt: "Commercial building windows with applied window film"
    },
    quote: "Nothing halts a train of thought like sun glare. It can prevent you from seeing the screen. Potentially cause premature fatigue from adjusting your eyes to compensate for the excess brightness."
  },
  securityFilm: {
    title: "Using Window Film To Deter And Protect Against Glass Breakage And Vandalism",
    paragraphs: [
      "XPEL's \"VISION Security Film\" is a thick film with industrial-grade adhesive designed to hold shattered glass fragments together, deterring break-ins and vandalism, and preventing flying shards.",
      "VISION Security film comes in \"Silver and Neutral\" options, offering solar heat protection, particularly valuable for buildings and storefronts with large display windows.",
      "VISION Anti-Graffiti film is a cost-effective, multi-layer transparent solution for shop windows, protecting against graffiti and scratch marks, and making window replacements more affordable."
    ]
  }
}; 