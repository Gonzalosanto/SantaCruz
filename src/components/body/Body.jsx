import Card from '../card/Card'
import react from '../../assets/react.svg'
const Body = () => {
    return (
        <div id='about-me' className="m-8" style={{ height: '90vh' }}>
            <h1 className="text-center underline decoration-1 decoration-neutral-400">About me</h1>
            <p className='text-center font-serif m-6'>
                Soy desarrollador de software  con  una  sólida capacidad para trabajar en equipo y un
                entusiasmo evidente cuando colaboro estrechamente con mis compañeros de proyecto . Mi curiosidad
                innata me impulsa a buscar constantemente nuevas tecnologías y herramientas para mejorar mis habilidades
                y contribuir al éxito del equipo.
            </p>
            <h1 className="text-center underline decoration-1 decoration-neutral-400">My work experience</h1>
            <div className=''>
                <Card img={react} text={"Una card cualquiera"} />
            </div>

        </div>)
}

export default Body;