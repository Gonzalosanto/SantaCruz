import reactSVG from '../assets/skills/react.svg';
import nodejs from '../assets/skills/nodejs.svg';
import nestjs from '../assets/skills/nestjs.svg';

export const experiences = [
    {
        company: "RavAds",
        duration: 'Julio 2023 - Enero 2024',
        description: `
            En la empresa cumplia el rol de desarrollador fullstack con las siguientes responsabilidades:\n
             - Diseño estructural de la arquitectura del proyecto\n
             - Disenio de la base de datos del sistema central\n
             - Implementacion de backend, base de datos, frontend, broker de mensajes en tiempo real y microservicios\n
             
             Dichas tareas se realizaron en colaboracion con otro programador orientado al frontend. Una de las responsabilidades era
             la supervision de calidad del codigo del equipo.\n

            Tecnologias utilizadas:
                Frameworks: NextJS (frontend), NestJS (backend)
                Broker: Apache Kafka
                Arquitectura orientada a eventos con microservicios
                Lenguajes: Javascript
                Entorno de ejecucion: NodeJS
                Base de datos: MariaDB (Relacional) y MongoDB (No relacional)

        `,
        links: ["https://github.com/gonzalosanto/vast-backend", "https://github.com/gonzalosanto/vast-frontend"]
    },
    {
        company: "Ventum Software",
        duration: "Agosto 2020 - Febrero 2023",
        description: `Tareas desarrolladas en Ventum Software`,
        links: []
    }
]

const assetsPath = './assets/skills/'

export const skills = [
    reactSVG, nodejs, nestjs
]