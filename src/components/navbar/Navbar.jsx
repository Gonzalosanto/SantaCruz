import Link from "../link/Link";

const Navbar = () => {
    return(
        <div className="w-screen flex justify-between py-4 align-top">
            <h2 className="text-lg px-4 py-4 align-middle">Portfolio</h2>
            <ul className="flex justify-center items-center list-image-none">
                <Link link={'#about-me'} text={"About me"}/>
                <Link link={'#contact'} text={"Contact me!"}/>
                <Link link={'#experiences'} text={"My experiences"}/>
            </ul>
        </div>
    )
}

export default Navbar;