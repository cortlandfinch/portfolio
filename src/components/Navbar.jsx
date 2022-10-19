import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const userClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#2b2b2b] text-[#e9ecef]'>

            {/* Nav Menu */}
            <ul className='hidden md:flex nav-bar-menu mx-auto space-x-10'>
                <li className='nav-link'><a href='/'>HOME</a></li>
                <li className='nav-link'><a href='/background'>BACKGROUND</a></li>
                <li className='nav-link'><a href='/technical-skills'>TECHNICAL SKILLS</a></li>
                <li className='nav-link'><a href='/portfolio'>PORTFOLIO</a></li>
                <li className='nav-link'><a href='/contact'>CONTACT</a></li>
                <li className='nav-link'><a href='/resume'>RESUME</a></li>
            </ul>

            {/* Nav Hamburger Menu */}
            <div onClick={userClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Nav Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#2b2b2b] flex flex-col justify-center items-center'}>
                <li className='py-6 text-3xl'><a href='/'>Home</a></li>
                <li className='py-6 text-3xl'><a href='/background'>Background</a></li>
                <li className='py-6 text-3xl'><a href='/technical-skills'>Technical Skills</a></li>
                <li className='py-6 text-3xl'><a href='/portfolio'>Portfolio</a></li>
                <li className='py-6 text-3xl'><a href='/contact'>Contact</a></li>
                <li className='py-6 text-3xl'><a href='/resume'>Resume</a></li>
            </ul>
        </div>
    )
}

export default Navbar