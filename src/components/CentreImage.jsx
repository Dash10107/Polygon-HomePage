import { Image } from 'antd';
import React from 'react';

const CentreImage = () => {
  return (
    <div className="bg-[#f9f9f9] lg:bg-[#f9f9f9] relative top-20 flex flex-col lg:flex-row items-center lg:items-center lg:justify-center lg:top-20 mt-5 lg:mt-0">
      <div className="text flex flex-col items-center lg:items-start  lg:text-left justify-center  mb-5 lg:mb-0 lg:w-[30%] w-[80%] lg:tracking-widest">
        <h1 className=" antialiased font-bold text-3xl lg:text-5xl mb-8 lg:text-right leading-10">
          The right investment to grow your Business
        </h1>
        <p className=" antialiased leading-10 text-md lg:text-xl lg:text-right lg:w-[90%] ">
          A Data-driven and result oriented marketing agency,
          We are your Growth Partners!
        </p>
      </div>
      <div className="image flex justify-center lg:justify-start w-full lg:w-auto">
        <aside className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <Image
            src={'https://cdn-eoimn.nitrocdn.com/pJaHCAtiamEsJjRFSNeDAczyRWgQTsaP/assets/static/optimized/rev-208622f/wp-content/uploads/2021/12/iPolygon_Home_Banner-768x768.png'}
            width={'100%'}
            height={'auto'}
            alt="plur centre"
            preview={false}
            className="w-full h-auto"
          />
        </aside>
        </div>
    </div>
  );
};

export default CentreImage;
