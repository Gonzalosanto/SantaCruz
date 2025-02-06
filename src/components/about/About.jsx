const About = (props) => {
    return (
        <>
            <h1 className="text-center underline decoration-1 decoration-neutral-400">About me</h1>
            <p className='text-center font-serif m-6'>
                {props.text}
            </p>
        </>)
}

export default About;