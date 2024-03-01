import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./NewNavigationBar.css";

function NewNavigationBar() {
  let navCollapsed = false;

  if (window.innerWidth < 770) {
    navCollapsed = true;
  }

  return (
    <Navbar expand="md" className="custom-navbar-new fixed-top" variant="dark">
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
          <Offcanvas.Body
            style={
              navCollapsed
                ? { backgroundColor: "#131d26" }
                : { background: "transparent" }
            }
          >
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <p
                className="nav-link-new"
                onClick={() => {
                  const element = document.getElementById("home");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                // home
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
                // expertise
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
                // work
              </p>
              <p
                className="nav-link-new"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                // contact
              </p>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NewNavigationBar;
