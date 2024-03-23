const Link = (props) => {
    return(
        <li className="mx-8 px-2">
            <a href={props.link} className="text-white">{props.text}</a>
        </li>
    )
}

export default Link;