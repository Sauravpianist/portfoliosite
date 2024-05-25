import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'


const Work = () => {
    return <section className='section' id='work'>
    <div className="container mx-auto">
      <div>
        <div className='flex-1 flex flex-col gap-y-2 mb-10 lg:mb-0'>
          {/* text */}
          <div>
            <h2 className='h2 leading-tight text-accent'>
              My Latest <br />
              Work.
            </h2>
            <h2 className='h2 leading-tight'>
            News Sharing Website
            </h2>
            <p className='max-w-sm mb-16'>Creating a news website using an API to provide up-to-date and
dynamic content to your users.
            </p>
            <button className='btn btn-sm'>View All Projects</button>
          </div>
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
            {/*overlay */}
            <div className='group-hover:bg-black/70 w-full
            h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' 
            src={Img1} 
            alt="" />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className='text-gradient'>UI/UX Design</span>
              </div>
            {/* title */}
            {/* <div>
              <span>Project Title</span>
            </div> */}
          </div>
        </div>
        {/* <div>2</div> */}
      </div>
    </div>
  </section>;
};

export default Work;
