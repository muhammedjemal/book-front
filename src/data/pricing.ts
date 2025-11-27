import { IPricing } from "@/types";

export const tiers: IPricing[] = [
  {
    name: "Adulis Member",
    price: 25,
    features: [
      "Early Access to New Art Releases",
      "Exclusive Discounts on Select Prints (10% Off)",
      "Invitations to Virtual Art Events",
      "Direct support for Ethiopian artists",
    ],
  },
  {
    name: "The Adulis VIP Member",
    price: 50,
    features: [
      'All Benefits of "The Art Explorer"',
      "Exclusive Discounts on Masterworks and Prints (15% Off)",
      "Invitations to Virtual and In-Person Art Events",
      "Personalized Art Recommendations",
      "Priority Customer Service and Art Consultation",
    ],
  },
  {
    name: "The Adulis Patron Circle",
    price: 100,
    features: [
      'All Benefits of "The Art Connoisseur"',
      "Exclusive Access to Member-Only Art Collections",
      "VIP Pass to Art Masterclasses and Cultural Workshops",
      "Loyalty Points and Rewards Program",
      "Annual Gift of Art",
      "On-site training",
      "Sneak Peeks and Exclusive Updates",
    ],
  },
];
