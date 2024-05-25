import React from 'react';
//countup
import CountUp from 'react-countup';
//intersection observer hook
import { useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variant
import {fadeIn} from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
  <section className='section' id='about' ref={ref}>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-o h-screen'>
      {/* logo */}
      {/* <motion.div 
      variants={fadeIn('right',0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false,amount:0.3}}
      className='flex-1 bg-about bg-contain bg-no-repeat h-[500px] mix-blend-lighten bg-top'>   
      </motion.div>  */}
      {/* text */}
      <motion.div 
      variants={fadeIn('left',0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false,amount:0.3}}

      className='flex-1'>
        <h2 className='h2 text-accent'>About me.</h2>
        <h3 className='h3 mb-4'>I'm a Full Stack Developer with over 2 years of experience.</h3>
        <p className='mb-6'>
        Hello! I'm Saurav Pun Magar, a full stack developer. I specialize in both frontend and backend development, crafting seamless and efficient web applications from start to finish. With expertise in languages like HTML, CSS, JavaScript, Python, and frameworks such as React, Node.js, and Django, I bring ideas to life by blending creativity with technical precision. Whether it's designing intuitive user interfaces or architecting robust server-side solutions, I thrive on the challenge of building dynamic and responsive web experiences.
        </p>
        {/* stats */}  
          <div className='flex gap-x-6 lg:gap-x-10  mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {inView ? <CountUp start = {0} end={12} duration={3}/>: null}
              +
              </div>
            <div className='font-primary text-sm tracking-[2px]'>Satisfied <br />
            Clients
            </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {inView ? <CountUp start = {0} end={6} duration={3}/>: null}
              +
              </div>
            <div className='font-primary text-sm tracking-[2px]'>Projects <br />
            Completed
            </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {inView ? <CountUp start = {0} end={2} duration={3}/>: null}
              </div>
            <div className='font-primary text-sm tracking-[2px]'>Years of <br />
            Experience
            </div>
            </div>
          </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>
                Contact Me
              </button>
              <a href="#" className='text-gradient btn-link'>My Portfolio</a>
            </div>
          </motion.div>
      </div>
    </div>
    </section>
  );
};

export default About;
