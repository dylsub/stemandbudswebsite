import "./Hero.css";
import Logo from "./static/logo.png";

function Hero() {
    return <div>
        <div className="hero">
            <div className="nav">
                <div className="nav__brand">
                    <img className="nav__logo" src={Logo}></img>
                </div>
                <div className="nav__links">
                    <h2 className="nav__link">Home</h2>
                    <h2 className="nav__link">About Us</h2>
                    <h2 className="nav__link">Our Programs</h2>
                    <h2 className="nav__link">Our Team</h2>
                </div>
            </div>
            <div className="header">
                <h1 className="header__title">STEM For-Youth, By-Youth</h1>
                <h2 className="header__subtitle">Welcome to the Naperville Chapter!</h2>
                <div className="header__links">
                    <a className="header__link">Learn More</a>
                    <a className="header__link">Schedule</a>
                </div>

            </div>
        </div>

    </div>
}

export default Hero;