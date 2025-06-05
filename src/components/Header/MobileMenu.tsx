import { useState } from "react";
import MenuHamburger1 from "../Icons/MenuHamburger1";
import Xmark from "../Icons/Xmark";

import { navigationLinks } from "../../constants/navigationLinks";
import { socialMediaLinks } from "../../constants/socialMediaLinks";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={handleToggleMenu}
        className=""
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <Xmark /> : <MenuHamburger1 />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity z-40"
          onClick={handleToggleMenu}
        ></div>
      )}

      <aside
        className={`fixed top-0 right-0 w-9/12 max-w-sm h-screen bg-bg-primary z-50 shadow-xl transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <header className="w-full flex items-center justify-between h-24 border-b-2 border-bg-secondary ">
          <a onClick={handleNavLinkMenu} href={"#"}>
            <span className="pl-2 font-bold uppercase">Tecilia Santos</span>
          </a>

          <button
            onClick={handleToggleMenu}
            className="px-4"
            aria-label="Fechar menu"
          >
            <Xmark />
          </button>
        </header>

        <nav
          className="flex flex-col flex-1 items-end justify-center gap-4 mt-4 pr-4"
          role="navigation"
        >
          <ul className="flex flex-col items-end gap-4">
            {navigationLinks.map((link) => (
              <li
                key={link.id}
                className="font-bold tracking-widest duration-300 uppercase text-lg text-txt-secondary"
              >
                <a href={link.url} aria-label={link.label} role="navigation">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* <a
            onClick={handleNavLinkMenu}
            href={"/contact"}
            className="flex items-center gap-2 text-md font-semibold border rounded-sm py-1 px-2"
          >
            Fale conosco
          </a> */}
          <ul className="flex items-center justify-center gap-2">
            {socialMediaLinks.map((link) => (
              <li
                key={link.id}
                className="duration-300 rounded-full border border-bg-secondary p-1 hover:opacity-70"
              >
                <a
                  href={link.url}
                  target="_blank"
                  aria-label={link.label}
                  title={link.label}
                >
                  {link.icon && <link.icon />}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};
