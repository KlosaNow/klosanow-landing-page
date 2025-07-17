import { ReactNode } from "react";
import { StaticImageData } from "next/image";
import {
  micImg,
  videoIconImg,
  msgIcon,
  slideImg,
  slideImg1,
  slideImg2,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  WhatsappIcon,
} from "@/assets";

type TImgPaths = {
  url: StaticImageData;
  height?: number;
  width?: number;
  className?: string;
};

type TLinks = {
  title: string;
  href: string;
};

type PrivacySection = {
  title?: string;
  paragraphs: string[];
};

interface FAQItem {
  title: string;
  text: string;
}

interface ICultureTalks {
  title: string;
  text: string;
}

interface TermsSection {
  title: string;
  paragraphs: string[];
}

interface IFooterSocialLinks {
  url: StaticImageData;
  href: string;
  width?: number;
  height?: number;
}

const ImgPaths: TImgPaths[] = [
  { url: slideImg, height: 500, width: 500, className: "mt-15" },
  { url: slideImg1, height: 700, width: 500, className: "mt-12" },
  { url: slideImg2, height: 500, width: 500, className: "-mt-10" },
];

const Links: TLinks[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const MobileLinks = [
  ...Links,
  { title: "Join waitlist", href: "https://zc.vg/tav67" },
  // { title: "LogIn", href: "https://klosanow-frontend.vercel.app" },
];

const navFooter = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Contact Us", href: "/contact" },
  { title: "Terms of Use", href: "/terms" },
  { title: "Privacy Policy", href: "/privacy" },
];

const authFooter: { title: string; href: string }[] = [
  { title: "Login", href: "#" },
  {
    title: "Create Account",
    href: "#",
  },
  { title: "Reset Password", href: "#" },
];

const footerSocialLinks: IFooterSocialLinks[] = [
  {
    url: WhatsappIcon,
    href: "#",
    width: 30,
    height: 30,
  },
  {
    url: LinkedInIcon,
    href: "https://www.linkedin.com/company/klosanow",
    width: 30,
    height: 30,
  },
  {
    url: TwitterIcon,
    href: "https://twitter.com/klosanow",
    width: 30,
    height: 30,
  },
  {
    url: InstagramIcon,
    href: "https://www.instagram.com/klosanow?igshid=OGQ5ZDc2ODk2ZA%3D%3D",
    width: 30,
    height: 30,
  },
];

export interface NavLinkProps {
  children: ReactNode;
  href: string;
  handleNavClick?: () => void;
}

export interface SocialBtnProps {
  children: ReactNode;
  label: string;
  href: string;
}

const features = [
  {
    src: micImg,
    desc: "Tutors create a video lesson with a desktop, by recording their voice explanations and lesson slides.",
  },
  {
    src: videoIconImg,
    desc: "Learners access the video lessons by watching online or downoading for offline access through any device.",
  },
  {
    src: msgIcon,
    desc: "Tutors and learners stay connected 24/7 through the study chat feature.",
  },
];

const aboutSlide = [
  {
    id: 1,
    title: "Our Benefits",
    desc: "",
  },
  {
    id: 2,
    title: "Teach with ease",
    desc: "Create your lessons with easy-to-use tools and share with learners easily.",
  },
  {
    id: 3,

    title: "Rewatch Lessons",
    desc: "Learners can rewatch video lessons as many times until they grasp the concept.",
  },
  {
    id: 4,
    title: "Time Flexibility",
    desc: "Tutors get to teach when they want, learners learn when they can.",
  },
  {
    id: 4,
    title: "Personalized Learning",
    desc: "Tutors can create learning contents in line with their learners' preferred language, curriculum and learning style.",
  },
];

const cultureTalks: ICultureTalks[] = [
  {
    title: "Seamless:",
    text: "Klosanow values providing a smooth and hassle-free experience for its users, ensuring that using the platform is effortless and efficient.",
  },
  {
    title: "Support:",
    text: "We place high importance on offering strong customer support and assistance to its users, ensuring they have the guidance they need.",
  },
  {
    title: "Growth:",
    text: "Klosanow promotes a culture of continuous growth and improvement, both for the platform and its users.",
  },
  {
    title: "Openness:",
    text: "We encourage an open and transparent communication culture, where ideas and feedback are welcomed.",
  },
  {
    title: "Inspiring:",
    text: "Klosanow aims to inspire its users to embrace the power of online education and pursue their learning goals with enthusiasm.",
  },
];

const faqItems: FAQItem[] = [
  {
    title: "What is Klosanow ?",
    text: "Klosanow is an Edtech Platform that allows tutors create and send pre-recorded video lessons to learners as video messages. Learners can stream the video lessons  online.",
  },
  {
    title: "Who is it for?",
    text: "Klosanow is for tutors and learners across all levels of education.\nPrimary - Secondary - Tertiary - Corporate Education.",
  },
  {
    title: "What kind of App is Klosanow? ",
    text: "Klosanow is a web application and can be accessed through the web browser.",
  },
  {
    title: 'Does the "Create a lesson" feature work on the mobile browser? ',
    text: 'The "Create a lesson " feature can only be accessed through a desktop/computer browser. (Use a real computer not desktop mode on mobile browser)',
  },
  {
    title: "What browser does the other App's feature work with?",
    text: 'All the other App\'s features  work both on the desktop and mobile browsers. Only the  "Create a lesson" feature work on the desktop browser.',
  },
  {
    title: "Is using the platform free?",
    text: "Yes, we've launched with the free version. The free edition allows you save drafts, create lesson, view lessons, create a study group, send lessons & messages to numerous individual chats and offers 50mb of storage space.",
  },
];

const sections: PrivacySection[] = [
  {
    title: "Privacy Policy",
    paragraphs: [
      `Below is Klosanow's Privacy Policy, which explains what personal information we collect and how we use the information. To protect your privacy, Klosanow follows different principles in accordance with worldwide practices for user privacy and data protection.`,
      `This Privacy Policy covers the use of the Klosanow website (the "Site") and the products, software, data feeds, and services (collectively with the Site, the "Service") provided by Klosanow ("Klosanow," "We," "Our" or "Us"), including how Klosanow treats information, including personal information, that we collect and receive.`,
      `The term "Personal Information", as used in this Privacy Policy, refers to any information that can be used to identify a specific person, or any anonymous information (e.g. IP address) that is linked to a specific person. Personal Information does not include information that has been aggregated or made anonymous such that it can no longer be reasonably associated with a specific person. This policy in no way restricts or limits our collection and use of aggregate information, and we may share aggregate data about our users with third parties for various purposes.`,
      `This Privacy Policy is part of and incorporated into Klosanow's Terms of Use ("Terms of Use").`,
      `Klosanow values your trust and confidence. We are committed to safeguarding the privacy of your information at all times. You may add, delete or modify your Personal Information at any time. Subject to your permission or as specifically stated in this Privacy Policy, we will not sell, exchange or otherwise share your Personal Information with third parties for any reason.`,
    ],
  },
  {
    title: "Information Collection and How it is Used",
    paragraphs: [
      "• Personal Information such as your name, username, email address, phone number, password.",
      "• Information Sent to Us by Your Web Browser. We collect information that is sent to us automatically by your Web browser. This information typically includes your IP address, the name and version of your operating system, the name and version of your browser, the date and time of your visit and the pages on this Site you visit. Please check your browser if you want to learn what information your browser sends or how to change your settings. This information does not identify you personally. Generally, we use this information to improve this Site and make it more compatible with the technology used by our visitors. However, we may link information sent by your browser to information that identifies you personally. For example, if you are a registered member, we may link your IP address to information that identifies you personally. In addition, if we suspect criminal activity, we may share our server logs with the appropriate investigative authorities who could use that information to trace and identify you.",
      "• Cookies and Other Similar Technologies: We (or our third-party service providers) may use various technologies to collect and store information when you visit our Service, including clear GIFs (also known as “web beacons”), “tags”, “scripts”, and “cookies”. We also make use of persistent secure cookies: a persistent cookie remains after you close your browser (although they can be removed) and may be used by your browser to identify you on subsequent visits to the Service. We may also use, collect and store information locally on your device using mechanisms such as browser web storage (including HTML 5). Like many services, Klosanow uses these technologies to tailor the Service for you, and to help the Service work better for you.",
      "• Usage Information: Like most online services, when you use our Service, we automatically collect and store certain information in our server logs. This information helps us make decisions about what we should work on next - for example, by showing which features are most or least popular.",
      "Examples include:",
      "Details of how you used our Service, such as your activity on the Service, and the frequency and duration of your visits to the Klosanow Website or Klosanow Web App.",
      "Device event information such as crashes, system activity, hardware settings, browser type, browser language, the date and time of your request and referral URL.",
    ],
  },
  {
    title: "Will Klosanow share any information it collects?",
    paragraphs: [
      "Klosanow does not sell or rent your, or your students' personal information to any third party for any purpose - including for advertising or marketing purposes. Furthermore, we do not share personal information with any third parties except in the limited circumstances such as:",
      "• Aggregated Information and Non-Identifying Information: We may share aggregated, nonpersonally identifiable information publicly, including with users, partners or the press in order to, for example, demonstrate how Klosanow is used, spot industry trends, or to provide marketing materials for Klosanow. Any aggregated information shared this way will not contain any personal information. If we choose to share this information with any third party, we will take necessary measures to ensure that the third party agrees not to engage in re-identification or the combination of Non-Identifying Information with other data sets that may pose a risk of re-identification.",
      "• Legal Requirements: We may disclose personal information if we have a good faith belief that doing so is necessary to comply with the law, such as complying with a court order or other legal process. We may need to disclose personal information where, in good faith, we think it is necessary to protect the rights, property, or safety of Klosanow, our employees, our community, or others, or to prevent violations of our Terms of Use or other applicable agreements. This includes, without limitation, exchanging information with other companies and organizations for fraud protection or responding to government requests.",
    ],
  },
  {
    title: "How does Klosanow protect and secure my information?",
    paragraphs: [
      "Your Klosanow account is protected by a password. You can help us protect your account from unauthorized access by keeping your password secret at all times. The security of your personal information is important to us. We work hard to protect our community, and we maintain administrative, technical and physical safeguards designed to protect against unauthorized use, disclosure of or access to personal information.",
    ],
  },
  {
    title: "Other Countries",
    paragraphs: [
      "Klosanow is hosted in Nigeria. If you use the Service from any other regions with laws governing data collection, protection and use that may differ from the Nigeria law, please note that your personal information will be transferred outside of those jurisdictions to the Federal Republic of Nigeria. By using the Service, you expressly consent to this, and to the use and storage of personal information in accordance with this Privacy Policy.",
    ],
  },
  {
    title: "Privacy Policy Changes",
    paragraphs: [
      "Klosanow may, in its sole discretion, modify or revise this Privacy Policy from time to time. We may attempt to notify you when major changes are made to this Privacy Policy, but you should periodically review the most up-to-date version. Your continued use of the Service following the posting of any changes to this Privacy Policy constitutes acceptance of those changes.",
    ],
  },
  {
    title: "DISCLAIMER",
    paragraphs: [
      "By this Policy We do not represent or warrant the condition or functionality of Our platform(s), its suitability for use, nor guarantee that Our service will be free from interruption or any error. No liability or responsibility shall lie for risks associated with the use of Our Platform, including but not limited to any risk to your computer, software or data being damaged by any virus, software, or any other file that might be transmitted or activated via Our Platform or your access to it. Neither do We guarantee the reliability of information contained on Our Platform—particularly those shared by other users.",
    ],
  },
  {
    title: "Contact Us",
    paragraphs: [
      `If You have any questions about this Privacy Notice, please contact Us at <a href='mailto:team@klosanow.com' style="text-decoration: underline;">team@klosanow.com</a>`,
    ],
  },
];

// All terms sections with titles and corresponding paragraphs
const termsSection: TermsSection[] = [
  {
    title: "Terms of Use",
    paragraphs: [
      `Welcome to Klosanow, an edtech web application that empowers teachers to create pre recorded video lessons for learners to watch on the platform. These terms and conditions, privacy policy including any other guidelines and future modifications constitute a legally binding agreement made between you, whether personally or on behalf of an entity (you), and Klosanow, concerning your access to and use of the Services. You agree that by accessing our Services (Website and Web App), you have read, understood, and agreed to be bound by all of these terms outlined and our privacy policy. IF YOU NOT AGREE WITH ALL OF THESE TERMS AND PRIVACY POLICY, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY`,
    ],
  },
  {
    title: "Minimum Age",
    paragraphs: [
      `You must be at least 13 years old before you can use this service. If you are below this age, your parent or guardian must review this document and grant their permission before using the service.`,
    ],
  },
  {
    title: "Account Creation",
    paragraphs: [
      `To use the Service, you must set up an account with Klosanow by providing your contact details. You confirm, recognize, and consent to the following when creating your account on Klosanow:`,
      `You are required to give Klosanow correct, accurate and complete information when creating your account, and you agree to keep your account information up to date. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account or password. You agree not to share your account or Login Credentials with any other person or entity. You also agree not to let any other person or entity access or use your account. When creating or using your account, you may not select or use the name of another person with the intent to impersonate that person. You will not provide any false information or create an account for anyone other than yourself. You may not transfer your account to anyone without the express prior written consent from Klosanow.`,
      `In the event of an inappropriate use of your account, we may take necessary action including disabling or suspending your account and, if we do, you agree not to create another account without our permission.`,
    ],
  },
  {
    title: "Licence",
    paragraphs: [
      `You retain the rights to any content that you post on or through our Service, and you control who can view your content and how it is shared through with other users.`,
      `In the course of using our Service, you may create, upload, or post content, including videos, photos, audio, drawings, graphics, text, data, and other information (collectively, the "User Content"). When you post User Content to our Service, you grant Klosanow, a sub-licensable, royalty-free, fully-paid, worldwide license to host, use, distribute, reproduce, modify, publish, transmit, prepare derivative works of, publicly perform and display your User Content (consistent with your privacy settings), including without limitation for promoting and redistributing part or all of our Service (and derivative works thereof) in any media formats and through any media channels. Because your User Content may be viewed or accessed by other Klosanow users, you also hereby grant each user of the Service a non-exclusive license to access your User Content through the Service, and to view such User Content solely for personal, non-commercial purpose.`,
      `You represent and warrant, and can demonstrate to Company’s full satisfaction upon request that you (i) own or otherwise control all rights to all content in your User Content, or that the content in your User Content is in the public domain, (ii) you have full authority to act on behalf of any and all owners of any right, title or interest in and to any content in your User Content to use such content as contemplated by these Terms and to grant the license rights set forth above, (iii) you have the permission to use the name and likeness of each identifiable individual person and to use such individual’s identifying or personal information as contemplated by these Terms; and (iv) you are authorized to grant all of the aforementioned rights to the User Content to the Company and all users of the Service.`,
      `You represent and warrant that the use of such User Content and use by users of the Site and Service as contemplated by this Agreement will not infringe or violate the rights of any third party, including without limitation any privacy rights, publicity rights, copyrights, contract rights, or any other intellectual property or proprietary rights.`,
      `The above licenses granted by you in User Content you post to the Service terminate within a commercially reasonable time after you delete your User Content from the Service. When you remove or delete User Content from the Service, you understand and agree, however, that Klosanow may retain, but not display, distribute, or perform, server copies of your User Content that have been removed or deleted.`,
    ],
  },
  {
    title: "Content Creation and User Conduct",
    paragraphs: [
      `You will only use the Service as permitted by law.`,
      `You will not post unauthorized commercial communications (such as spam or advertisements) on or through the Service.`,
      `You will not collect user’s content or information, or otherwise access the Service, using automated means (such as harvesting bots, robots, spiders, or scrapers) without our prior permission.`,
      `You will not engage in unlawful multi-level marketing, such as a pyramid scheme, on the Service.`,
      `You will not upload viruses or other malicious code, files or programs.`,
      `You will not share your account or Login Credentials with any other person or entity.`,
      `You will keep your Login Credentials confidential and agree not to let any other person or entity access or use your account.`,
      `You agree to notify us immediately of any unauthorized use of your account or any other breach of security.`,
      `You will not collect, solicit or otherwise obtain login information or access an account belonging to someone else.`,
      `You will not collect, use or disclose data, including personal information, about other users without their consent or for unlawful purposes or in violation of applicable laws or regulations.`,
      `You will not post, share or otherwise make available to the community content that is protected by copyright or applicable intellectual property laws and whose dissemination has been prohibited by its legitimate proprietor.`,
      `You will not bully, intimidate, or harass any user or use the Service in any manner that is threatening, abusive, violent, or harmful to any person or entity, or invasive of another’s privacy.`,
      `You will not post content that: is hate speech, discriminating, threatening, or pornographic or sexually explicit, incites violence, or contains graphic or gratuitous violence, or political propaganda.`,
      `You will not use the Service to do anything unlawful, deceptive, misleading, illegal, unethical, malicious, or discriminatory.`,
      `You will not do anything that could disable, overburden, or impair the proper working or appearance of the Service or prevent other users from using the Service, such as a denial of service attack or interference with page rendering or other Service functionality.`,
      `You will not use the Service in any commercially unreasonable manner or in any manner that would disparage Klosanow.`,
      `You will not impersonate a Klosanow employee, or any other person, or falsely state or otherwise misrepresent your affiliation with any person or entity.`,
      `(i) decipher, decompile, disassemble, reverse engineer or otherwise attempt to derive any source code or underlying ideas or algorithms of any part of the Service, except to the limited extent applicable laws specifically prohibit such restriction, (ii) modify, translate, or otherwise create derivative works of any part of the Service, or (iii) copy, rent, lease, distribute, or otherwise transfer any of the rights that you receive hereunder. You shall abide by all applicable local, state, national and international laws and regulations.`,
      `We do not guarantee that any Content or User Content will be made available on or through the Service. We may not monitor or control the Content posted via the Service and, we cannot take responsibility for such Content. However, Company reserves the right to remove, edit or modify any Content in its sole discretion, including without limitation any User Content, from the Site or Service at any time, without notice, or for any reason, and to remove or block any User Content from the Service.`,
      `You shall be solely responsible for your activity in connection with the Service and the consequences of submitting and publishing your User Content on the Service. You affirm, represent, and warrant that you own or have the necessary licenses, rights, consents, and permissions to publish User Content you submit; and you license to Company all patent, trademark, trade secret, copyright or other proprietary rights in and to such User Content for publication on the Service pursuant to these Terms. You can be held personally liable and legally responsible if your User Content violates the law, is defamatory, obscene, or libelous, violates an obligation of confidentiality, or violates the rights of others.`,
    ],
  },
  {
    title: "Third Party Websites",
    paragraphs: [
      `The Service may permit you to link to other websites or resources on the Internet, and other websites or resources may contain links to the Site. When you access third party websites, you do so at your own risk. These other websites are not under Company’s control, and you acknowledge that Company is not responsible or liable for the content, functions, accuracy, legality, appropriateness or any other aspect of such websites or resources. The inclusion of any such link does not imply endorsement by Company or any association with its operators. You further acknowledge and agree that Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such Content, goods or services available on or through any such website or resource.`,
    ],
  },
  {
    title: "Modification of Terms",
    paragraphs: [
      `As we work to improve our Service and develop new features that will make Klosanow better, we may need to update these Terms from time to time to accurately reflect our Service and practices. We will attempt to notify you when major changes are made to these Terms. Your continued use of our Service following the posting of any changes to these Terms constitutes your acceptance of those changes.`,
    ],
  },
  {
    title: "Indemnity",
    paragraphs: [
      `You will indemnify, defend, and hold the Company, its parent companies, partners, subsidiaries, affiliates, officers, and employees harmless from and against any and all claims, damages, losses, costs, liabilities, and expenses (including reasonable attorneys’ fees) arising out of or relating to (i) your access to or use of the Service, (ii) your violation of these Terms, or (iii) your infringement of any third party rights.`,
    ],
  },
  {
    title: "Disclaimer of Warranties",
    paragraphs: [
      `THE SERVICE (AND ANY ASSOCIATED CONTENT OR SOFTWARE) IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. THE COMPANY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. THE COMPANY DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE FROM HARMFUL COMPONENTS.`,
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      `IN NO EVENT WILL KLOSANOW OR ITS AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. KLOSANOW’S AGGREGATE LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICE IS LIMITED TO THE AMOUNT YOU PAID FOR THE SERVICE.`,
    ],
  },
  {
    title: "Applicable Law",
    paragraphs: [
      `These Terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of laws principles.`,
    ],
  },
  {
    title: "Contact Us",
    paragraphs: [
      `If you have any questions about these Terms, please contact us at team@klosanow.com`,
    ],
  },
];

export {
  Links,
  MobileLinks,
  ImgPaths,
  navFooter,
  authFooter,
  footerSocialLinks,
  features,
  aboutSlide,
  cultureTalks,
  faqItems,
  sections,
  termsSection,
};
