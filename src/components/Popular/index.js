import Image from "next/image";
import React from "react";
import {
  Author1,
  Author2,
  Author3,
  Author4,
  Cover1,
  Cover2,
  Cover3,
  Cover4,
  StarOFF,
  StarON,
} from "../../../public";

const Popular = () => {
  return (
    <section className="popular">
      <div className="flex justify-between items-center p-10">
        <h2>Popular Now</h2>
        <a href="#">View All</a>
      </div>
      <div className="pl-10 pr-10 grid grid-cols-4 gap-4">
        {/* col */}
        <div className="cover flex justify-center items-center rounded-xl">
          <div className="p-10">
            <Image src={Cover1} alt="cover1" />
            <h3 className="mt-3">Selena</h3>
            <ul className="flex">
              <li>
                <Image src={StarON} alt="starON" />
              </li>
              <li>
                <Image src={StarON} alt="starON" />
              </li>
              <li>
                <Image src={StarON} alt="starON" />
              </li>
              <li>
                <Image src={StarON} alt="starON" />
              </li>
              <li>
                <Image src={StarOFF} alt="starOFF" />
              </li>
            </ul>
            <h4 className="mt-5 mb-5">Tere Liye</h4>
            <div className="flex items-center">
              <Image src={Author1} alt="author1" />
              <p className="ml-2">
                <span className="font-semibold">Andre Syak</span> - 1 week ago
              </p>
            </div>
          </div>
        </div>
        {/* col */}
        {/* col */}
        <div className="cover flex justify-center items-center rounded-xl">
          <div className="p-10">
            <Image src={Cover2} alt="cover2" />
            <h3 className="mt-3">How To Master Your Habits</h3>
            <ul className="flex">
              <li>
                <Image src={StarON} alt="starON" />
              </li>
              <li>
                <Image src={StarON} alt="starON" />
              </li>
              <li>
                <Image src={StarON} alt="starON" />
              </li>
              <li>
                <Image src={StarON} alt="starON" />
              </li>
              <li>
                <Image src={StarOFF} alt="starOFF" />
              </li>
            </ul>
            <h4 className="mt-5 mb-5">Felix Y Siauw</h4>
            <div className="flex items-center">
              <Image src={Author2} alt="author2" />
              <p className="ml-2">
                <span className="font-semibold">John Lucas </span> - 5 day ago
              </p>
            </div>
          </div>
        </div>
        {/* col */}
        {/* col */}
        <div className="cover flex justify-center items-center rounded-xl">
          <div className="p-10">
            <Image src={Cover3} alt="cover3" />
            <h3 className="mt-3">Bintang</h3>
            <ul className="flex">
              <li>
                <Image src={StarON} alt="starON" />
              </li>
              <li>
                <Image src={StarON} alt="starON" />
              </li>
              <li>
                <Image src={StarON} alt="starON" />
              </li>
              <li>
                <Image src={StarON} alt="starON" />
              </li>
              <li>
                <Image src={StarOFF} alt="starOFF" />
              </li>
            </ul>
            <h4 className="mt-5 mb-5">Tere Liye</h4>
            <div className="flex items-center">
              <Image src={Author3} alt="author3" />
              <p className="ml-2">
                <span className="font-semibold">Ade Barkah</span> - 1 month ago
              </p>
            </div>
          </div>
        </div>
        {/* col */}
        {/* col */}
        <div className="cover flex justify-center items-center rounded-xl">
          <div className="p-10">
            <Image src={Cover4} alt="cover4" />
            <h3 className="mt-3">Start With Why</h3>
            <ul className="flex">
              <li>
                <Image src={StarON} alt="starON" />
              </li>
              <li>
                <Image src={StarON} alt="starON" />
              </li>
              <li>
                <Image src={StarON} alt="starON" />
              </li>
              <li>
                <Image src={StarON} alt="starON" />
              </li>
              <li>
                <Image src={StarOFF} alt="starOFF" />
              </li>
            </ul>
            <h4 className="mt-5 mb-5">Simon Sinek</h4>
            <div className="flex items-center">
              <Image src={Author4} alt="author4" />
              <p className="ml-2">
                <span className="font-semibold">Andre Syak</span> - 2 week ago
              </p>
            </div>
          </div>
        </div>
        {/* col */}
      </div>
    </section>
  );
};

export default Popular;
