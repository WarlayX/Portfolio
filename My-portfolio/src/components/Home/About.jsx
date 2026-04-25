export default function About () {
  return (
    <section className='pt-5'>
      <div className='flex flex-col gap-6 p-2.5 sm:flex-row sm:max-w-325 sm:mx-auto sm:items-center sm:h-85 lg:h-90'>

        <div className='sm:w-[25%] flex items-center gap-2 sm:justify-center sm:self-start'>
          <i className="fa-regular fa-user text-(--color-primary) text-[20px] sm:text-[30px]" aria-hidden="true"></i>
          <h2 className='text-(--color-primary) text-[20px] font-bold sm:text-[30px]'>
            ABOUT
          </h2>
        </div>

        <div className="flex flex-col gap-2.5 sm:w-[75%] sm:self-start sm:gap-10">
          <p className='text-[15px] sm:text-[17px] lg:text-[24px]'>
            I build clean, responsive and user-friendly websites. Core skills include HTML, CSS, JavaScript, React JS and Tailwind CSS. Also skilled in graphics design working with tools like CorelDraw, Photoshop and Adobe illustrator to complement my web projects.
          </p>

          <p className='text-[15px] sm:text-[17px] lg:text-[24px]'>
            Whenever I'm not coding or designing, I enjoy playing chess, listening to music, watching movies, and playing video games - I always find inspiration in strategy and creativity.
          </p>
        </div>

      </div>
    </section>
  );
}