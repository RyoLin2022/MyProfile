import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../layout/Navbarlawyer';
import Hero from '../section/heroLawyer';
import About from '../section/aboutLawyer';
import Blockquote from '../section/blockquoteLawyer';
import Whatido from '../section/whatidoLawyer';
import Team from '../section/team';
import Resume from '../section/resume';
import Counter from '../section/counterLawyer';
import Blog from '../section/blogLawyer';
import Contact from '../section/contactLawyer';
import Footer from '../section/footer';
import Preloader from "../layout/Preloader";
import ScrollToTopBtn from '../layout/ScrollToTop';
import { GlobalStyles } from './style/lawyer';

const image1 ="./img/background/7.jpg";

function home() {
  return (
    <>
    <GlobalStyles/>
    <Preloader/>
    <div className="home">

      <header id="header-wrap">
        <Navbar />
      </header>

      {/* HERO */}
      <section id="hero-area" className="bg-bottom py-0">
        <Parallax bgImage={image1} strength={300}>
        <Hero/>
        <Link smooth spy to="about">
          <span className="mouse transition" id="fly">
              <span className="scroll"></span>
          </span>
        </Link>
        </Parallax>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-0">
        <About/>
      </section>

      {/* What I DO */}
      <section id="whatido">
        <Whatido/>
        <Blockquote/>
      </section>

      {/* Team */}
      <section id="gallery" className="pb-0">
        <Team/>
      </section>

      {/* Gallery */}
      <section id="resume" className="pb-0">
        <Resume/>
        <Counter/>
      </section>

      {/* Gallery */}
      <section id="blog" className="pb-0">
        <Blog/>
      </section>

      {/* contact */}
      <section id="contact" className="pb-0">
        <Contact/>
        <Footer/>
      </section>

      


      <div className="float-text">
          <div className="de_social-icons">
              <span className="buton"><i className="fa fa-facebook fa-lg"></i></span>
              <span className="buton"><i className="fa fa-twitter fa-lg"></i></span>
              <span className="buton"><i className="fa fa-instagram fa-lg"></i></span>
          </div>
          <span>Follow Me</span>
      </div>
    </div>
    <ScrollToTopBtn />
    </>
  );
}

export default home;
