import { ReactNode } from "react";

export const Links = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "#" },
  { title: "Contact", href: "#" },
];

export const navFooter = [
  { title: "Home", href: "#" },
  { title: "About Us", href: "#" },
  { title: "Contact Us", href: "#" },
];

export const authFooter = [
  { title: "Login", href: "#" },
  { title: "Create Account", href: "#" },
  { title: "Reset Password", href: "#" },
];

export interface NavLinkProps {
  children: ReactNode;
  href: string;
  onClose?: () => void;
}

export interface SocialBtnProps {
  children: ReactNode;
  label: string;
  href: string;
}

export const features = [
  {
    src: "/features/pana.png",
    desc: "Tutors create a video lesson, by verbally explaining the visuals lesson slides while screen recording",
  },
  {
    src: "/features/cuate.png",
    desc: "Learners access the video lessons by watching online (On mobile or web) or downloading for offline access",
  },
  {
    src: "/features/amico.png",
    desc: "Tutors and learners stay connected 24/7 through the messaging feature in our platform (Web and mobile",
  },
];
