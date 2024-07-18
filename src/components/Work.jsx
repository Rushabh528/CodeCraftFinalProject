/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
const Work = ({ darkMode }) => {
  return (
    <div name='work' className={`w-full md:h-screen ${darkMode ? 'bg-[#0a192f] text-gray-300' : 'bg-white text-black'}`}>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work:</p>
        </div>

        {/* GitHub Links Section */}
        <div className='grid sm:grid-cols-2 gap-4'>
          <div className={` ${darkMode? 'bg-black':''} p-6 rounded-lg shadow-lg`}>
            <h3 className='text-2xl font-bold mb-4'>Weather App</h3>
            <p className='mb-4'>Created a weather app using vite and react. Enter the city's name whose weather you have to know.</p>
            <a
              href='https://github.com/Rushabh528/CodeCraft-WebDev-Assign3'
              target='_blank'
              rel='noopener noreferrer'
              className='text-pink-600 hover:text-pink-400'
            >
              View on GitHub
            </a>
          </div>

          <div className={` ${darkMode? 'bg-black':''} p-6 rounded-lg shadow-lg`}>
            <h3 className='text-2xl font-bold mb-4'>Javascript Drum Kit</h3>
            <p className='mb-4'>Made a JS Drum Kit, where you can press the keys on your keyboard and the sound associated with that key will play.</p>
            <a
              href='https://github.com/Rushabh528/CodeCraft_WD_ass2_-Rushabh_Pandya-'
              target='_blank'
              rel='noopener noreferrer'
              className='text-pink-600 hover:text-pink-400'
            >
              View on GitHub
            </a>
          </div>

          {/* Add more project cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Work;
