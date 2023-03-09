import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  OverlayTrigger,
  Image,
  Popover,
  Button,
} from "react-bootstrap";
import ProfileToolTip from "./ProfileToolTip";

// import { Cart } from "react-bootstrap-icons";

const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">profile</Popover.Header>
      <Popover.Body>
        <Button onClick={() => setIsLogedIn((prev) => !prev)}>Logout</Button>
      </Popover.Body>
    </Popover>
  );
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>BookStore</Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {isLogedIn ? (
            <Nav>
              <Nav.Link
                href="#signIn"
                onClick={() => setIsLogedIn((prev) => !prev)}
              >
                Sign-In
              </Nav.Link>
              <Nav.Link
                href="#signIn"
                onClick={() => setIsLogedIn((prev) => !prev)}
              >
                Register
              </Nav.Link>
            </Nav>
          ) : (
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
            >
              <Image
                roundedCircle
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETtEUw-If3qwF6J_Q73SwKHZHKcHMz5xjjaUFIIReYw&s"
                width={36}
                height={36}
              />
            </OverlayTrigger>
          )}
          {/* <Cart /> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
