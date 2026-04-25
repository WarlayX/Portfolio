import 'boxicons/css/boxicons.min.css';
import HeroImg from '../../assets/profilesetup.png';
import Resume from '../../../public/Adewole-Resume.pdf';

export default function Hero () {
  return(
    <section className='pt-5'>
      <div className='flex flex-col gap-6 sm:flex-row sm:max-w-325 sm:mx-auto sm:h-110 sm:items-center lg:h-150 '>     
        <div className='sm:w-[30%] sm:self-start'>
          <img 
            src={HeroImg} 
            alt="hero" 
            className='object-cover w-30 h-30 rounded-[10px] sm:w-50 sm:h-50 lg:w-65 lg:h-65'
          />
        </div>
        <div className='flex flex-col gap-6 p-2.5 sm:w-[70%] sm:gap-10'>
          <h1 className='text-[30px] font-bold leading-tight sm:text-[40px] lg:text-[80px]'>
            <span className='text-(--color-primary)'>DIGITAL</span> <br/> FRONTIERS.
          </h1>

          <p className='text-[15px] sm:text-[18px] lg:text-[24px]'>Frontend Developer and Graphic Designer focused on building responsive, user-friendly web applications with React, while crafting visually engaging designs that enhance user experience.</p>

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
              className='flex items-center gap-2 bg-transparent text-(--color-primary) px-6 py-2.5 cursor-pointer rounded-[5px] border border-(--color-primary) hover:bg-(--color-primary) hover:text-(--color-base) transition-colors duration-200 ml-4'>             
              Download Resume 
              <i className="bx bx-file-blank text-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </section>  
  );
}