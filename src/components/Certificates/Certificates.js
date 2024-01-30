import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Certificates.scss";
import Angular from "../../assets/certificates/Angular.png";
import ReactJs from "../../assets/certificates/ReactJs.png";
import HTMLandCSS from "../../assets/certificates/HTMLandCss.png";
import JSAdvanced from "../../assets/certificates/JSAdvanced.png";
import JSApplications from "../../assets/certificates/JSApplications.png";
import ProgrammingBasics from "../../assets/certificates/ProgrammingBasics.png";
import SCSS from "../../assets/certificates/SCSS.png";
import IcomoonReact from "icomoon-react";
import iconSet from "../../assets/selection.json";

export function Certificates() {
  return (
    <section id="certificates" className="container__certificates">
      <h1 className="container__certificates-heading-text">Certificates</h1>
      <div className="container__certificates-part">
        <Carousel width={"80%"} showThumbs={false} infiniteLoop={true}>
          <div>
            <img src={Angular} alt="certificate 1" />
          </div>
          <div>
            <img src={ReactJs} alt="certificate 2" />
          </div>
          <div>
            <img src={ProgrammingBasics} alt="certificate 7" />
          </div>
          <div>
            <img src={JSApplications} alt="certificate 3" />
          </div>
          <div>
            <img src={JSAdvanced} alt="certificate 4" />
          </div>
          <div>
            <img src={HTMLandCSS} alt="certificate 5" />
          </div>
          <div>
            <img src={SCSS} alt="certificate 6" />
          </div>
        </Carousel>

        <div className="container__certificates-profits">
          <p className="container__certificates-text-p">
            All the certificates doesn't make sense if we are not disciplined
            and have the passion to learn and practice more and more. That's why
            I follow these simple rules:
          </p>

          <div className="container__certificates-profits-icons">
            <div className="container__certificates-profit-item">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={20}
                icon="book"
              ></IcomoonReact>
              <p>Read documentation and code</p>
            </div>
            <div className="container__certificates-profit-item">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={20}
                icon="pencil2"
              ></IcomoonReact>
              <p>Practice </p>
            </div>
            <div className="container__certificates-profit-item">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={20}
                icon="keyboard"
              ></IcomoonReact>
              <p>Writing code everyday</p>
            </div>
            <div className="container__certificates-profit-item">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={20}
                icon="cogs"
              ></IcomoonReact>
              <p>Use librabries</p>
            </div>
            <div className="container__certificates-profit-item">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={20}
                icon="terminal"
              ></IcomoonReact>
              <p>Learn from the seniors</p>
            </div>
            <div className="container__certificates-profit-item">
              <IcomoonReact
                iconSet={iconSet}
                color="#00db00"
                size={20}
                icon="safari"
              ></IcomoonReact>
              <p>Solve problems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
