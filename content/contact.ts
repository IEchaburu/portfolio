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
    content: "developer@example.com",
    link: "mailto:developer@example.com",
    inverted: false,
  },
  {
    label: "CODE REPOSITORY",
    icon: "github",
    content: "github.com/username",
    link: "https://github.com/username",
    inverted: false,
  },
  {
    label: "PROFESSIONAL NETWORK",
    icon: "linkedin",
    content: "linkedin.com/in/username",
    link: "https://linkedin.com/in/username",
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
