import { Link } from "react-router-dom";
import Container from "./Container";
import { Button, NavLink } from "../atoms";
import LogoBantenTourism from "../../images/logo-bantentourism.png";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useState } from "react";
import classNames from "classnames";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      title: "Beranda",
      href: "/",
    },
    {
      title: "Wisata",
      href: "/wisata",
    },
    {
      title: "Budaya",
      href: "/budaya",
    },
    {
      title: "Kuliner",
      href: "/kuliner",
    },
    {
      title: "Berita",
      href: "/berita",
    },
    {
      title: "Tentang",
      href: "/tentang",
    },
  ];

  return (
    <>
      <nav className="py-8">
        <Container className="flex justify-between items-center">
          <Link to="/">
            <img src={LogoBantenTourism} alt="logo-banten-tourism" width={70} />
          </Link>
          <ul className="space-x-5 lg:space-x-10 hidden md:flex">
            {links.map((link, index) => (
              <NavLink key={index} title={link.title} href={link.href} />
            ))}
          </ul>
          <Button
            className="md:hidden"
            color="primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars size={20} />
          </Button>
        </Container>
      </nav>
      <div
        className={classNames(
          "md:hidden fixed bg-white-50 top-0 z-20 h-full w-full px-8 py-9",
          { "right-0": isOpen, "-right-full": !isOpen }
        )}
      >
        <div className="absolute right-10">
          <Button color="primary" onClick={() => setIsOpen(!isOpen)}>
            <FaX size={20} />
          </Button>
        </div>
        <ul className="lg:space-x-10 space-y-5 text-xl">
          {links.map((link, index) => (
            <NavLink
              key={index}
              title={link.title}
              href={link.href}
              onClick={() => setIsOpen(!isOpen)}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
