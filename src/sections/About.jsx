import meImg from '../../public/assets/grid1.png';
import stackImg from '../../public/assets/grid2.png';

const About = () => {
  return (
    <section className="c-space my-20">
      <div className="grid xl:row-span-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
      <div className="col-span-1 xl:row-span-3">
        <div className="grid-container">
          <img src={meImg} alt='grid-1' className='w-full sm:h-[276px] h-fit object-contain'/>
          <div>
          <p className='grid-headtext'>
            Hi, I am Prajjwal
          </p>
          <p className='grid-subtext'>
            With 4 years of experience, I have honed my skills with frontend and backend development
          </p>
        </div>
        </div>
      </div>
      <div className="col-span-1 xl:row-span-3">
       
<div className="grid-container">
<img src={stackImg} alt='grid-2' className='w-full sm:h-[276px] h-fit object-contain'/>
<div>
<p className='grid-headtext'>
  Tech Stack
</p>
<p className='grid-subtext'>
  My Techstack includes typescript Javascript NodeJS ReactJS NextJS MongoDB ThreeJS Sql etc
</p>
</div>
</div>
      </div>
      </div>
    </section>
  )
}

export default About
