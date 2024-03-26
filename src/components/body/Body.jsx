import Card from '../card/Card'
import About from '../about/About'

const experiences = [`En la empresa cumplia el rol de desarrollador fullstack con las siguientes responsabilidades:\n
             - Diseño estructural de la arquitectura del proyecto\n
             - Disenio de la base de datos del sistema central\n
             - Implmentacion de backend, base de datos, frontend, broker de mensajes en tiempo real y microservicios\n
             
             Dichas tareas las fui realizando en colaboracion con otro programador orientado al frontend. Tuve
             como responsabilidad la supervision de la calidad del codigo que producia.\n
             
             `,]
const Body = () => {
    return (
        <div id='about-me' className="m-8" style={{ height: '90vh' }}>
            <About/>
            <h1 className="text-center underline decoration-1 decoration-neutral-400">My work experience</h1>
            <div className=''>
                <Card duration={"June 2023 - January 2024"} title={"RavAds"} text={experiences[0]} 
                />
            </div>

        </div>)
}

export default Body;