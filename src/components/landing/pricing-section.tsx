'use client'

import { PricingData } from "@/data/pricing";
import { Switch } from "../ui/switch";
import {
  CardPricingProps,
  ListPricingProps,
} from "@/interface/props.interface";
import { Button } from "../ui/button";
import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import React from "react";

const PricingPage = () => {

  const [toggle, setToggle] = React.useState<any>(false)
  return (
    <section className="flex flex-col gap-6 w-full h-full bg-white relative z-[9] py-14 px-14">
      <div className="flex flex-col gap-2">
        <p className="text-md text-slate-400 uppercase font-bold text-center md:text-start">
          about
        </p>
        <h2 className="text-6xl w-1/2 font-semibold  capitalize">{`we've got plan that's perfect for you`}</h2>
      </div>

      <ToggleSwitch onchange={(e: any) => setToggle(!toggle)} />
      

      <div className="grid grid-cols-3 gap-6 mt-24">
        {PricingData.map((item, index) => (
          <CardPricing
            typeCard={item.typeCard}
            title={item.title}
            price={toggle == true ? item.price *12 : item.price}
            pricingTypeTime={toggle === true ? "year" : item.pricingTypeTime}
            decs={item.decs}
            list={item.list}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

const ToggleSwitch = ({onchange}:any) => {
  return (
    <div className="flex gap-8 items-center mt-6">
      <span className="px-4 py-2 capitalize border-2 rounded-sm bg-black text-white border-black text-xl">
        month
      </span>
      <Switch className="scale-125" onClick={onchange}/>
      <span className="px-4 py-2 capitalize border-2 rounded-sm  border-black text-xl">
        years
      </span>
    </div>
  );
};

export default PricingPage;

const CardPricing = ({
  typeCard,
  title,
  price,
  pricingTypeTime = "month",
  decs,
  list,
}: CardPricingProps) => {
  return (
    <div
      className={`w-full h-[800px] rounded-xl ${
        typeCard == "normal" ? "border-2" : "bg-black/90 text-bg2 border-none"
      } border-2 p-8 flex flex-col gap-5`}
    >
      <h4 className="text-xl font-bold capitalize">{title} plan</h4>
      <div className="flex items-center gap-2">
        <h3
          className={`text-[2.75rem] font-bold ${
            typeCard == "normal" ? "" : "text-white"
          }`}
        >
          
          Rp.{price.toLocaleString()}.000
        </h3>
        <div
          className={`flex flex-col mt-4 gap-3 capitalize font-semibold text-sm ${
            typeCard == "normal" ? "" : "text-slate-300"
          }`}
        >
          <span>/ {pricingTypeTime}</span>
        </div>
      </div>

      <h6
        className={`font-semibold mt-3 ${
          typeCard == "normal" ? "" : "text-slate-300"
        }`}
      >
        {decs}
      </h6>
      <div className="flex flex-col gap-2">
        <Button
          variant={"default"}
          className={`h-12 capitalize ${
            typeCard === "normal"
              ? "text-white"
              : "text-black bg-bg2 hover:bg-bg2/90"
          } font-semibold`}
        >
          get started
        </Button>
        <Button
          variant={"outline"}
          className={`h-12 capitalize ${
            typeCard === "normal" ? "text-black" : "text-black"
          } font-semibold`}
        >
          check to order
        </Button>

        <hr className={`mt-5 ${typeCard == "normal" ? "" : "border-slate-600"}`} />

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 mb-4 mt-2">
            <h5
              className={`font-bold uppercase text-sm ${
                typeCard == "normal" ? "" : "text-white"
              }`}
            >
              features
            </h5>
            <p
              className={`text-sm ${
                typeCard == "normal" ? "" : "text-slate-300"
              }`}
            >
              Lorem ipsum dolor, sit amet subf fdjebkas
            </p>
          </div>

          {list.map((item, index) => (
            <ListPricing
              key={index}
              title={item.title}
              type={item.type}
              className={
                typeCard === "normal" ? "text-black" : "text-slate-300"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ListPricing = ({ title, type = "access", className, classNameIcons = "text-black" }: ListPricingProps) => {
  return (
      <div className={`flex gap-4 items-center ${className}`}>
      <div
        className={`w-7 h-7 flex justify-center items-center rounded-full ${
          type == "access" ? "bg-bg2" : "bg-red-500/80"
        }`}
      >
              {type == "access" ? <FaCheck size={12} className={classNameIcons} /> : <FaX size={12} className={classNameIcons} />}
      </div>
      <p>{title}</p>
    </div>
  );
};
