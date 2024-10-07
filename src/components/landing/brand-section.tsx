import React from 'react'
import Marquee from 'react-fast-marquee';
import Image from "next/image";


const Brand = () => {
  return (
    <section className="w-full h-full bg-white relative z-[9] px-8 py-8">
      <Marquee
        gradient={false}
        speed={50} // Kecepatan bergerak
        pauseOnHover={true}
      >
        <div className=" w-[200vh] grid grid-cols-7 items-center">
          <Image
            src="/images/league/laliga24.png"
            alt="alt"
            width={200}
            height={200}
            className="w-[150px] filter grayscale hover:grayscale-0 transition-all"
          />
          <Image
            src="/images/league/bundesliga24.jpg"
            alt="alt"
            width={200}
            height={200}
            className="w-[150px] filter grayscale hover:grayscale-0 transition-all"
          />
          <Image
            src="/images/league/premierLeague2024.png"
            alt="alt"
            width={200}
            height={200}
            className="w-[130px] filter grayscale hover:grayscale-0 transition-all"
          />
          <Image
            src="/images/league/ucl2024.png"
            alt="alt"
            width={200}
            height={200}
            className="w-[150px] filter grayscale hover:grayscale-0 transition-all"
          />
          <Image
            src="/images/league/uecl.png"
            alt="alt"
            width={200}
            height={200}
            className="w-[150px] filter grayscale hover:grayscale-0 transition-all"
          />
          <Image
            src="/images/league/uel2024.png"
            alt="alt"
            width={200}
            height={200}
            className="w-[150px] filter grayscale hover:grayscale-0 transition-all"
          />
          <Image
            src="/images/league/uero2024.png"
            alt="alt"
            width={200}
            height={200}
            className="w-[150px] filter grayscale hover:grayscale-0 transition-all"
          />
        </div>
      </Marquee>
    </section>
  );
};




export default Brand