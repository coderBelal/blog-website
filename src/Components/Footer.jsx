import b from "../assets/b.jpg";
import "./Footer.css";
import { FaFacebook,FaWhatsapp,FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="article">
      <div className="footer">
        <div className="left">
          <h3>About me</h3>
          <img src={b} alt="" />
          <div className="social-icon">
            <a href="https://www.facebook.com/devbelal10/">
            <FaFacebook className="icon facebook" /></a>
<a href="https://wa.me/01568885065">  <FaWhatsapp className="icon whatsapp" /></a>
<a href="https://github.com/coderBelal">
<FaGithub className="icon github" /></a>

</div>
<p>I am a dedicated front-end developer with a passion for crafting intuitive and dynamic user interfaces. My expertise lies in translating design mockups into seamless, responsive websites that provide an optimal user experience across all devices.</p>
        </div>
        <div className="mid">
          <h3>Tweets</h3>
          <div className="info">
            <b className="name">Ahmad Works</b>
            <p className="desc">
              @AppleSupport If you need to know the version number, its 9.2.1
              (13D15)
            </p>
            <p className="title">about 2 month ago</p>
          </div>
          <div className="info">
            <b className="name">Ahmad Works</b>
            <p className="desc">
              @AppleSupport If you need to know the version number, its 9.2.1
              (13D15)
            </p>
            <p className="title">about 2 month ago</p>
          </div>
          <div className="info">
            <b className="name">Ahmad Works</b>
            <p className="desc">
              @AppleSupport If you need to know the version number, its 9.2.1
              (13D15)
            </p>
            <p className="title">about 2 month ago</p>
          </div>
        </div>
        <div className="right">
          <h3>Recent Comment</h3>
          <div className="comment">
            <p>
              John Doe{" "}
              <span>
                Modern Flat With Touch Of Creativity and Gray Patterned Walls
              </span>
            </p>
            <p>
              John Doe{" "}
              <span>
                Modern Flat With Touch Of Creativity and Gray Patterned Walls
              </span>
            </p>
            <p>
              John Doe{" "}
              <span>
                Modern Flat With Touch Of Creativity and Gray Patterned Walls
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
