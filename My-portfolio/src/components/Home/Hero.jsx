import HeroImg from '../../assets/profilesetup.png';

export default function Hero () {
  return(
    <section className='pt-5'>

      <div className='flex flex-col gap-6.25'>
      
        <div className=''>
          <img 
            src={HeroImg} 
            alt="hero" 
            className='object-cover w-30 h-30 rounded-[10px]'
          />
        </div>

        <div className='flex flex-col gap-6 p-2.5'>
          <h1 className='text-[30px] font-bold leading-tight'><span className='text-(--color-primary)'>DIGITAL</span> <br/> FRONTIERS.</h1>

          <p className='text-[15px]'>Specializing in high-performance React JS ecosystems also using HTML, CSS, and JavaScript to bridge the gap between complex logic and elegant user interface design.</p>

          <div>
            <button className='bg-(--color-primary) text-(--color-base) px-6 py-2 cursor-pointer rounded-[5px] border hover:bg-transparent hover:text-(--color-primary) transition-colors duration-200'>
              Hire Me
            </button>
          </div>
        </div>


      </div>
    </section>  
  );
}