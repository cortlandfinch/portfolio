import React from 'react'
import project1 from '../assets/leashleague.png';
import project2 from '../assets/passwordgenerator.png';
import project3 from '../assets/portfolio.png';
import project4 from '../assets/readmegenerator.gif';
import project5 from '../assets/rvahotspot.png';
import project6 from '../assets/scheduler.png';

const Portfolio = () => {
    return (
        <div name='portfolio' className='w-full md:h-screen bg-[#e9ecef] text-[#2b2b2b]'>
            <div className='max-w-[1800px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 text-center'>
                    <h2 className='text-4xl inline border-b-4 border-[#9381ff] py-2'>Portfolio</h2>
                    <p className='py-6'>These are a few of the projects I have developed and/or contributed to during my coding bootcamp.</p>
                </div>
                <div className="grid grid-cols-3 gap-y-8">
                    <div style={{ backgroundImage: `url(${project1})` }} className="shadow-lg shadow-[#9381ff] group container flex justify-center text-center items-center mx-auto project-container hover:shadow-lg hover:shadow-[#2b2b2b] hover:text-[#2b2b2b]">
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl text-[#2b2b2b] tracking-wider">
                                Leash League Group Project
                            </span>
                            <div className="pt-8 text-center ">
                                <a href='https://github.com/cortlandfinch/LeashLeague' target="_blank" rel='noreferrer'>
                                    <button className="text-center rounded-md px-8 py-2 m-2 bg-[#2b2b2b] text-[#e9ecef] text-lg hover:bg-[#e9ecef] hover:text-[#2b2b2b] hover:shadow-md hover:shadow-[#2b2b2b]">
                                        GitHub Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${project2})` }} className="shadow-lg shadow-[#9381ff] group container flex justify-center text-center items-center mx-auto project-container hover:shadow-lg hover:shadow-[#2b2b2b] hover:text-[#2b2b2b]">
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl text-[#2b2b2b] tracking-wider">
                                Javascript Password Generator
                            </span>
                            <div className="pt-8 text-center ">
                                <a href='https://github.com/cortlandfinch/super-secret' target="_blank" rel='noreferrer'>
                                    <button className="text-center rounded-md px-8 py-2 m-2 bg-[#2b2b2b] text-[#e9ecef] text-lg hover:bg-[#e9ecef] hover:text-[#2b2b2b] hover:shadow-md hover:shadow-[#2b2b2b]">
                                        GitHub Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${project3})` }} className="shadow-lg shadow-[#9381ff] group container flex justify-center text-center items-center mx-auto project-container hover:shadow-lg hover:shadow-[#2b2b2b] hover:text-[#2b2b2b]">
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl text-[#2b2b2b] tracking-wider">
                                HTML/CSS Portfolio
                            </span>
                            <div className="pt-8 text-center ">
                                <a href='https://github.com/cortlandfinch/just_me' target="_blank" rel='noreferrer'>
                                    <button className="text-center rounded-md px-8 py-2 m-2 bg-[#2b2b2b] text-[#e9ecef] text-lg hover:bg-[#e9ecef] hover:text-[#2b2b2b] hover:shadow-md hover:shadow-[#2b2b2b]">
                                        GitHub Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${project4})` }} className="shadow-lg shadow-[#9381ff] group container flex justify-center text-center items-center mx-auto project-container hover:shadow-lg hover:shadow-[#2b2b2b] hover:text-[#2b2b2b]">
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl text-[#2b2b2b] tracking-wider">
                                Javascript ReadMe.md Generator
                            </span>
                            <div className="pt-8 text-center ">
                                <a href='https://github.com/cortlandfinch/Professional-Read-Me-Generator' target="_blank" rel='noreferrer'>
                                    <button className="text-center rounded-md px-8 py-2 m-2 bg-[#2b2b2b] text-[#e9ecef] text-lg hover:bg-[#e9ecef] hover:text-[#2b2b2b] hover:shadow-md hover:shadow-[#2b2b2b]">
                                        GitHub Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${project5})` }} className="shadow-lg shadow-[#9381ff] group container flex justify-center text-center items-center mx-auto project-container hover:shadow-lg hover:shadow-[#2b2b2b] hover:text-[#2b2b2b]">
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl text-[#2b2b2b] tracking-wider">
                                RVA Hotspot Group Project
                            </span>
                            <div className="pt-8 text-center ">
                                <a href='https://github.com/cortlandfinch/RVA-Hotspot' target="_blank" rel='noreferrer'>
                                    <button className="text-center rounded-md px-8 py-2 m-2 bg-[#2b2b2b] text-[#e9ecef] text-lg hover:bg-[#e9ecef] hover:text-[#2b2b2b] hover:shadow-md hover:shadow-[#2b2b2b]">
                                        GitHub Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${project6})` }} className="shadow-lg shadow-[#9381ff] group container flex justify-center text-center items-center mx-auto project-container hover:shadow-lg hover:shadow-[#2b2b2b] hover:text-[#2b2b2b]">
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl text-[#2b2b2b] tracking-wider">
                                Javascript Workday Scheduler
                            </span>
                            <div className="pt-8 text-center ">
                                <a href='https://github.com/cortlandfinch/project-secretary' target="_blank" rel='noreferrer'>
                                    <button className="text-center rounded-md px-8 py-2 m-2 bg-[#2b2b2b] text-[#e9ecef] text-lg hover:bg-[#e9ecef] hover:text-[#2b2b2b] hover:shadow-md hover:shadow-[#2b2b2b]">
                                        GitHub Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio