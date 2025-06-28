// import React from 'react'

// const Navbar = () => {
//   return (
//     <Navbar className="bg-body-tertiary justify-content-between">
//       <Form inline>
//         <InputGroup>
//           <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
//           <Form.Control
//             placeholder="Username"
//             aria-label="Username"
//             aria-describedby="basic-addon1"
//           />
//         </InputGroup>
//       </Form>
//       <Form inline>
//         <Row>
//           <Col xs="auto">
//             <Form.Control
//               type="text"
//               placeholder="Search"
//               className=" mr-sm-2"
//             />
//           </Col>
//           <Col xs="auto">
//             <Button type="submit">Submit</Button>
//           </Col>
//         </Row>
//       </Form>
//     </Navbar>
//   )
// }

// export default Navbar

"use client";
import { useState } from "react";
import { useGSAP } from '@gsap/react'
import { Menu, X } from "lucide-react"; // optional icon lib
import gsap from "gsap";

const Navbar = () => {

    useGSAP(() => {
        gsap.to('#logo', {
            x: 20,
            repeat: -1,
            yoyo: true,
            ease: 'bounce.in',
            duration: 2,
        })

    }, [])  
  const [open, setOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md" id="gsap-box">
      {/* GSAP Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600" id="logo"> ✨ MamtaDev </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-600 font-medium ms-20">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={`#${link.toLowerCase()}`}
              className="hover:text-indigo-600 transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-gray-600 hover:text-indigo-600"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}

    </header>
  );
};

export default Navbar;
