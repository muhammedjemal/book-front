import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading: "the world's best booking and reservation platform",
  quickLinks: [
    {
      text: "About Us",
      url: "https://en.wikipedia.org/wiki/Acme_Corporation",
    },
    {
      text: "Features",
      url: "#features",
    },
    {
      text: "Terms and Conditions",
      url: "#terms",
    },
    {
      text: "Privacy Policy",
      url: "#privacy",
    },
    {
      text: "Back to Home",
      url: "#",
    },
  ],
  email: "info@acmebookinginc.com",
  telephone: "+1 (123) 456-7890",
  socials: {
    // github: 'https://github.com',
    // x: 'https://twitter.com/x',
    twitter: "https://twitter.com/Twitter",
    facebook: "https://facebook.com",
    // youtube: 'https://youtube.com',
    linkedin: "https://www.linkedin.com",
    // threads: 'https://www.threads.net',
    instagram: "https://www.instagram.com",
  },
};
