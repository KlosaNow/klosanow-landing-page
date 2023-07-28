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
