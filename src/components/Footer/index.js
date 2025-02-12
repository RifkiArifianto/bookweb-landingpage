import Image from "next/image";
import React from "react";
import { FBImg, IGImg, LogoImg } from "../../../public";

const Footer = () => {
  return (
    <section className="footer">
      <div className="p-10 mt-12">
        <div className="flex justify-between mt-5 pl-10 pr-10">
          <div>
            <Image src={LogoImg} alt="logoImg" />
            <p className="mt-5">Best website about book recommendations</p>
          </div>
          <div className="flex menu">
            <ul className="mr-52">
              <li>
                <p className="mb-5">
                  <a href="#">Navigation</a>
                </p>
              </li>
              <li className="mb-3">
                <a href="#">Home</a>
              </li>
              <li className="mb-3">
                <a href="#">Bestseller</a>
              </li>
              <li className="mb-3">
                <a href="#">Category</a>
              </li>
              <li className="mb-3">
                <a href="#">Contact</a>
              </li>
            </ul>
            <ul className="mr-20">
              <li>
                <p className="mb-5">
                  <a href="#">Company</a>
                </p>
              </li>
              <li className="mb-3">
                <a href="#">admin@readbook.web</a>
              </li>
              <li className="mb-3">
                <a href="#">Jl Kaliurang Km. 5</a>
              </li>
              <li className="mb-3">
                <a href="#">Yogyakarta, Indonesia</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5 pl-10 pr-10">
          <p>@ 2025 Read Book Web</p>
          <div className="flex">
            <Image src={IGImg} alt="IGImg" className="mr-5" />
            <Image src={FBImg} alt="FBImg" className="mr-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
