import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#2b2b2b] text-[#e9ecef]'>

            {/* Nav Menu */}
            <ul className='hidden md:flex nav-bar-menu mx-auto space-x-10'>
                <li className='nav-link'><Link to="home" smooth={true} duration={500}>
                    HOME
                </Link></li>
                <li className='nav-link'><Link to="background" smooth={true} duration={500}>
                    BACKGROUND
                </Link></li>
                <li className='nav-link'><Link to="technical-skills" smooth={true} duration={500}>
                    TECHNICAL SKILLS
                </Link></li>
                <li className='nav-link'><Link to="portfolio" smooth={true} duration={500}>
                    PORTFOLIO
                </Link></li>
                <li className='nav-link'><Link to="contact" smooth={true} duration={500}>
                    CONTACT
                </Link></li>
                <li className='nav-link'><Link to="resume" smooth={true} duration={500}>
                    RESUME
                </Link></li>
            </ul>

            {/* Nav Hamburger Menu */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Nav Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#2b2b2b] flex flex-col justify-center items-center'}>
                <li className='py-6 text-3xl'><Link to="home" smooth={true} duration={500}>
                    Home
                </Link></li>
                <li className='py-6 text-3xl'><Link to="background" smooth={true} duration={500}>
                    Background
                </Link></li>
                <li className='py-6 text-3xl'><Link to="technical-skills" smooth={true} duration={500}>
                    Technical Skills
                </Link></li>
                <li className='py-6 text-3xl'><Link to="portfolio" smooth={true} duration={500}>
                    Portfolio
                </Link></li>
                <li className='py-6 text-3xl'><Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link></li>
                <li className='py-6 text-3xl'><Link to="resume" smooth={true} duration={500}>
                    Resume
                </Link></li>
            </ul>
        </div>
    )
}

export default Navbar