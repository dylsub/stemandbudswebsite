import "./AboutNational.css";

function AboutNational() {


    return <div className="about__national">
        <h1 className="about__title">Nationally inspiring kids since 2018</h1>
        <div className="about__content">
            <p className="about__info">STEM & Buds is a for-youth, by-youth 501(c)(3)  bridging students to mentors, shaping ideas into initiatives, and translating science for civics. We try to make STEM—and its issues that affect us—participatory and accessible for all. </p>
            <div className="about__links">
                <a className="about__link">Us Locally</a>
                <a className="about__website" href="https://stemandbuds.org/team"><ion-icon name="open-outline"></ion-icon> National Website</a>
            </div>
        </div>
    </div>
}

export default AboutNational;