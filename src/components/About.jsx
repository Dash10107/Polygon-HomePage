import { Button, Image } from 'antd'
import React from 'react'

const About = () => {
  return (
<div className="bg-white   flex flex-col lg:flex-row gap-10 items-center lg:items-center lg:justify-center  mt-20 lg:mt-20" style={{marginTop:"15%",marginBottom:"15%"}}>
<div className="text flex flex-col items-center lg:items-start  lg:text-left justify-center  mb-5 lg:mb-0 lg:w-[30%] w-[80%] lg:tracking-widest">
  <h1 className=" font-semibold text-3xl lg:text-5xl mb-8  leading-10">
  About Us
  </h1>
  <p className=" text-md lg:text-xl mb-8  lg:w-[90%] " style={{lineHeight:"200%"}}>
           iPolygon is a digital marketing agency dedicated to
              transforming brands and businesses into success stories
               through effective datacentric designing and marketing 
              approach.
  </p>
  <btn className="bg-[#0034dd]  text-white h-[5vh] w-[8vw] flex justify-center text-center items-center cursor-pointer">Read More</btn>
</div>
<div className="image">
  <aside className="flex justify-center lg:justify-start">
       <Image
          src={'https://cdn-eoimn.nitrocdn.com/pJaHCAtiamEsJjRFSNeDAczyRWgQTsaP/assets/static/optimized/rev-208622f/wp-content/uploads/2021/12/iPolygon_AboutUs_2-2.png'}
           width={500}
           height={370}
           alt="plur centre"
           preview={false}
         />
  </aside>
</div>
</div>
  )
}

export default About