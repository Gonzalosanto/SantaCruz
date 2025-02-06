import Body from "../components/body/Body.jsx"
import Navbar from '../components/navbar/Navbar.jsx'
import Footer from '../components/footer/Footer.jsx'

export default function Home() {
  const links = [{name: "X", url: "https://x.com/SanCruzGon1"}, {name: "LinkedIn", url: "https://linkedin.com/in/gonzalo-santa-cruzzz"}] 

  return (
    <>
      <Navbar title={"Portfolio"}/>
      <Body/>
      <Footer text={"made with <3 by Gonzalosanto"} links={links} logoPath={"./src/assets/skills/nodejs.svg"}/>
    </>
  )
}