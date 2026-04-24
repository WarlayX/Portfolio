import HeroImg from '../../assets/profilesetup.png';
import Resume from '../../../public/Adewole-Resume.pdf';

export default function Hero () {
  return(
    <section className='pt-5'>

      <div className='flex flex-col gap-6.25 md:flex-row md:max-w-325 md:mx-auto '>
      
        <div className='md:w-[30%]'>
          <img 
            src={HeroImg} 
            alt="hero" 
            className='object-cover w-30 h-30 rounded-[10px] md:w-50 md:h-50'
          />
        </div>

        <div className='flex flex-col gap-6 p-2.5 md:w-[70%] md:gap-10'>
          <h1 className='text-[30px] font-bold leading-tight md:text-[50px]'>
            <span className='text-(--color-primary)'>DIGITAL</span> <br/> FRONTIERS.
          </h1>

          <p className='text-[15px] md:text-[18px]'>Specializing in high-performance React JS ecosystems also using HTML, CSS, and JavaScript to bridge the gap between complex logic and elegant user interface design.</p>

          <div className='flex'>
            <button 
              className='bg-(--color-primary) text-(--color-base) px-6 py-2 cursor-pointer rounded-[5px] border hover:bg-transparent hover:text-(--color-primary) transition-colors duration-200'>
              Hire Me
            </button>

            <a 
              href={Resume} 
              download="Adewole-Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className='bg-transparent text-(--color-primary) px-6 py-2.5 cursor-pointer rounded-[5px] border border-(--color-primary) hover:bg-(--color-primary) hover:text-(--color-base) transition-colors duration-200 ml-4'>             
              Download Resume 
            </a>
          </div>
        </div>


      </div>
    </section>  
  );
}