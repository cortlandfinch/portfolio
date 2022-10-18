import React from 'react';
import logo from '../assets/logo-dark.png';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#2b2b2b]'>
            {/*Introduction Container*/}
            <div className='max-w-[1500px] mx-auto px-8 flex flex-col justify-center w-full h-full'>
                <div className='grid grid-cols-2 gap-y-8'>
                    <div className='m-auto pl-10'>
                        <h1 className='text-4xl sm:text-6xl text-[#e9ecef] py-4'>Hi, I'm Cortland Finch</h1>
                        <h2 className='text-3xl sm:text-4xl text-[#9381ff] py-2'>Full Stack Developer</h2>
                        <p className='text-[#6c757d] max-w-[700px]'>I currently work at International Roll-Call Corporation as a Lead Product Specialist, working in Legislative Process and Legislative Back Office Management Solutions. I began my Web Development journey through the University of Richmond School of Professional & Continuing Studies Coding Boot Camp.</p>
                    </div>
                    <div className='m-auto pl-20'>
                        <img src={logo} alt='Cortland Logo' style={{ width: '550px', height: '550px' }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home