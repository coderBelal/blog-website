import contact from "../assets/contact.jpg";
import "./Contact.css";
const Contact = () => {
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
        <img src={contact} alt="" />
        <p className="about-text-p">
          It’s no secret that the digital industry is booming. From exciting
          startups to global brands, companies are reaching out to digital
          agencies, responding to the new possibilities available. However, the
          industry is fast becoming overcrowded, heaving with agencies offering
          similar services — on the surface, at least.
        </p>
      </div>
      <div className="contact-form">
        <form>
          <label htmlFor="name">Your Name (required)</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email (required)</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message"></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
