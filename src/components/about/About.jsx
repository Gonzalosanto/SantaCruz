import Card from '../card/Card'
import react from '../../assets/react.svg'
const About = () => {
    return(      
    <div className="m-8" style={{height:'90vh'}}>
        <h1 className="text-center underline decoration-1 decoration-neutral-400">About me</h1>  
        <p className='text-center font-serif m-6'>
            Soy Mapache, un desarrollador Fullstack
        </p>
        <h1 className="text-center underline decoration-1 decoration-neutral-400">My work experience</h1>  
        <div className='columns-3 gap-4'>
            <Card img={react} text={"Una card cualquiera"}/>
            <Card img={react} text={"Una card cualquiera"}/>
            <Card img={react} text={"Una card cualquiera"}/>
        </div>

    </div>)
}

export default About;