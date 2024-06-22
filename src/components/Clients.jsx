import { Card, List } from 'antd'
import React, { useState } from 'react'

const Clients = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const clientsCategories = ['Finance',
        'Technology',
        'Fashion',
        'Sports',
        'Hackathon',
        'Education',
        'Pharmecuticals',
        'Home Automation',
        'Real Estate',]
  return (<div className=' bg-[#fdfdfd] drop-shadow-xl w-[100vw] h-[110vh]'>
    <div className='ml-[20%] w-[60%] pt-[5%] bg-white mt-[2%] mb-[10%]'>
        <h3 className='font-semibold text-2xl lg:text-4xl mb-4  leading-10 '>Our Clients</h3>
        <p className=' text-2xl leading-10 text-wrap '>We love to work with clients from diverse industries and across the world to develop unique,
             innovative and modern digital solutions.</p>
        <List
    grid={{
      gutter: -2,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={clientsCategories}
    className='drop-shadow-xl'
    renderItem={(item,index) => (
      <List.Item style={{margin:"0"}}>
        <Card  style={{height:"lg:24vh"}} className={`flex justify-center items-center text-center transition-transform transform hover:scale-110 hover:shadow-2xl duration-300 ease-in-out cursor-pointer ${hoveredCard !== null && hoveredCard !== index ? 'text-gray-300 opacity-75   ' : ''}`}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
        
        >
            <h1 className={`font-bold text-xl lg:text-2xl mb-4  leading-10 tracking-[0.1em]   border-[#0034dd] border-b-2 ${hoveredCard !== null && hoveredCard !== index ? 'border-blue-100 ' : ''}`}>{item}</h1></Card>
      </List.Item>
    )}
  />
        </div>
        </div>
  )
}

export default Clients