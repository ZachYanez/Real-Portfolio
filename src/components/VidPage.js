import React from "react";
import Video1 from "./Videos/Video1";
import Video2 from "./Videos/Video2";
import Video3 from "./Videos/Video3";
import Video4 from "./Videos/Video4";
import Video5 from "./Videos/Video5";
import Video6 from "./Videos/Video6";
import Video7 from "./Videos/Video7";
import Video8 from "./Videos/Video8";
import Video9 from "./Videos/Video9";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function VidPage() {
  return (
    <div className="background">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Z</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <NavDropdown title="Resumes" id="collasible-nav-dropdown">
              <NavDropdown.Item
                target="_blank"
                href="https://docs.google.com/document/d/1G01xAHsiJRkWq-Ug-UA_B2KY-wJ0AABOxLXmicG0iYI/edit?usp=sharing"
              >
                Standard Resume
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://drive.google.com/file/d/1UYyQI0CRbvNmUQnuC86onmz4mer0Jhsg/view?usp=sharing"
              >
                Entertainment Resume
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Where to Find Me" id="collasible-nav-dropdown">
              <NavDropdown.Item target="_blank" href="https://www.linkedin.com/in/zachary-yanez/">
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="http://www.brownagency.co/commercial/men/1114-zach-yanez/">
                Brown Agency
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.instagram.com/zach_on_drums/">
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://www.westlakelessons.com/zachary-yanez#:~:text=Zach%20Yanez%20is%20a%20highly,classical%20percussion%20and%20drum%20set."
              >
                Westlake Lessons
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://github.com/ZachYanez">
                Github
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Gallery">Gallery</Nav.Link>
            <Nav.Link className="staticLink" href="#VidPage">
              Videos
            </Nav.Link>
            <Nav.Link href="#Published">Published</Nav.Link>
            <Nav.Link href="#Webdev">Web Development</Nav.Link>
            <Nav.Link href="#PrivacyPolicy">PrivacyPolicy</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="mailto:zachyanez@gmail.com">Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <Video7 />
        <Video1 />
        <Video2 />
        <Video3 />
        <Video8 />
        <Video4 />
        <Video5 />
        <Video6 />
        <Video9 />
      </div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Z</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="mailto:zachyanez@gmail.com">Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
