const Card = (props) => {
    return(      
    <div key={props.id} className={`
        flex
        flex-col
        text-center 
        items-center 
        transition
        delay-150
        hover:transition-all
    `}>
        {/* <Content></Content> */}
        <h1>{props.title || "JOB NAME"}</h1>
        <h3>{props.duration}</h3>
        {props.img && <img src={props.img} />}
        <p className="whitespace-pre-line">{props.text}</p>
        <a href={props.links[0]}></a>
        {props.links && props.links.map( link => {return <a href={link} className="text-white ">{link}</a>})}
    </div>)
}

export default Card;