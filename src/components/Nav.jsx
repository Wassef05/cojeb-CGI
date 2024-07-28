import logo from "../img/logo.png";
import { Navbar } from "flowbite-react";

export default function Nav() {
  return (
    <Navbar className="bg-white/80 fixed w-full mt-8 z-10" fluid rounded>
      <Navbar.Brand >
        <img src={logo} className="mr-3 absolute h-20 p-4 bg-white sm:h-32" alt=" Logo" />
      </Navbar.Brand>
      
      <div className="block sm:py-3 justify-end">
      <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link className="text-[#1E1E1E]" href="#" active>
          ACCUEIL
          </Navbar.Link>
          <Navbar.Link className="text-[#1E1E1E]" href="#">A PROPOS</Navbar.Link>
          <Navbar.Link className="text-[#1E1E1E]" href="#">CONTACT</Navbar.Link>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>

        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
