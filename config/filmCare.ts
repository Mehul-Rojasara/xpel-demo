export interface FilmCareContent {
  readonly intro: {
    readonly title: string;
    readonly subtitle: string;
    readonly description: string;
  };
  readonly energySection: {
    readonly title: string;
    readonly content: string;
    readonly followUp: string;
    readonly benefits: ReadonlyArray<{
      readonly id: string;
      readonly text: string;
    }>;
  };
}

export interface ProductShowcase {
  readonly title: string;
  readonly description?: string;
  readonly price?: string;
  readonly image: string;
  readonly ctaText: string;
  readonly ctaHref: string;
}

export const FILM_CARE_CONTENT: FilmCareContent = {
  intro: {
    title: "Film Care & Maintenance",
    subtitle: "Managing or owning a building is more than providing a roof over a client's head. It involves creating an inviting, comfortable, and safe environment for any potential tenant, client, and visitor who enters through the door. Apart from sturdy load-bearing walls and clean carpets, one of the most crucial elements impacting any interior space is the windows.",
    description: "Glass panels and windows do much more than let in natural light and provide a view of the outside world. XPEL VISION window films are an innovation in functionality and style for business owners looking to enhance the appeal of their building while improving comfort through vital UV and infrared sun protection. In this article, we'll explore six key benefits of using commercial window films to improve the quality, comfort, and safety of a building while helping to reduce costs."
  },
  energySection: {
    title: "Energy Savings And Thermal Comfort",
    content: "One of the most significant advantages of architecture window film is savings on energy costs. It reduces the amount of infrared heat coming into the building. Infrared heat is the burning sensation you feel when stepping into a hot car or leaving an air-conditioned building in the middle of August. XPEL window films work to reject solar heat and block harmful UV rays from passing through the glass. This makes it easier to maintain a more consistent, cooler temperature in a building.",
    followUp: "As a result, the air conditioning unit isn't constantly working to mitigate the heat coming into the room.",
    benefits: [
      { id: 'benefit-1', text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod" },
      { id: 'benefit-2', text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod" },
      { id: 'benefit-3', text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod" },
      { id: 'benefit-4', text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod" }
    ]
  }
};

export const FILM_CARE_PRODUCTS = {
  ultimatePlus: {
    title: "ULTIMATE PLUS",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
    image: "/images/singleProductPpf/single-product-1.png",
    ctaText: "Learn More",
    ctaHref: "/products/ultimate-plus"
  },
  ceramicBoost: {
    title: "XPEL Ceramic Boost",
    price: "$436.95",
    image: "/images/singleProductPpf/single-product-2.png",
    ctaText: "View Product",
    ctaHref: "/products/ceramic-boost"
  }
}; 