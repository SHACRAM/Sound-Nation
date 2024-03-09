import React from "react";

export const HomePage = () => {
  return (
    <div>
      <div className="bg-black m-10 p-10 rounded-lg flex flex-col items-center">
        <img
          className="w-[100%] rounded-lg"
          src="../public/images/photoFestival.jpg"
          alt="Photo du festival Sound Nation 2023"
        />
        <p className="text-white mt-5 text-[1.2rem] bg-[#023E33] p-3 rounded-lg">
          Après une édition 2023 courronnée de succés, Sound Nation revient
          cette année, pour vous faire vibrer au rythme des sound system
        </p>
      </div>
      <div className="bg-black m-10 p-10 rounded-lg flex flex-col items-center mb-[5em]">
        <h2 className="text-white mt-5 text-[1.8rem] underline">
          L'année 2023 c'était :
        </h2>
        <p className="text-white text-[1.5rem] flex flex-col items-center mt-8">
          <strong className="text-[#71A984] text-[3rem]">30</strong>
          <br /> artistes
        </p>
        <p className="text-white text-[1.5rem] flex flex-col items-center mt-8">
          <strong className="text-[#71A984] text-[3rem]">50 </strong>
          <br />
          heures de live
        </p>
        <p className="text-white text-[1.5rem] flex flex-col items-center mt-8">
          <strong className="text-[#71A984] text-[3rem]">95 000</strong>
          <br /> spectateurs
        </p>
      </div>
    </div>
  );
};
