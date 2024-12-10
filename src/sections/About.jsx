import meImg from '../../public/assets/grid1.png';
import stackImg from '../../public/assets/grid2.png';
import Globe from 'react-globe.gl'

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
      <div className="col-span-1 xl:row-span-3">
       
       <div className="grid-container">
       <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
           <Globe height={326} width={326} backgroundColor='rgba(0,0,0,0)' backgroundImageOpacity={0.5}
           globeImageUrl={'//unpkg.com/three-globe/example/img/earth-night.jpg'}
           bumpImageUrl={'//unpkg.com/three-globe/example/img/earth-topology.png'}/>
       </div>
       <div>
          <p className='grid-headtext'>
            Hi, I work in Gurgoan
          </p>
          <p className='grid-subtext'>
            Well I am remotely Available to work accross timezone.
          </p>
        </div>
       <div>
       </div>
       </div>
             </div>
      </div>
    </section>
  )
}

export default About
