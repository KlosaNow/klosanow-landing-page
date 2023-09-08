import { ReactNode } from "react";
import * as yup from "yup";

export const Links = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
];


export const navFooter = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Contact Us", href: "/contact" },
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
    src: "/images/features/pana.png",
    desc: "Tutors create a video lesson, by verbally explaining the visuals lesson slides while screen recording",
  },
  {
    src: "/images/features/cuate.png",
    desc: "Learners access the video lessons by watching online (On mobile or web) or downloading for offline access",
  },
  {
    src: "/images/features/amico.png",
    desc: "Tutors and learners stay connected 24/7 through the messaging feature in our platform (Web and mobile",
  },
];

export const contactSchema = yup.object().shape({
  phone: yup.string().required("Phone Number is required"),
  email: yup.string().email().required("Email is required"),
  message: yup.string().required("Message is required").max(2500),
});
