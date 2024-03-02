import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navigation.css";

function Navigation() {
  let navCollapsed = false;

  if (window.innerWidth <= 990) {
    navCollapsed = true;
  }

  return (
    <Navbar expand="lg" className="custom-navbar sticky-top" variant="dark">
      <Container fluid>
        <Navbar.Brand
          onClick={() => {
            const element = document.getElementById("home");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          style={{ cursor: "pointer" }}
        >
          {!navCollapsed && (
            <span
              style={{ color: "#66c8e3", fontSize: "22px", display: "inline" }}
            >
              MarcoFreemantle
              <span style={{ color: "white", fontSize: "26px" }}>.</span>
              <span style={{ color: "#bc77ed", fontSize: "26px" }}>_</span>
            </span>
          )}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header
            closeButton
            style={
              navCollapsed
                ? { backgroundColor: "#131d26" }
                : { background: "transparent" }
            }
          >
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-md`}
              style={{ color: "aliceblue" }}
            >
              MarcoFreemantle._
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body
            style={
              navCollapsed
                ? { backgroundColor: "#131d26" }
                : { background: "transparent" }
            }
          >
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <p
                className="nav-link"
                onClick={() => {
                  const element = document.getElementById("home");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {"// home"}
              </p>
              <p
                className="nav-link"
                onClick={() => {
                  const element = document.getElementById("expertise");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {"// expertise"}
              </p>
              <p
                className="nav-link"
                onClick={() => {
                  const element = document.getElementById("work");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {"// work"}
              </p>
              <p
                className="nav-link"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {"// experience"}
              </p>
              <p
                className="nav-link"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {"// contact"}
              </p>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;
