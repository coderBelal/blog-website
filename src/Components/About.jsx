import "./About.css";
import about from "../assets/about.jpg";
const About = () => {
  return (
    <div className="article">
      <h1>Writing.</h1>
      <div className="about-page">
        <div className="input">
          <div className="about-text">
            <p>Hi, I am Belal </p>
          </div>
        </div>
      </div>
      <div className="about-img">
        <img src={about} alt="" />
        <p className="about-text-p">
          It’s no secret that the digital industry is booming. From exciting
          startups to global brands, companies are reaching out to digital
          agencies, responding to the new possibilities available. However, the
          industry is fast becoming overcrowded, heaving with agencies offering
          similar services — on the surface, at least. Producing creative, fresh
          projects is the key to standing out. Unique side projects are the best
          place to innovate, but balancing commercially and creatively lucrative
          work is tricky. So, this article looks at how to make side projects
          work and why they’re worthwhile, drawing on lessons learned from our
          development of the ux ompanion app.
        </p>
      </div>
    </div>
  );
};

export default About;
