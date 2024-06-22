import { ArrowRightOutlined, DesktopOutlined, FireOutlined, RightOutlined, RiseOutlined } from '@ant-design/icons';
import { Anchor, Tabs } from 'antd'
import React, { useState } from 'react'

const CentralTabs = () => {

  const [hovered, setHovered] = useState(null);

      const [fade, setFade] = useState('fade-in');

      const onChange = (key) => {
        setFade('fade-out'); // Trigger fade-out animation
        setTimeout(() => {
          setTabKey(key);
          setFade('fade-in'); // Trigger fade-in animation after content change
        }, 300); // Duration should match the fade-out animation duration
      };
    
      const items = [
        {
          key: '1',
          label: <div className=' text-sm lg:text-2xl'><RiseOutlined /> &nbsp;&nbsp;&nbsp;&nbsp;Data Driven Marketing</div>,
          children:
          <div className=" flex flex-col lg:flex-row gap-10  items-center lg:items-center lg:justify-center h-[60vh] " style={{marginTop:"-2%",marginBottom:"2%"}}>
          <div className="text flex flex-col items-center lg:items-start  lg:text-left justify-center  mb-5 lg:mb-0 lg:w-[30%] w-[80%] lg:tracking-widest ">
            <h1 className=" font-semibold text-2xl lg:text-2xl mb-8 mt-4 lg:mt-0  leading-10">
            Data Driven Marketing
            </h1>
            <ul className=" text-sm lg:text-md mb-8 list-disc" style={{lineHeight:"200%"}}>
                <li>Lead Generation</li>
                <li>Data Visualisation & Analytics</li>
                <li>Social Media Management & Marketing</li>
                <li>Search Engine Optimisation (SEO) & Search Engine Marketing (SEM)</li>
                <li>Growth Hacking</li>
            </ul>
            <button                        onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)} 
                      className="bg-[#0034dd]  text-white text-sm  flex justify-center text-center items-center cursor-pointer lg:h-[5vh] lg:w-[8vw] h-[6vh] w-[40%] transition-transform transform hover:scale-110 hover:shadow-2xl duration-300 ease-in-out cursor-pointer ">Get Started &nbsp; { hovered ? <ArrowRightOutlined/> : <RightOutlined/>}</button>
          </div>
          <div className="image">
            <aside className="flex justify-center lg:justify-start">
                 <img
                    src={'https://cdn-eoimn.nitrocdn.com/pJaHCAtiamEsJjRFSNeDAczyRWgQTsaP/assets/static/optimized/rev-208622f/wp-content/uploads/2021/12/iPolygon_DataDrivenMarketing-1-1024x678.png'}
                     width={600}
                     height={470}
                     alt="plur centre"
                     
                   />
            </aside>
          </div>
          </div>,
        },
        {
          key: '2',
          label: <div className=' text-sm lg:text-2xl'><FireOutlined /> &nbsp;&nbsp;&nbsp;Data Centric Designing</div>,
          children:          
          <div className="   flex flex-col lg:flex-row gap-[20%] items-center lg:items-center lg:justify-center h-[60vh] " style={{marginTop:"-2%",marginBottom:"2%",gap:"10vw"}}>
          <div className="text flex flex-col items-center lg:items-start  lg:text-left justify-center  mb-5 lg:mb-0 lg:w-[30%] w-[80%] lg:tracking-widest">
            <h1 className=" font-semibold text-xl lg:text-2xl mb-8  leading-10">
            Data Centric Marketing
            </h1>
            <ul className=" text-sm lg:text-md mb-8 list-disc" style={{lineHeight:"200%"}}>
            <li>Branding</li>
                      <li>Visual Designing</li>
                      <li>Popular Website & Apps</li>
                      <li>UI for Website and App</li>
                      <li>UX for Website and App</li>
            </ul>
            <button                       onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}  className="bg-[#0034dd] text-sm text-white  flex justify-center text-center items-center cursor-pointer lg:h-[5vh] lg:w-[8vw] h-[6vh] w-[60%] transition-transform transform hover:scale-110 hover:shadow-2xl duration-300 ease-in-out cursor-pointer ">Get Started &nbsp; { hovered ? <ArrowRightOutlined/> : <RightOutlined/>} </button>
          </div>
          <div className="image">
            <aside className="flex justify-center lg:justify-start">
                 <img
                    src={'https://cdn-eoimn.nitrocdn.com/pJaHCAtiamEsJjRFSNeDAczyRWgQTsaP/assets/static/optimized/rev-208622f/wp-content/uploads/2021/12/iPolygon_Data-Centric-Designing1-1024x646.png                                              '}
                     width={600}
                     height={470}
                     alt="plur centre"
                     
                   />
            </aside>
          </div>
          </div>,
        },
        {
          key: '3',
          label:  <div className='text-sm lg:text-2xl'> <DesktopOutlined /> &nbsp;&nbsp;&nbsp;&nbsp; Media Buying And Selling </div>,
          children: 
          <div className="    flex flex-col lg:flex-row gap-10 items-center lg:items-center lg:justify-center h-[60vh] " style={{marginTop:"-2%",marginBottom:"2%"}}>
<div className="text flex flex-col items-center lg:items-start  lg:text-left justify-center  mb-5 lg:mb-0  lg:tracking-widest">
  <h1 className=" font-semibold text-xl lg:text-2xl mb-8  leading-10">
  Media Buying and Selling
  </h1>
  <ul className=" text-sm lg:text-md mb-8 list-disc" style={{lineHeight:"200%"}}>
            <li>OTT Platforms</li>
            <li>Influence Marketing</li>
            <li>Popular Website & Apps</li>
            <li>Newspaper Advertising</li>
            <li>Native Advertising</li>
  </ul>
  <button                  onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}  className="bg-[#0034dd] text-sm  text-white flex justify-center text-center items-center cursor-pointer lg:h-[5vh] lg:w-[8vw] h-[6vh] w-[50%] transition-transform transform hover:scale-110 hover:shadow-2xl duration-300 ease-in-out cursor-pointer">Get Started &nbsp; { hovered ? <ArrowRightOutlined/> : <RightOutlined/>} </button>
</div>
<div className="image">
  <aside className="flex justify-center lg:justify-start">
       <img
          src={'https://cdn-eoimn.nitrocdn.com/pJaHCAtiamEsJjRFSNeDAczyRWgQTsaP/assets/static/optimized/rev-208622f/wp-content/uploads/2021/12/iPolygon_Media-Buying-Selling-1-1024x685.png'}
           width={600}
           height={470}
           alt="plur centre"
           
         />
  </aside>
</div>
</div>,
        },
      ];
      
  return (<>
    <div className=' bg-[#f9f9f9]
pt-10 flex justify-center w-[100%] h-[90vh] lg:h-[auto] '>
    <Tabs defaultActiveKey="1"  centered
    // tabBarStyle={{height:'8vh',width:"70vw",fontWeight:'500',color:'black'}}
     className='h-[8vh] w-[100vw] lg:h-[100%] lg:w-[70vw] text-black '
     items={items} onChange={onChange} />
        </div>
  </>
  )
}

export default CentralTabs