import { HeatMapOutlined, UserOutlined, WalletOutlined } from '@ant-design/icons'
import React from 'react'

const Statistics = () => {
  return (
    <div className='w-[100vw] lg:h-[70vh] h-[100vh] bg-white pt-[20vh]  flex flex-col items-center text-center '>
        <h2 className='font-semibold text-2xl lg:text-4xl mb-4  leading-10 '>We grow as our clients grow!</h2>
        <p className=''>We love to see our clients getting results and get ROI.</p>
        <div className='w-[100%] flex flex-col gap-[12vw] lg:flex-row  pt-10 justify-center'>
            <div className='flex flex-col gap-4 items-center'>

            <HeatMapOutlined className=' mb-2 text-[#0034dd] text-3xl'  />
            <h1 className='font-bold text-4xl lg:text-6xl   leading-10'>10M+</h1>
            <p className='font-semibold text-md lg:text-md   leading-10'>TRAFFIC GENERATED</p>
            </div>
            <div className='flex flex-col gap-4 items-center'>

<UserOutlined className=' mb-2 text-[#0034dd] text-3xl'  />
<h1 className='font-bold text-4xl lg:text-6xl   leading-10'>100+</h1>
<p className='font-semibold text-md lg:text-md   leading-10'>CLIENTS WORKED WITH</p>
</div>
<div className='flex flex-col gap-4 items-center'>

<WalletOutlined className=' mb-2 text-[#0034dd] text-3xl'  />
<h1 className='font-bold text-4xl lg:text-6xl   leading-10'>1M+</h1>
<p className='font-semibold text-md lg:text-md   leading-10'>REVENUE GENERATED</p>
</div>
        </div>
        
        </div>
  )
}

export default Statistics