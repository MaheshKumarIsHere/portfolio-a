import "./home.scss";
import Intro from "../../components/intro/Intro";
import Topbar from "../../components/topbar/Topbar";
import Works from "../../components/works/Works";
import Contact from "../../components/contact/Contact";
import Portfolio from "../../components/portfolio/Portfolio";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Topbar />
      <div className="intro-section section-intro" id="intro">
        <Intro />
      </div>
      <div className="intro-section section-portfolio" id="portfolio">
        <Portfolio />
      </div>
      <div className="intro-section section-works" id="works">
        <Works />
      </div>
      <div className="intro-section section-testimonial" id="testimonials">
        <Testimonials />
      </div>
      <div className="intro-section section-contact" id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
