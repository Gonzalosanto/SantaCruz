import About from '../about/About'
import Slider from '../slider/Slider'
import { experiences } from '../../constants/index.js';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import reactSVG from '../../assets/skills/react.svg';
import nodejs from '../../assets/skills/nodejs.svg';
import nestjs from '../../assets/skills/nestjs.svg';

const Body = () => {
    return (
        <>
            <div id='about-me' className="m-8" style={{ height: '90vh' }}>
                <About />
            </div>
            <div id='experiences'>
                <h1 className="my-2 text-center underline decoration-1 decoration-neutral-400 experiences">My experience</h1>
                <Slider items={experiences}/>
            </div>
            <div>
                {/* TODO: add skills and certifications */}
                <Carousel className='flex justify-center' showThumbs={false} autoPlay={true} interval={1500} width={'20%'} showStatus={false} showIndicators={false} infiniteLoop={true}> 
                    <img className=' mx-auto my-4' src={reactSVG} alt="" />
                    <img className=' mx-auto my-4' src={nodejs} alt="" />
                    <img className=' mx-auto my-4' src={nestjs} alt="" />
                </Carousel>
            </div>
        </>)
}

export default Body;