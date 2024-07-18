/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = ({ darkMode }) => {

  return (
    <div name='home' className={`w-full h-screen ${darkMode ? 'bg-[#0a192f] text-gray-300' : 'bg-white text-black'}`}>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className={`${ darkMode? 'text-pink-600':'text-black' }`}>Hi, my name is</p>
        <h1 className={`text-4xl sm:text-7xl font-bold ${ darkMode? 'text-[#ccd6f6]':'text-yellow-400' }`}>
          Rushabh Pandya
        </h1>
        <h4 className='text-4xl xsm:text-7xl font-bold text-[#8892b0]'>
          Studying at IIT Kanpur.
        </h4>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          This is my final assignment for the project CodeCraft offered by the BIOSOC Society at IIT Kanpur.
        </p>
        <div>
          <Link to='work' style={{width:"140px",height:"40px",cursor:"pointer"}} smooth={true} duration={500} className={` ${darkMode? 'hover:bg-pink-600 hover:border-pink-600':'bg-yellow-600 hover:bg-red-600 '} text-white group border-2 px-3 py-1 my-2 flex items-center`}>          
            Other works
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
