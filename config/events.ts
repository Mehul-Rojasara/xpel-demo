import type { BaseEventData } from '@/components/common/EventCard';

export interface EventData extends BaseEventData {
  readonly category: 'automotive' | 'marine' | 'home-office' | 'bicycle';
  readonly eventType: 'race' | 'trade-show' | 'xpel-event' | 'car-show' | 'boat-show';
}

export interface EventFilter {
  readonly coverage: 'automotive' | 'marine' | 'home-office' | 'bicycle';
  readonly eventType: 'race' | 'trade-show' | 'xpel-event' | 'car-show' | 'boat-show';
}

export const EVENTS_DATA = {
  hero: {
    title: "XPEL Dealer Conference",
    subtitle: "LOREM IPSUM",
    description: "A serious drag racer like Ryan Martin requires serious protection. With the help of ULTIMATE PLUS 10 PPF, Ryan's FIREBALL Camaro can look its best while performing on or off the track.",
    buttonText: "Learn More",
    buttonHref: "/events/dealer-conference",
    backgroundImage: "/images/header/about-us.webp",
    rightImage: "/images/management/managementpeople1.png",
    rightImageAlt: "XPEL team members at conference"
  },
  upcomingEvents: [
    {
      id: "nada-2024",
      title: "NADA 2024",
      date: "FEB 01",
      fullDate: "February 1-4, 2024",
      location: "3150 Paradise Rd, Las Vegas, NV 89109",
      description: "The NADA Show is the premier event for automotive retail professionals, featuring the latest industry trends, networking opportunities, and educational sessions.",
      logo: "/images/partnership/grid1.jpg",
      logoAlt: "NADA NATIONAL AUTOMOBILE DEALERS ASSOCIATION",
      category: "automotive",
      eventType: "trade-show",
      featured: true
    },
    {
      id: "xpel-dealer-conference",
      title: "XPEL Dealer Conference",
      date: "FEB 23",
      fullDate: "February 23-24, 2024",
      location: "3150 Paradise Rd, Las Vegas, NV 89109",
      description: "Annual XPEL dealer conference and training event where industry leaders gather to share insights and innovations.",
      logo: "/images/partnership/grid2.jpg",
      logoAlt: "XPEL team members at conference",
      category: "automotive",
      eventType: "xpel-event",
      featured: false
    },
    {
      id: "tape-functional-film-expo",
      title: "Tape & Functional Film Expo",
      date: "FEB 28",
      fullDate: "February 28-29, 2024",
      location: "3150 Paradise Rd, Las Vegas, NV 89109",
      description: "International trade show for adhesive tape and functional film, showcasing the latest innovations in the industry.",
      logo: "/images/partnership/grid3.png",
      logoAlt: "tff europe tape & functional film EXPO",
      category: "home-office",
      eventType: "trade-show",
      featured: false
    },
    {
      id: "jec-world",
      title: "JEC World",
      date: "MAR 05",
      fullDate: "March 5-7, 2024",
      location: "3150 Paradise Rd, Las Vegas, NV 89109",
      description: "World's largest composite materials trade show, featuring cutting-edge technologies and industry leaders.",
      logo: "/images/partnership/grid4.png",
      logoAlt: "JEC WORLD The Leading International Composites Show",
      category: "home-office",
      eventType: "trade-show",
      featured: false
    },
    {
      id: "motoamerica-daytona",
      title: "MotoAmerica Superbike: Daytona 200",
      date: "MAR 07",
      fullDate: "March 7-9, 2024",
      location: "3150 Paradise Rd, Las Vegas, NV 89109",
      description: "Legendary motorcycle racing event featuring the best riders and teams in the sport.",
      logo: "/images/partnership/grid1.jpg",
      logoAlt: "XPEL branded motorcycle on track",
      category: "automotive",
      eventType: "race",
      featured: false
    },
    {
      id: "indycar-thermal",
      title: "INDYCAR: Thermal Club $1 Million",
      date: "MAR 24",
      fullDate: "March 24, 2024",
      location: "3150 Paradise Rd, Las Vegas, NV 89109",
      description: "High-stakes INDYCAR racing event with a million-dollar prize pool.",
      logo: "/images/partnership/grid2.jpg",
      logoAlt: "XPEL branded INDYCAR on track",
      category: "automotive",
      eventType: "race",
      featured: false
    },
    {
      id: "sema-show",
      title: "SEMA Show 2024",
      date: "APR 02",
      fullDate: "April 2-5, 2024",
      location: "3150 Paradise Rd, Las Vegas, NV 89109",
      description: "The premier automotive specialty products trade event in the world, featuring the latest aftermarket innovations.",
      logo: "/images/partnership/grid3.png",
      logoAlt: "SEMA Show logo",
      category: "automotive",
      eventType: "trade-show",
      featured: false
    },
    {
      id: "formula-drift",
      title: "Formula DRIFT Championship",
      date: "APR 15",
      fullDate: "April 15-16, 2024",
      location: "3150 Paradise Rd, Las Vegas, NV 89109",
      description: "Professional drifting championship featuring the world's best drivers and most exciting automotive action.",
      logo: "/images/partnership/grid4.png",
      logoAlt: "Formula DRIFT logo",
      category: "automotive",
      eventType: "race",
      featured: false
    },
    {
      id: "marine-expo",
      title: "International Marine Expo",
      date: "MAY 08",
      fullDate: "May 8-10, 2024",
      location: "3150 Paradise Rd, Las Vegas, NV 89109",
      description: "Premier marine industry trade show featuring the latest in boat technology and marine protection solutions.",
      logo: "/images/partnership/grid1.jpg",
      logoAlt: "Marine Expo logo",
      category: "marine",
      eventType: "trade-show",
      featured: false
    },
    {
      id: "bicycle-world",
      title: "World Bicycle Summit",
      date: "MAY 22",
      fullDate: "May 22-24, 2024",
      location: "3150 Paradise Rd, Las Vegas, NV 89109",
      description: "Global bicycle industry conference focusing on innovation, sustainability, and cycling culture.",
      logo: "/images/partnership/grid2.jpg",
      logoAlt: "World Bicycle Summit logo",
      category: "bicycle",
      eventType: "trade-show",
      featured: false
    },
    {
      id: "home-office-show",
      title: "Home & Office Protection Expo",
      date: "JUN 05",
      fullDate: "June 5-7, 2024",
      location: "3150 Paradise Rd, Las Vegas, NV 89109",
      description: "Comprehensive showcase of residential and commercial protection solutions including window films and coatings.",
      logo: "/images/partnership/grid3.png",
      logoAlt: "Home & Office Protection Expo logo",
      category: "home-office",
      eventType: "trade-show",
      featured: false
    },
    {
      id: "xpel-racing-championship",
      title: "XPEL Racing Championship Finals",
      date: "JUN 20",
      fullDate: "June 20-22, 2024",
      location: "3150 Paradise Rd, Las Vegas, NV 89109",
      description: "Championship finale featuring the best XPEL-sponsored racing teams competing for the ultimate prize.",
      logo: "/images/partnership/grid4.png",
      logoAlt: "XPEL Racing Championship logo",
      category: "automotive",
      eventType: "race",
      featured: false
    }
  ],
  relatedArticles: [
    {
      id: "bike-protection-101",
      title: "Bike Protection 101: How InvisiFRAME PPF Protects for Frames, Cranks & More",
      category: "BICYCLE",
      image: "/images/partnership/grid3.png",
      imageAlt: "Bicycle frame protection",
      href: "/blog/bike-protection-101"
    },
    {
      id: "federal-tax-credit",
      title: "Federal Tax Credit on Window Film Benefits Residential Homeowners",
      category: "HOME & OFFICE",
      image: "/images/partnership/grid4.png",
      imageAlt: "Residential home with window film",
      href: "/blog/federal-tax-credit"
    },
    {
      id: "windshield-protection",
      title: "How XPEL Window Film on Windshields Maximizes Interior Comfort and UV Protection",
      category: "AUTOMOTIVE",
      image: "/images/partnership/grid1.jpg",
      imageAlt: "Car windshield with protection film",
      href: "/blog/windshield-protection"
    },
    {
      id: "race-protection",
      title: "XPEL Protection for Race Interiors: Keeping Your Vehicle Safe on the Track",
      category: "AUTOMOTIVE",
      image: "/images/partnership/grid2.jpg",
      imageAlt: "Race car interior protection",
      href: "/blog/race-protection"
    },
    {
      id: "marine-protection",
      title: "Marine Protection: Ultimate Paint Protection for Boats and Watercraft",
      category: "MARINE",
      image: "/images/partnership/grid1.jpg",
      imageAlt: "Boat with paint protection film",
      href: "/blog/marine-protection"
    },
    {
      id: "commercial-windows",
      title: "Commercial Window Solutions: Energy Efficiency and Security for Businesses",
      category: "COMMERCIAL",
      image: "/images/partnership/grid2.jpg",
      imageAlt: "Commercial building with window film",
      href: "/blog/commercial-windows"
    },
    {
      id: "luxury-car-care",
      title: "Luxury Car Care: Premium Protection for High-End Vehicles",
      category: "AUTOMOTIVE",
      image: "/images/partnership/grid3.png",
      imageAlt: "Luxury car with protection",
      href: "/blog/luxury-car-care"
    },
    {
      id: "installation-tips",
      title: "Professional Installation Tips: Getting the Perfect Finish Every Time",
      category: "INSTALLATION",
      image: "/images/partnership/grid4.png",
      imageAlt: "Professional installation process",
      href: "/blog/installation-tips"
    }
  ],
  filters: {
    coverage: [
      { id: "automotive", label: "Automotive", count: 6 },
      { id: "marine", label: "Marine", count: 1 },
      { id: "home-office", label: "Home & Office", count: 3 },
      { id: "bicycle", label: "Bicycle", count: 1 }
    ],
    eventType: [
      { id: "race", label: "Races", count: 3 },
      { id: "trade-show", label: "Trade Shows", count: 6 },
      { id: "xpel-event", label: "XPEL-Hosted", count: 1 },
      { id: "car-show", label: "Car Shows", count: 1 },
      { id: "boat-show", label: "Boat Shows", count: 1 }
    ]
  }
} as const; 