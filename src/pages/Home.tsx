import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa"; //icons
import { motion } from "framer-motion";

import { SatuSehat, Reasons } from "../assets/dummy.js";
// images
import heroImage from "../assets/images/Hero.png";
import softwareImg from "../assets/images/software.png";
import webImg from "../assets/images/webdeisgn.png";
import uiuxImg from "../assets/images/uiux.png";
import logoImg from "../assets/images/logo-design.png";
import satuSehatImage from "../assets/images/imgHero2.png";
import img1 from "../assets/images/imgHero3.png";
import img2 from "../assets/images/imgHero1.png";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Custom Software",
    description: "Perangkat Lunak Kustom Berbasis Web, Mobile & Desktop",
    icon: softwareImg,
  },
  {
    id: 2,
    title: "Web Company",
    description: "Pembuatan Web Profil Perusahaan & Landing Page",
    icon: webImg,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Desain antarmuka pengguna dan pengalaman pengguna modern",
    icon: uiuxImg,
  },
  {
    id: 4,
    title: "Logo Design",
    description: "Desain Logo & Pembuatan Paket Ikon",
    icon: logoImg,
  },
];

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.div className="bg-gradient-to-r from-green-100 via-purple-100 to-orange-100 py-12 px-4 sm:px-8 md:px-16 lg:px-24 rounded-3xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-[5rem] font-bold text-gray-900 mb-6 leading-tight md:leading-[1.2]">
              Smart Web &<br />
              App Solutions
            </h1>
            <p className="text-gray-700 text-base sm:text-lg md:text-lg mb-6 max-w-xl mx-auto md:mx-0">
              Kami adalah mitra terpercaya dalam membangun sistem aplikasi
              berbasis Web, Desktop, dan Android — cepat, andal, dan sesuai
              kebutuhan bisnis Anda.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-primary hover:bg-secondary duration-200 group text-white font-semibold px-6 py-2 rounded-full shadow-md flex items-center gap-3">
                More
                <span className="bg-white/20 p-2 rounded-full transition-transform duration-300 transform -rotate-45 group-hover:rotate-90 translate-x-4">
                  <FaArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src={heroImage}
              alt="Hero Illustration"
              className="w-64 sm:w-72 md:w-80 lg:w-[36rem]"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="py-12 px-6 md:px-12 mt-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {services.map(({ id, icon, title, description }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
              className="relative bg-white border border-primary rounded-[2.5rem] px-6 pt-8 pb-16 flex flex-col"
            >
              {/* Icon (kanan atas) */}
              <div className="absolute -top-6 right-6 bg-white border border-primary p-4 rounded-3xl shadow-sm">
                <img
                  src={icon}
                  alt={title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-primary mb-4 leading-tight">
                {title.split(" ")[0]} <br />
                {title.split(" ").slice(1).join(" ")}
              </h3>

              {/* Description */}
              <p className="text-black text-sm sm:text-base leading-relaxed">
                {description}
              </p>

              {/* More button */}
              <button className="group absolute bottom-5 left-1/2 -translate-x-1/2 text-primary text-lg font-normal flex items-center gap-2">
                <span className="relative flex">
                  <h5 className="bg-white z-30">More</h5>
                  <span className="absolute left-6 -translate-x-4 opacity-0 group-hover:translate-x-6 group-hover:opacity-100 transition-all duration-300">
                    <FaArrowRight className="inline-block w-4 h-4 ml-1" />
                  </span>
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-10 text-[2rem] font-bold"
      >
        <h1>
          Why <span className="text-primary">Choose</span> Us?
        </h1>
      </motion.div>

      {/* Why Choose Us? */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-primary/10 py-16 px-4 sm:px-8 lg:px-24 mt-10 rounded-3xl"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-2/3 space-y-6"
          >
            {Reasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-primary text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm md:text-base">
                    {item.number}
                  </div>
                  {index < Reasons.length - 1 && (
                    <div className="w-px bg-primary flex-1 mt-1" />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg text-black">
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-base text-black mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden md:block w-full md:w-1/3 flex justify-center"
          >
            <img
              src={img2}
              alt="Why Choose Us"
              className="max-w-xs md:max-w-sm lg:max-w-md"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Satu Sehat Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-6 md:px-16 bg-white mt-10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Terintegrasi Dengan{" "}
              <span className="text-primary">Satu Sehat</span>
            </h2>

            <ul className="space-y-6">
              {SatuSehat.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <FaCheckCircle className="text-primary w-5 h-5 mt-[0.25rem]" />
                  <div>
                    <h4 className="font-semibold text-black text-base md:text-lg mb-1">
                      {point.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 text-justify">
                      {point.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 md:text-left text-center">
              <button className="bg-primary hover:bg-hoverBtn text-white px-6 py-3 rounded-full shadow-lg font-semibold transition text-sm sm:text-base md:text-lg">
                Gabung Sekarang
              </button>
            </div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="hidden md:block flex justify-center md:justify-end"
          >
            <img
              src={satuSehatImage}
              alt="Dashboard Integrasi Satu Sehat"
              className="max-w-full h-auto"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Teks Mobile Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="py-20 px-6 md:px-16 bg-white mt-10"
      >
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="text-left w-full md:w-1/2"
          >
            <h2 className="text-4xl sm:text-[4rem] md:text-[5rem] -mt-[8rem] md:-mt-0 font-extrabold leading-tight text-black mb-4">
              Responsive & Expert <br />
              <span className="text-primary"> Mobile Design</span>
            </h2>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src={img1}
              alt="Hand holding phone"
              className="max-w-full h-auto"
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
