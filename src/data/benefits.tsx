import {
  FiBarChart2,
  FiBriefcase,
  FiDollarSign,
  FiLock,
  FiPieChart,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUser,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Subscription Benefits",
    description:
      "Elevate your experience and gain access to premium features, discounts, and priority support by becoming a valued subscriber. Our exclusive membership unlocks a range of benefits designed to enhance your access and enjoyment.",
    bullets: [
      {
        title: "Exclusive 48-Hour Early Access",
        description:
          "Get a head start on everyone else! As a subscriber, you'll receive a special 48-hour window to access new products, features, or content, giving you a first look and the best chance to secure what you want.",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "15% Lifetime Discount",
        description:
          "Enjoy a lasting perk of your subscription! You'll receive a permanent 15% discount on all your orders, helping you save money with every purchase and making your membership truly rewarding.",
        icon: <FiTarget size={26} />,
      },
      {
        title: "VIP Support",
        description:
          "Experience unparalleled customer service. Our VIP support team prioritizes subscribers, ensuring you receive faster, dedicated assistance and quicker solutions to any inquiries you might have.",
        icon: <FiTrendingUp size={26} />,
      },
      {
        title: "Collector's Certificate",
        description:
          "Gain access to something truly special! Subscribers receive exclusive collector's certificates, adding an extra layer of prestige and authenticity to your collection or access.",
        icon: <FiTrendingUp size={26} />,
      },
      {
        title: "Seamless Experience",
        description:
          "Enjoy a smooth and hassle-free experience with your subscription, which is designed to be easy to manage, and enhances your overall time with us.",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: "/images/1/1.webp",
  },
  {
    title: "Why Choose Us ?",
    description:
      "At Adulis Ethiopian Art, we celebrate Ethiopia’s rich cultural heritage through a vibrant collection of traditional and contemporary art. Our commitment to showcasing the beauty of Ethiopian culture makes choosing us a meaningful difference.",
    bullets: [
      {
        title: "Empowering Artists",
        description:
          "We support talented Ethiopian artists by providing a platform that highlights their work, ensuring they receive the recognition and compensation.",
        icon: <FiDollarSign size={26} />,
      },
      {
        title: "Authentic Heritage",
        description:
          "Our collection features authentic Ethiopian art that celebrates the rich cultural heritage and diverse stories that define the essence of Ethiopia.",
        icon: <FiBriefcase size={26} />,
      },
      {
        title: "Exclusive Access",
        description:
          "Enjoy our limited edition artworks and exclusive benefits, including early access to our newly released and special discounts for our valued members.",
        icon: <FiPieChart size={26} />,
      },
    ],
    // imageSrc: "/images/2/2.webp",
    imageSrc: "/images/3/44.webp",
  },
  {
    title: "Why Ethiopian Arts ?",
    description:
      "At Adulis Ethiopian Art, we are committed to showcasing the beauty and richness of Ethiopian culture through our curated collection. Here are a few reasons why choosing Ethiopian arts makes a meaningful difference:",
    bullets: [
      {
        title: "A Cultural Treasure",
        description:
          "Ethiopian art is a vibrant expression of the country's rich cultural history, blending ancient traditions with modern creativity. Its unique aesthetic is deeply connected to Ethiopia’s historical legacy and religious heritage.",
        icon: <FiLock size={26} />,
      },
      {
        title: "Religious and Spiritual Depth",
        description:
          "One of the earliest Christian nations, Ethiopia’s art often reflects its spiritual roots. Iconic religious paintings, intricate church murals, and sacred symbols play a vital role in the nation's artistic identity.",
        icon: <FiUser size={26} />,
      },
      {
        title: "Distinctive Visual Style",
        description:
          "Ethiopian art stands out for its bold use of color, detailed patterns, and elongated figures. This recognizable style makes it a unique contribution to the global art scene, celebrated for its storytelling and symbolism.",
        icon: <FiShield size={26} />,
      },
      {
        title: "Historical Continuity",
        description:
          "Ethiopian art bridges the ancient and the contemporary. From millennia-old relics to modern interpretations, it offers an artistic timeline that tells the story of a nation, its people, and their evolving narratives.",
        icon: <FiShield size={26} />,
      },
      {
        title: "Art of Resilience",
        description:
          "Throughout its history, Ethiopian art has survived conflicts, invasions, and political changes. Each artwork serves as a testament to the resilience and strength of Ethiopian culture, preserving its identity through the ages.",
        icon: <FiShield size={26} />,
      },
      {
        title: "Growing Global Influence",
        description:
          "With increasing international recognition, Ethiopian artists are now gaining global exposure. From traditional religious icons to avant-garde works, Ethiopian art is making a significant mark on the global stage.",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/images/3/1.webp",
  },
];
