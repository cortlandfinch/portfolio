import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className='fixed bottom-0 left-0 h-[60px] z-20 p-4 w-full bg-[#2b2b2b] border-t border-[#6c757d] text-[#e9ecef] shadow md:flex md:items-center md:justify-between md:p-6'>
            <ul className='hidden md:flex nav-bar-menu mx-auto space-x-10'>
                <li className='footer-link'>
                    <a className='flex justify-between items-center w-full text-[#e9ecef]' href='/'>Cortland Finch</a>
                </li>
                <li className='footer-link flex justify-between items-center'>
                    <a className='flex justify-between items-center w-full text-[#e9ecef]' href='https://www.linkedin.com/in/cortland-finch/'>
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='footer-link'>
                    <a className='flex justify-between items-center w-full text-[#e9ecef]' href='https://github.com/cortlandfinch'>
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className='footer-link'>
                    <a className='flex justify-between items-center w-full text-[#e9ecef]' href='/contact'>
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='footer-link'>
                    <a className='flex justify-between items-center w-full text-[#e9ecef]' href='/resume'>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer