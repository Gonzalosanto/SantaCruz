import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Card from "../card/Card";

const Slider = (props) => {
    return(
        <Carousel showThumbs={false} autoPlay={true} interval={5000} showStatus={false} infiniteLoop={true} stopOnHover={true}>
            {props.items.map((item)=>{
                return(
                    <>
                    <Card 
                        id={'experiences'} 
                        duration={item.duration} 
                        title={item.company} 
                        text={item.description} 
                        links={item.links}
                    />
                    </>
                )
            })}
        </Carousel>
    )
}

export default Slider;