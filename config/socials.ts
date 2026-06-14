import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@strykr0",
    icon: Icons.gitHub,
    link: "https://github.com/Strykr0",
  },
  {
    name: "LinkedIn",
    username: "Wongsakorn Adirekkittikun",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/wongsakorn-adirekkittikun-200431326/",
  },
  {
    name: "Gmail",
    username: "Wongsakorn Adirekkittikun",
    icon: Icons.gmail,
    link: "mailto:42126wongsakorn@gmail.com",
  },
];
