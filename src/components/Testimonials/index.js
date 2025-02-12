import Image from "next/image";
import React from "react";
import { Client1, Client2, Client3, Kutip } from "../../../public";

const Testimonials = () => {
  return (
    <div className="p-10 mt-20">
      <div className="grid grid-cols-3 gap-3">
        {/* col */}
        <div className="testimoni text-center border-2">
          <div>
            <div className="flex justify-center items-center text-center">
              <Image
                src={Client1}
                alt="client1"
                className="gambar ml-32 mr-20"
              />
              <Image src={Kutip} alt="kutip" className="gambar" />
            </div>
            <h5>Matcha Depanmu</h5>
            <p>
              More love for this website, was helping me about fiction books.
            </p>
          </div>
        </div>
        {/* col */}
        {/* col */}
        <div className="testimoni text-center border-2">
          <div>
            <div className="flex justify-center items-center text-center">
              <Image
                src={Client3}
                alt="client3"
                className="gambar ml-32 mr-20"
              />
              <Image src={Kutip} alt="kutip" className="gambar" />
            </div>
            <h5>Rose Blackcurrant</h5>
            <p>
              Im very happy and this website was help me about books
              recommendation now.
            </p>
          </div>
        </div>
        {/* col */}
        {/* col */}
        <div className="testimoni text-center border-2">
          <div>
            <div className="flex justify-center items-center text-center">
              <Image
                src={Client2}
                alt="client2"
                className="gambar ml-32 mr-20"
              />
              <Image src={Kutip} alt="kutip" className="gambar" />
            </div>
            <h5>Sugeng Tumbler</h5>
            <p>
              Thank you bro was help me to find book habbits for my job now.
            </p>
          </div>
        </div>
        {/* col */}
      </div>
    </div>
  );
};

export default Testimonials;
