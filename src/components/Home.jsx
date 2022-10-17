import React from 'react';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#2b2b2b]'>
            {/*Introduction Container*/}
            <div className='max-w- [1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <h1 className='text-4xl sm:text-7xl text-[#e9ecef]'>Hi, I'm Cortland Finch</h1>
                <p className='text-3xl sm:text-5xl text-[#6c757d]'>Full Stack Developer</p>
            </div>
        </div>
    )
}

export default Home