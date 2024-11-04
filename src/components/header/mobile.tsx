import { useState } from "react";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

const mobileLinks = [
  { name: "Pangea for Clients", href: "#" },
  {
    name: "Features",
    href: "#",
    subLinks: [
      { name: "Job Posts", href: "#" },
      { name: "Candidates", hred: "#" },
      { name: "Interviews", href: "#" },
      { name: "Assignments", href: "#" },
      { name: "Invoices", href: "#" },
    ],
  },
  { name: "Benefits", href: "#benefits" },
  {
    name: "Resources",
    href: "#",
    subLinks: [
      { name: "Frequently Asked Questions", href: "#" },
      { name: "Job Description Generator", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
];

export function Mobile() {
  const [activeBtn, setActiveBtn] = useState(0);

  return (
    <div className="h-[80vh] fixed top-16 left-0 lg:hidden right-0 max-h-screen px-4 rounded-lg bg-[#070707b3] backdrop-blur z-50">
      <div className="mt-4 w-full h-full relative ">
        <div className="bg-[#1a1a1b] rounded-lg p-2 w-full flex items-center *:w-full *:text-primary *:font-medium *:text-base">
          {["Talk to us", "Join Now"].map((btn, index) => (
            <Button
              key={index}
              className={`${activeBtn === index ? "bg-[#272729]" : ""}`}
              variant={"ghost"}
              onClick={() => setActiveBtn(index)}
            >
              {btn}
            </Button>
          ))}
        </div>

        <ul className="pt-3 space-y-4">
          {mobileLinks.map((link) => (
            <li key={link.name} className="group">
              <a
                href={link.href}
                className="flex items-center py-2 px-4 font-medium text-xl justify-between"
              >
                <p>{link.name}</p>
                <div className="w-10 h-10 rounded-full grid place-items-center bg-[#ffffff1a]">
                  {link.subLinks ? <Icons.arrowDown /> : <Icons.arrowRight />}
                </div>
              </a>

              {link.subLinks && (
                <ul className="space-y-5 hidden overflow-hidden transition-all duration-300 ease-in-out group-hover:block mt-7 mb-6 ">
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.name}>
                      <a
                        href={subLink.href}
                        className="py-2 px-4 font-medium text-xl"
                      >
                        {subLink.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
