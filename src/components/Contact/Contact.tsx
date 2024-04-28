import Accordion from "react-bootstrap/Accordion";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="left-contact-container" id="experience">
        <h2 className="contact-title">Professional Experience</h2>
        <Accordion defaultActiveKey="0" className="accordion">
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <div className="accordion-header-div">
                <p style={{ marginBottom: "0%" }}>
                  Software Intern @ Media Advancements
                </p>
                {window.innerWidth > 600 && (
                  <p style={{ marginBottom: "0%", marginRight: "10px" }}>
                    2024-2024
                  </p>
                )}
              </div>
            </Accordion.Header>
            <Accordion.Body>
              After completing my studies, I pursued practical experience and
              worked as a software engineer at Media Advancements. In this role,
              I actively contributed to their extensive codebase. My tasks
              encompassed TypeScript programming, collaborating with back-end
              APIs, debugging and writing tests. I was able to apply my
              knowledge of computer science to real-world problems and develop
              my skills as a software engineer.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <div className="accordion-header-div">
                <p style={{ marginBottom: "0%" }}>
                  Computing & IT @ The Open University
                </p>
                {window.innerWidth > 600 && (
                  <p style={{ marginBottom: "0%", marginRight: "10px" }}>
                    2020-2023
                  </p>
                )}
              </div>
            </Accordion.Header>
            <Accordion.Body>
              During my time as a computer science student at The Open
              University, I excelled academically and graduated with a
              first-class honors degree. I cultivated a robust understanding of
              object-oriented programming, data structures, algorithms, and web
              technologies. I also developed a strong foundation in mathematics,
              computer science theory and problem solving.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div className="accordion-header-div">
                <p style={{ marginBottom: "0%" }}>
                  Professional Musician @ Onyx
                </p>
                {window.innerWidth > 600 && (
                  <p style={{ marginBottom: "0%", marginRight: "10px" }}>
                    2018-Current
                  </p>
                )}
              </div>
            </Accordion.Header>
            <Accordion.Body>
              As the founder of Onyx Party Band, I've led our successful
              show-band for over six years, managing logistics and performances
              with precision. Our clientele includes organizations like NSPCC,
              St. Gemma’s Hospice, Spire Healthcare, and The British Army.
              Spearheading business development, I've expanded our reach and
              reputation. I oversee all aspects of performances and client
              interactions, ensuring seamless execution and satisfaction.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="right-contact-container" id="contact">
        <div>
          <h2 className="contact-title">
            Available for work and open to new opportunities
          </h2>
          <p className="contact-description">
            Send me an email or contact me via one of the following links!
          </p>
        </div>
        <div style={{ width: "100%" }}>
          <p className="contact-method">
            <a href="mailto:marcofreemantle@gmail.com" className="contact-link">
              marcofreemantle@gmail.com
            </a>
          </p>
          <p className="contact-method">
            <a
              href="https://www.linkedin.com/in/marco-freemantle-9a7185305/"
              className="contact-link"
            >
              LinkedIn
            </a>
          </p>
          <p className="contact-method">
            <a
              href="https://github.com/marco-freemantle"
              className="contact-link"
            >
              GitHub
            </a>
          </p>
          <p className="contact-method">
            <a
              href={require("../../Marco Freemantle CV.pdf")}
              className="contact-link"
            >
              CV
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
