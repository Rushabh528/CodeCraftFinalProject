/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
const About = ({ darkMode }) => {
  return (
    <div name='about' className={`${darkMode ? 'bg-[#0a192f] text-gray-300' : 'bg-white text-black'} w-full h-screen text-gray-300`}>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>I'm a 2nd-year undergraduate Electrical Engineering student studying at IIT Kanpur.</p>
            </div>
            <div>
              <p>I am much interested in learning new things related to tech and have a passion towards software development.
              I am doing some projects in this summer to hone my coding skills, including both development and competitive programming.
              Apart from these, I also like playing chess and online games.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
