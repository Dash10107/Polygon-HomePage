import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Image, Space } from 'antd';
import Link from 'antd/es/typography/Link';
import React, { useEffect, useState } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`fixed top-0 pt-8 right-0 left-0 p-4 flex justify-between items-center z-10 transition-all duration-300 ${isScrolled ? 'pl-4 pr-4 bg-white z-10' : 'pl-[18%] pr-[20%]'}`}>
      <aside className="flex items-center gap-2" >
        <Image
          src={'https://cdn-eoimn.nitrocdn.com/pJaHCAtiamEsJjRFSNeDAczyRWgQTsaP/assets/static/optimized/rev-208622f/wp-content/uploads/2021/11/iPolygon_-Logo_Black.png'}
          width={166}
          height={40}
          alt="plur logo"
          preview={false}
        />
        {/* <span className="text-4xl " style={{ fontWeight: '500', color: '#000' }}>iPolygon</span> */}
      </aside>
      <nav className={`hidden md:flex items-center gap-8 font-semibold `} >
        <Link href={'#'} style={{ color: '#000',fontWeight:'400' }} className='text-md leading-10 tracking-wide' >Home</Link>
        <Link href={'#'} style={{ color: '#000',fontWeight:'400' }} className='text-md leading-10 tracking-wide' >About Us</Link>
        <Link href={'#'} style={{ color: '#000',fontWeight:'400' }} className='text-md leading-10 tracking-wide' >Services</Link>
        <Link href={'#'} style={{ color: '#000',fontWeight:'400' }} className='text-md leading-10 tracking-wide' >Case Studies</Link>
        <Link href={'#'} style={{ color: '#000',fontWeight:'400' }} className='text-md leading-10 tracking-wide' >Contact Us</Link>
      </nav>
      <MenuOutlined className=' md:hidden text-black text-2xl ' onClick={showDrawer}/>
      <Drawer

        width={500}
        onClose={onClose}
        open={open}

      >
        <div className='flex items-center gap-8 font-semibold flex-col'>
        <Link href={'#'} style={{ color: '#000',fontWeight:'400' }} className='text-md leading-10 tracking-wide' >Home</Link>
        <Link href={'#'} style={{ color: '#000',fontWeight:'400' }} className='text-md leading-10 tracking-wide' >About Us</Link>
        <Link href={'#'} style={{ color: '#000',fontWeight:'400' }} className='text-md leading-10 tracking-wide' >Services</Link>
        <Link href={'#'} style={{ color: '#000',fontWeight:'400' }} className='text-md leading-10 tracking-wide' >Case Studies</Link>
        <Link href={'#'} style={{ color: '#000',fontWeight:'400' }} className='text-md leading-10 tracking-wide' >Contact Us</Link>
        </div>
        </Drawer>
        
    </div>
  );
};

export default Navigation;
