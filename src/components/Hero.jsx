import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-4'>
           <p>Any Where You Are You Can Workout With Us.</p>
           <h1 className='uppercase font-semibold text-4x1 sm:text-5x1 md:text-6x1 lg:text-7x1'>Home and Mobile <span className='text-blue-400'>GYM</span></h1>
        </div>
        <p className='text-sm md:text-base font-light'>I hereby acknowledge that I may become <span className='text-blue-400 font-medium'>fit and buff</span> and I accept all the risks of becoming the local mass <span className='text-blue-400 font-medium'>montrosity</span>,
            <span className='text-blue-400 font-medium'>afflicted</span> with severe body <span className='text-blue-400 font-medium'>dismorphia</span>, and being unable to fit through doors and your old clothes.
        </p>
        <Button func={() => {
            window.location.href = '#generate'
        }} text={"Accept & Begin"}></Button>
    </div>
  )
}
