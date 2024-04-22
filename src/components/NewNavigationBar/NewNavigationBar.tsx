import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { OffCanvasNavBody } from "../Navigation/Navigation";
import "./NewNavigationBar.css";

function NewNavigationBar() {
  let navCollapsed = false;

  if (window.innerWidth < 992) {
    navCollapsed = true;
  }

  return (
    <Navbar expand="lg" className="custom-navbar-new fixed-top" variant="dark">
      <Container fluid>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-md`}
          className="ms-auto"
        />
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
          {!navCollapsed ? (
            <Offcanvas.Body
              style={
                navCollapsed
                  ? { backgroundColor: "#131d26" }
                  : {
                      background: "transparent",
                      justifyContent: "center",
                    }
              }
            >
              <Nav className="nav-links-container">
                <p
                  className="nav-link-new"
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
                  className="nav-link-new"
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
                  className="nav-link-new"
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
                  className="nav-link-new"
                  onClick={() => {
                    const element = document.getElementById("experience");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {"// experience"}
                </p>
                <p
                  className="nav-link-new"
                  onClick={() => {
                    const element = document.getElementById("experience");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {"// contact"}
                </p>
              </Nav>
            </Offcanvas.Body>
          ) : (
            <OffCanvasNavBody />
          )}
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NewNavigationBar;
