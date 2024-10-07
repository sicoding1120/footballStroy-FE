import { FeatureCardProps } from "@/interface/props.interface";
import React from "react";
import { FaTableList } from "react-icons/fa6";
import { IoIosVideocam } from "react-icons/io";
import { TbPremiumRights } from "react-icons/tb";
import { MdOndemandVideo } from "react-icons/md";
import { FaCloudDownloadAlt, FaUserCircle } from "react-icons/fa";

const Features = () => {
  const cardDataFeature = [
    {
      logo: (
        <IoIosVideocam
          size={36}
          className="relative  group-hover:rotate-[-45deg] transition-all"
        />
      ),
      title: "Watch videos live",
      decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatum quod doloribus sapiente",
    },
    {
      logo: (
        <FaTableList
          size={36}
          className="relative  group-hover:rotate-[-45deg] transition-all"
        />
      ),
      title: "classement table",
      decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatum quod doloribus sapiente",
    },

    {
      logo: (
        <TbPremiumRights
          size={36}
          className="relative  group-hover:rotate-[-45deg] transition-all"
        />
      ),
      title: "Premium mode",
      decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatum quod doloribus sapiente",
    },

    {
      logo: (
        <MdOndemandVideo
          size={36}
          className="relative  group-hover:rotate-[-45deg] transition-all"
        />
      ),
      title: "Watch highlight viceo",
      decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatum quod doloribus sapiente",
    },

    {
      logo: (
        <FaCloudDownloadAlt
          size={36}
          className="relative  group-hover:rotate-[-45deg] transition-all"
        />
      ),
      title: "Download videos",
      decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatum quod doloribus sapiente",
    },

    {
      logo: (
        <FaUserCircle
          size={36}
          className="relative  group-hover:rotate-[-45deg] transition-all"
        />
      ),
      title: "Watch videos live",
      decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatum quod doloribus sapiente",
    },
  ];
  return (
    <section className="w-full h-full relative z-[10] bg-white px-8 flex flex-col gap-24 py-24">
      <div className="w-full flex justify-center items-center flex-col gap-2">
        <span className="font-semibold text-slate-400 uppercase">features</span>
        <h2 className="text-5xl font-semibold text-center">Our Features </h2>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {cardDataFeature.map((item, index) => (
          <CardFeature
            logos={item.logo}
            title={item.title}
            decs={item.decs}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

const CardFeature = ({ logos, title, decs }: FeatureCardProps) => {
  return (
    <div className="w-full h-[300px] 0 flex flex-col gap-6 md:items-start items-center justify-center py-4  px-4 rounded-xl hover:scale-105 transition-all group">
      <div className="w-16 h-16 bg-bg2 rounded-xl flex justify-center items-center group-hover:rotate-45 transition-all">
        {logos}
      </div>
      <h4 className="text-2xl font-semibold">{title}</h4>
      <p className="text-center md:text-start">{decs}</p>
    </div>
  );
};

export default Features;
