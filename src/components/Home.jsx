import React from 'react';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#2b2b2b]'>
            {/*Introduction Container*/}
            <div className='max-w- [1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <h1 className='text-4xl sm:text-7xl text-[#e9ecef] py-4'>Hi, I'm Cortland Finch</h1>
                <h2 className='text-3xl sm:text-5xl text-[#9381ff] py-2'>Full Stack Developer</h2>
                <p className='text-[#6c757d] max-w-[700px]'>I currently work at International Roll-Call Corporation as a Lead Product Specialist, working in Legislative Process and Legislative Back Office Management Solutions. I began my Web Development journey through the University of Richmond School of Professional & Continuing Studies Coding Boot Camp.</p>
            </div>
        </div>
    )
}

export default Home