import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineFacebook } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footerContainer bg-[#101727] text-white py-20 px-25 mt-20">
      <div className="footerContent  flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* header and paragraph */}
        <div>
          <h1 className="text-4xl hover:font-extrabold hover:text-blue-500 hover:cursor-pointer">gigitools</h1>
          <p className="text-accent mt-5">
            Premium digital tools for creators,
            <br /> professionals, and businesses. <br /> Work smarter with our
            suite of powerful tools.
          </p>
        </div>
        {/* 3 columns UL*/}
        <div className="flex justify-between gap-10 hover:cursor-pointer">
          <ul>
            <li className="font-bold mb-2 text-lg">Products</li>
            <li className=" text-accent text-sm hover:text-blue-500 hover:underline ">
              Features
            </li>
            <li className=" text-accent text-sm hover:text-blue-500 hover:underline ">
              Pricing
            </li>
            <li className=" text-accent text-sm hover:text-blue-500 hover:underline ">
              Templates
            </li>
            <li className=" text-accent text-sm hover:text-blue-500 hover:underline ">
              Integrations
            </li>
          </ul>
          <ul>
            <li className="font-bold mb-2 text-lg">Company</li>
            <li className=" text-accent text-sm hover:text-blue-500 hover:underline ">
              About
            </li>
            <li className=" text-accent text-sm hover:text-blue-500 hover:underline ">
              Blog
            </li>
            <li className=" text-accent text-sm hover:text-blue-500 hover:underline ">
              Careers
            </li>
            <li className=" text-accent text-sm hover:text-blue-500 hover:underline ">
              Press
            </li>
          </ul>
          <ul>
            <li className="font-bold mb-2 text-lg">Resources</li>
            <li className=" text-accent text-sm hover:text-blue-500 hover:underline ">
              Documentation
            </li>
            <li className=" text-accent text-sm hover:text-blue-500 hover:underline ">
              Help Center
            </li>
            <li className=" text-accent text-sm hover:text-blue-500 hover:underline ">
              Community
            </li>
            <li className=" text-accent text-sm hover:text-blue-500 hover:underline ">
              Contact
            </li>
          </ul>
        </div>
        {/* social media links */}
        <div>
          <p>Follow us on social media!</p>
          <div className="socialIcons flex gap-4 mt-2 text-2xl">
            <a href="#">
              <IoLogoInstagram />
            </a>
            <a href="#">
              <MdOutlineFacebook />
            </a>
            <a href="#">
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="divider border-t border-gray-600 mt-10"></div>
      <div>
        <footer className="footer sm:footer-horizontal footer-center bg-base-900 text-white p-4">
          <aside className="flex justify-between items-center w-full ">
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              DiGiTools Ltd.
            </p>
            <div className="flex gap-5 text-accent ">
              <p className="hover:text-blue-500 hover:underline hover:cursor-pointer">Privacy Policy </p>
              <p className="hover:text-blue-500 hover:underline hover:cursor-pointer"> Terms of Service</p>
              <p className="hover:text-blue-500 hover:underline hover:cursor-pointer"> Cookies</p>
            </div>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
