/*export { default as Services } from "../components/Templates/Cofee/Home/Services";*/

import dynamic from "next/dynamic";
export const Services = dynamic(() => import("../Home/Services"));
export const Featured = dynamic(() => import("../Home/Featured"));
export const Header = dynamic(() => import("../Home/Header"));
export const HomeBanner = dynamic(() =>
  import("../Home/HomeBanner")
);
export const WebStats = dynamic(() => import("../Home/WebStats"));
export const OtherFeatures = dynamic(() => import("../Home/OtherFeatures"));
export const Apps = dynamic(() => import("./Apps"));
export const Certification = dynamic(() => import("../Home/Certification"));
export const Testimonial = dynamic(() => import("../Home/Testimonial"));
export const Price = dynamic(() => import("../Home/Price"));
export const Blog = dynamic(() => import("../Home/Blog"));
export const Partners = dynamic(() => import("../Home/Partners"));
export const Footer = dynamic(() => import("../Home/Footer"));
export const Testimonials = dynamic(() => import("../Home/Testimonial"));
export const Modal = dynamic(() => import("../Home/AdModal"));
