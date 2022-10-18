import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo-dark.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#2b2b2b] text-[#e9ecef]'>
            <div>
                <img src={Logo} alt='Cortland Logo' style={{ width: '50px' }} />
            </div>

            {/* Nav Menu */}
            <ul className='hidden md:flex'>
                <li className='nav-link'>HOME</li>
                <li className='nav-link'>BACKGROUND</li>
                <li className='nav-link'>TECHNICAL SKILLS</li>
                <li className='nav-link'>PORTFOLIO</li>
                <li className='nav-link'>CONTACT</li>
            </ul>

            {/* Nav Hamburger Menu */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Nav Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#2b2b2b] flex flex-col justify-center items-center'}>
                <li className='py-6 text-3xl'>Home</li>
                <li className='py-6 text-3xl'>Background</li>
                <li className='py-6 text-3xl'>Technical Skills</li>
                <li className='py-6 text-3xl'>Portfolio</li>
                <li className='py-6 text-3xl'>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar