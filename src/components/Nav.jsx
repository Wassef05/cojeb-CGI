import logo from "../img/logo.png";
import { Navbar } from "flowbite-react";

export default function Nav() {
  return (
    <Navbar className="bg-white/80 fixed w-full mt-8 z-10" fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={logo} className="mr-3 absolute h-20 p-4 bg-white sm:h-32" alt="Flowbite React Logo" />
      </Navbar.Brand>
      
      <div className="block sm:py-3 justify-end">
      <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">
            About
          </Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
