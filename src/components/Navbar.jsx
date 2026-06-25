import logo from '../assets/pp.png'
import './Navbar.css'
const Navbar = () => {
    return(
      <div className="navbar">
        <div className="brand">
        <div className="navbar_logo">
            <img src={logo} alt="Pranjul Pandey" />
        </div>
       <div className="name">
        <h4>Pranjul Pandey</h4>
        </div>  
        </div>
        <div className="links">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience"> Experience</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <div className="right">
            <ul>
                <li><a href="#theme">Theme/settings</a></li>
                <li><a href="#developer">Developer/code</a></li>
            </ul>
        </div>
        </div>  
    )
}
export default Navbar