import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
        <div className='absolute w-full left-0 min-h-96 -bottom-4'>
            <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-50' />
        </div>

        <div className='flex flex-col items-center'>
            <h1 className='heading'>
                Ready to take your<span className='text-purple'> Digital <br className='hidden md:block' /> Presence </span>to next level?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>
            <a href="mailto:anegi6723@gmail.com">
                <MagicButton 
                  title="Let's get in touch" 
                  icon={<FaLocationArrow />}
                  position='right'
                />
            </a>
        </div>

        <div className='md:w-[80vw] md:mx-auto flex mt-16 md:md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal mb-4 font-light'>Copyright &copy; 2024 Ashu</p>

            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <Image src={profile.img} alt={profile.id.toString()} width={20} height={20} />
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer