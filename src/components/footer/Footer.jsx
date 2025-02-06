import "./footer.css";

const Footer = (props) => {
    return (
        <>
            <div className="footer-logo">
                <a href="#"><img src={props.logoPath} alt="Logotipo de la pagina"/></a>
            </div>
            <div className="footer-redes-sociales">
                {props.links.map((link) => {
                    return <a href={link.url} target="_blank">{link.name}</a>
                })}
            </div>
            <div className="footer-enlaces">
                <a href="#contacto">Contacto</a>
            </div>
            <div className="footer-legal">
                <p>&copy; 2025 Gonzalosanto. Todos los derechos reservados.</p>
            </div>
        </>
    )
}

export default Footer;