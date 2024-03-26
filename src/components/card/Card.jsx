const Card = (props) => {
    return(      
    <div className="
        m-8 
        flex 
        flex-col
        text-center 
        items-center 
        bg-blue-400
    ">
        <h1>{props.title || "JOB NAME"}</h1>
        <h3>{props.duration}</h3>
        {props.img && <img src={props.img} />}
        <p className="whitespace-pre-line">{props.text}</p>
    </div>)
}

export default Card;