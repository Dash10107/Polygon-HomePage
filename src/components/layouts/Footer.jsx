import { ArrowRightOutlined, FacebookFilled, InstagramFilled, LinkedinFilled, RightOutlined } from '@ant-design/icons'
import Link from 'antd/es/typography/Link'
import React, { useState } from 'react'

const Footer = () => {
  const [hovered, setHovered] = useState(null);
  const services = [
{title: "Lead Generation",link:"https://ipolygon.co/data-driven-marketing/"},
{title: "Data Visualisation & Analytics",link:"https://ipolygon.co/data-driven-marketing/"},
{title: "Social Media Management & Marketing",link:"https://ipolygon.co/data-driven-marketing/"},
{title: "Search Engine Optimisation (SEO)",link:"https://ipolygon.co/data-driven-marketing/"},
{title: "Search Engine Marketing (SEM)",link:"https://ipolygon.co/data-driven-marketing/"},
{title: "Growth Hacking",link:"https://ipolygon.co/data-driven-marketing/"},
{title: "Branding",link:"https://ipolygon.co/data-centric-designing/"},
{title: "Visual Designing",link:"https://ipolygon.co/data-centric-designing/"},
{title: "UI For Website & Application",link:"https://ipolygon.co/data-centric-designing/"},
{title: "UX For Website & Application",link:"https://ipolygon.co/data-centric-designing/"},
{title: "Website Development",link:"https://ipolygon.co/data-centric-designing/"},
{title: "OTT Platforms",link:"https://ipolygon.co/digital-media-buying-selling/"},
{title: "Influencer Marketing",link:"https://ipolygon.co/data-driven-marketing/"},
{title: "Popular Website & Apps",link:"https://ipolygon.co/digital-media-buying-selling/"},
{title: "Newspaper Advertising",link:"https://ipolygon.co/data-driven-marketing/"},
{title: "Native Advertising",link:"https://ipolygon.co/digital-media-buying-selling/"},
  ]
  return (
    <div className='bg-black w-[100vw] lg:h-[86vh] pb-6'>
    <div className=' pt-[7%] lg:pl-[15%] pl-[4%] text-white flex flex-col lg:flex-row   '>
      <div className=' polygon lg:w-[46%]'>
     <h1 className='font-bold text-2xl lg:text-4xl mb-8  leading-10 underline decoration-[#0034dd] underline-offset-8 '>Polygon Pixels LLP (iPolygon)</h1> 
     <p className='text-md text-wrap lg:w-[27vw]'>iPolygon is a digital marketing agency dedicated to transforming brands and businesses into success stories through effective datacentric designing and marketing approach.</p>

    <p className='font-bold pt-10  '>Office Address:</p>
<p className="pb-1">Enam Sambhav, Wework BKC, C-20, G Block,</p>
<p className="pb-1">Bandra-Kurla Complex, Bandra East, Mumbai -400051</p>
<p className="pb-1"> <strong>Email:</strong>   <a href={"mailto:info@polygonpixels.com"} alt="" className='hover:text-[#0034dd]' >info@polygonpixels.com</a> </p>
<p className="pb-10"><strong>Contact: </strong> <a href={"tel:+918169852929"} alt="" className='hover:text-[#0034dd]' >+918169852929         </a> </p>
<div className='flex lg:pr-[75%] justify-center items-center text-center '>
  <button 
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)} 
  className=' bg-[#0034dd] text-sm ml-[-12%]  h-[6vh] w-[33vw] lg:h-[5vh] lg:w-[8vw] rounded-full transition-transform transform hover:scale-110 hover:shadow-2xl duration-300 ease-in-out cursor-pointer'>Inquire Now &nbsp; { hovered ? <ArrowRightOutlined/> : <RightOutlined/>} </button></div>

<nav className={`hidden md:flex  items-center gap-8 font-semibold  pt-8`} >
        <a href={'#'} style={{ fontWeight:'400' }} className=' text-white text-md leading-10 tracking-wide hover:text-[#0034dd]' >Home        </a>
        <a href={'#'} style={{ fontWeight:'400' }} className=' text-white text-md leading-10 tracking-wide hover:text-[#0034dd]' >About Us    </a>
        <a href={'#'} style={{ fontWeight:'400' }} className=' text-white text-md leading-10 tracking-wide hover:text-[#0034dd]' >Services    </a>
        <a href={'#'} style={{ fontWeight:'400' }} className=' text-white text-md leading-10 tracking-wide hover:text-[#0034dd]' >Case Studies</a>
        <a href={'#'} style={{ fontWeight:'400' }} className=' text-white text-md leading-10 tracking-wide hover:text-[#0034dd]' >Contact Us  </a>
      </nav>
      </div>
      <div className='services pt-10 lg:pt-0 lg:w-[30%] w-[80%]'>
      <h1 className='font-bold text-xl lg:text-2xl mb-10  leading-10 underline decoration-[#0034dd] underline-offset-8  text-center lg:text-right'>Services</h1> 
      {services.map((service)=>(
          <a key={service.title} href={service.link} style={{ fontWeight:'400' }} className=' text-white  tracking-wide hover:text-[#0034dd] block text-center lg:text-right' >{service.title}  </a>
      ))}
      <div className='flex text-3xl lg:pt-2 pt-10 justify-center lg:justify-end gap-8 text-[#0034dd]'>
      <FacebookFilled />
      <InstagramFilled />
      <LinkedinFilled />
      </div>
      </div>

</div>
<div className=' pt-10 text-white text-center text-sm'>©2022 Polygon Pixels LLP. All rights reserved.</div>
<div className='text-white text-center text-sm'>Created with ♥ by iPolygon </div>
</div>
  )
}

export default Footer