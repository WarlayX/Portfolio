import HeroImg from '../../assets/profilesetup.png';

export default function Hero () {
  return(
    <section className='pt-5'>

      <div>
        <img src={HeroImg} alt="hero" className='' />
      </div>

      <div>
        <h1><span>DIGITAL</span> FRONTIERS.</h1>

        <p>Specializing in high-performance React JS ecosystems also using HTML, CSS, and JavaScript to bridge the gap between complex logic and elegant user interface design.</p>

        <div>
          <button className=''>
            Hire Me
          </button>
        </div>

      </div>

    </section>  
  );
}