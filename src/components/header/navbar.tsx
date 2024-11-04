import { useState } from "react";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { Mobile } from "./mobile";

const links = [
  { name: "Features", href: "#features" },
  { name: "Why Scobby", href: "#why-us" },
  { name: "Benefits", href: "#benefits" },
  { name: "Chart", href: "#join-scooby" },
];

export function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <header className="h-20 max-sm:h-[4.5rem] w-full relative">
      <nav className="fixed w-full h-[inherit] top-0 py-3 px-4 md:px-8 sm:py-4 lg:px-6 z-50 border border-white/10 max-sm:bg-[#0E0E0ECC] backdrop-blur-md">
        <div className="w-full h-full wrapper">
          <div className="flex items-center justify-between w-full h-full">
            <a href="/" className="flex items-center gap-3">
              {/* <Icons.logo /> */}
              <img
                src="/logo.png"
                alt=""
                className="w-8 h-8 md:w-12 md:h-12 rounded-full"
              />
              <span className="font-semibold text-white text-base md:text-2xl tracking-[0.24px]">
                Scooby
              </span>
            </a>

            <ul className="items-center gap-5 absolute left-1/2 -translate-x-1/2 hidden min-[1024px]:flex">
              {links.map((link) => (
                <li
                  className="block place-items-center place-content-center rounded-lg border border-transparent hover:border-border hover:bg-[#0e0e0ebf] duration-300 transition-[background-color,border-color] font-semibold p-3"
                  key={link.name}
                >
                  <a
                    href={link.href}
                    className="font-semibold text-white text-base tracking-[0.24px]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <a href="/" className="">
                  <Icons.twitter className="w-6 h-6 duration-300 md:h-8 md:w-8 hover:scale-105 text-primary" />
                </a>
                <a
                  href="https://t.me/scoobyincubates"
                  target="_blank"
                  rel="noreferrer,noopener"
                  className=""
                >
                  <Icons.telegram className="w-6 h-6 duration-300 md:h-8 md:w-8 hover:scale-105 text-primary" />
                </a>
              </div>

              <div className="w-px h-12 opacity-20 hidden md:block bg-[#D9DDE9]" />
              <a
                href="https://t.me/scoobyincubates"
                target="_blank"
                rel="noreferrer,noopener"
              >
                {" "}
                <Button className="max-[1024px]:hidden">Join Now</Button>
              </a>

              <Button
                variant={"outline"}
                size={"icon"}
                className="min-[1024px]:hidden"
                onClick={() => setOpenMobileMenu(!openMobileMenu)}
              >
                {openMobileMenu ? <Icons.close /> : <Icons.menu />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {openMobileMenu && <Mobile />}
    </header>
  );
}
