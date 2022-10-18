import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import github from '../assets/github.png';

const TechnicalSkills = () => {
    return (
        <div className='w-full h-screen bg-[#2b2b2b] text-[#f8f9fa]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='max-w-[1000px] w-full'>
                    <div className='text-center'>
                        <h2 className='text-4xl inline border-b-4 border-[#9381ff] py-2'>Technical Skills</h2>
                    </div>
                    <div className='text-center pt-6'>
                        <p className='py-2'>These are a few of the languages and programs that I have learned.</p>
                    </div>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-x-1 gap-y-8 text-center py-8'>
                    <div className='w-60 pt-6 shadow-md shadow-[#f8f9fa] hover:shadow-lg hover:shadow-[#9381ff] hover:bg-[#f8f9fa] hover:text-[#2b2b2b] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={html} alt='html logo' />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='w-60 pt-6 shadow-md shadow-[#f8f9fa] hover:shadow-lg hover:shadow-[#9381ff] hover:bg-[#f8f9fa] hover:text-[#2b2b2b] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={css} alt='css logo' />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='w-60 pt-6 shadow-md shadow-[#f8f9fa] hover:shadow-lg hover:shadow-[#9381ff] hover:bg-[#f8f9fa] hover:text-[#2b2b2b] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={javascript} alt='javascript logo' />
                        <p className='my-4'>Javascript</p>
                    </div>
                    <div className='w-60 pt-6 shadow-md shadow-[#f8f9fa] hover:shadow-lg hover:shadow-[#9381ff] hover:bg-[#f8f9fa] hover:text-[#2b2b2b] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={react} alt='react logo' />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='w-60 pt-6 shadow-md shadow-[#f8f9fa] hover:shadow-lg hover:shadow-[#9381ff] hover:bg-[#f8f9fa] hover:text-[#2b2b2b] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={tailwind} alt='tailwind logo' />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='w-60 pt-6 shadow-md shadow-[#f8f9fa] hover:shadow-lg hover:shadow-[#9381ff] hover:bg-[#f8f9fa] hover:text-[#2b2b2b] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto hover:invert' src={github} alt='github logo' />
                        <p className='my-4'>GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnicalSkills