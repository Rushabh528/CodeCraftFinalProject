/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { HiArrowNarrowLeft } from 'react-icons/hi';

const Contact = ({ darkMode }) => {
  return (
    <div name='contact' className={`w-full h-screen ${darkMode ? 'bg-[#0a192f] text-gray-300' : 'bg-white text-black'}`}>
      <div className='flex flex-col justify-center items-center h-full'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600 m-8'>Contact</p>
        <div className='flex text-center text-4xl font-bold'>
        <span className='group-hover:rotate-90 duration-300 pr-3'>
              <HiArrowNarrowLeft className='ml-3' />
            </span>
          <p>My social media handles are given on the left of the page.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
