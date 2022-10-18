import React from 'react'

const Background = () => {
  return (
    <div className='w-full h-screen bg-[#f8f9fa] text-[#2b2b2b}'>
      <div className='flex flex-col justify-center items-center  w-full h-full'>
        <div className='max-w-[1000px] w-full'>
          <div className='text-center'>
            <p className='text-4xl inline border-b-4 border-[#9381ff]'>Background</p>
          </div>
          <div className='text-center pt-6'>
            <p className='pb-2'>Thank you for visiting my website!</p>
            <p className='pb-2'>My name is Cortland Finch, I am 27 years old from Richmond, Virginia currently living in the great state of Florida.</p>
            <p>I work fulltime for International Roll-Call Corporation providing IT technology solutions for voting, voting displays, and management of the legislative process in over 70 state legislative chambers.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Background