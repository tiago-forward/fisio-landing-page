"use client";

import { MobileMenu } from "./MobileMenu";
import { navigationLinks } from "../../constants/navigationLinks";
import { socialMediaLinks } from "../../constants/socialMediaLinks";
import Logo from "../../assets/logos/Marca D_água-06.png";

export const Header = () => {
  return (
    <>
      <header className="w-full flex flex-col items-center justify-center transition-colors duration-300 bg-opacity-15 bg-white shadow-lg">
        {/* <div className="w-full border bg-bg-secondary">
          <nav className="max-w-6xl m-auto flex items-center justify-between px-4 py-1">
            <div></div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum vero
              iste fugit nobis quo beatae consequuntur
            </p>
            <div></div>
          </nav>
        </div> */}
        <div className="w-full max-w-7xl px-4 flex justify-between items-center gap-2">
          {/* <Link href={"#home"}></Link> */}
          <div className="overflow-hidden">
            <img
              src={Logo}
              alt="Logo"
              width={500}
              height={160}
              className="overflow-hidden"
            />
          </div>
          <nav className="hidden max-w-6xl lg:flex lg:flex-1 lg:items-center lg:justify-center gap-8">
            <ul className="flex items-center gap-4 text-xl uppercase text-txt-tertiary font-actioness font-bold">
              {navigationLinks.map((link) => (
                <li
                  key={link.id}
                  className="font-bold tracking-wide duration-300"
                >
                  <a href={link.url} aria-label={link.label} role="navigation">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="hidden lg:flex">
            <ul className="flex items-center justify-center gap-2">
              {socialMediaLinks.map((link) => (
                <li
                  key={link.id}
                  className="duration-300 rounded-full border border-white p-1 hover:opacity-70"
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
          <MobileMenu />
        </div>
      </header>
    </>
  );
};
