import React from 'react';
import { Vortex } from './Ui/vortex';
import { TextGenerateEffect } from "./Ui/text-generate-effect";
import { MagicButton } from './Ui/MagicButton';
import { FaMagic } from 'react-icons/fa'; // Import FaMagic icon

const Hero = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <>
      <div className='relative pb-20 pt-36 bg-black-100 flex items-center justify-center min-h-screen'>
        <Vortex className='absolute inset-0 w-full h-full z-0' /> {/* Adjusted Vortex positioning */}
        <div className='relative z-10 text-center text-white'>
          <h1 className='uppercase tracking-widest text-xs text-blue-100 mb-4'>
            Code Create Innovate.
          </h1>
          <TextGenerateEffect className='text-[40px] md:text-5xl lg:text-6xl mb-4' words='Crafting Dreams into Reality: My Journey Through Creativity and Innovation' />
          <p className='text-center tracking-wide mt-4 text-base md:text-lg lg:text-2xl text-white-400 bg-black-900 p-4 rounded'>
            Hi, I&apos;m Aishwarya, a Full Stack Developer...
          </p>
          <a href="#about" className="inline-block mt-4"> {/* Move the <a> tag here */}
            <MagicButton
              title="Show my work"
              icons={<FaMagic />}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
