import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
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
                <li>HOME</li>
                <li>ABOUT</li>
                <li>TECHNICAL SKILLS</li>
                <li>EXPERIENCE</li>
                <li>CONTACT</li>
            </ul>

            {/* Nav Hamburger Menu */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Nav Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#2b2b2b] flex flex-col justify-center items-center'}>
                <li className='py-6 text-3xl'>Home</li>
                <li className='py-6 text-3xl'>About</li>
                <li className='py-6 text-3xl'>Technical Skills</li>
                <li className='py-6 text-3xl'>Experience</li>
                <li className='py-6 text-3xl'>Contact</li>
            </ul>

            {/* Links to affiliated accounts */}
            <div className='hidden lg:flex fixed flex-col top-[30%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] bg-[#0e76a8] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full text-[#e9ecef]' href='/'>
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] bg-[#171515] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full text-[#e9ecef]' href='/'>
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] bg-[#ef233c] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full text-[#e9ecef]' href='/'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] bg-[#adb5bd] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full text-[#e9ecef]' href='/'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar