const Card = (props) => {
    return(      
    <div className="
        m-8 
        flex 
        justify-start 
        text-center 
        items-center 
        bg-blue-400
        
    ">
        <img src={props.img} alt="imagen de trabajo hecho" />
        <p>{props.text}</p>
    </div>)
}

export default Card;