export interface ContactCard {
  label: string;
  icon: "mail" | "github" | "linkedin" | "download";
  content: string;
  link: string;
  inverted: boolean;
}

export const contactCards: ContactCard[] = [
  {
    label: "PRIMARY CHANNEL",
    icon: "mail",
    content: "inaki.echaburu@gmail.com",
    link: "mailto:inaki.echaburu@gmail.com",
    inverted: false,
  },
  {
    label: "CODE REPOSITORY",
    icon: "github",
    content: "github.com/IEchaburu",
    link: "https://github.com/IEchaburu",
    inverted: false,
  },
  {
    label: "PROFESSIONAL NETWORK",
    icon: "linkedin",
    content: "linkedin.com/in/inakiechaburu/",
    link: "https://linkedin.com/in/inakiechaburu",
    inverted: false,
  },
  {
    label: "CREDENTIALS",
    icon: "download",
    content: "[ DOWNLOAD FULL RESUME ]",
    link: "#",
    inverted: true,
  },
];
