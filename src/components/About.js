import "./About.css";

function About() {
    return <div className="about">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700&family=Stick+No+Bills:wght@200;300;400;500;600;700&display=swap');
        </style>
        <h1 className="about__title">Nationally inspiring kids since 2018</h1>
        <div className="about__content">
            <p className="about__info">STEM & Buds is a for-youth, by-youth 501(c)(3)  bridging students to mentors, shaping ideas into initiatives, and translating science for civics. We try to make STEM—and its issues that affect us—participatory and accessible for all. </p>
            <a className="about__link">Us Locally</a>
        </div>
    </div>
}

export default About;