"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { clsx } from "clsx";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setAtTop(latest < 50);
  });

  const links = [
    { name: "O mnie", href: "#o-mnie" },
    { name: "Usługi", href: "#uslugi" },
    { name: "Galeria", href: "#galeria" },
    { name: "Opinie", href: "#opinie" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={clsx(
        "fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-300",
        atTop ? "bg-transparent text-oatmeal-50" : "bg-oatmeal-100/90 text-espresso-900 backdrop-blur-md shadow-sm"
      )}
    >
      <div className="flex items-center">
        <a href="#hero" className="flex items-center drop-shadow-md">
           <img src="/img/logo.png" alt="Logo" className={clsx("w-32 md:w-48 transition-all duration-300", atTop ? "brightness-100" : "brightness-[0.2]")} />
        </a>
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-serif text-lg tracking-wide">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-sage-500 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>

      <a 
        href="#kontakt"
        className={clsx(
          "px-6 py-2 rounded-full font-serif transition-colors",
          atTop 
            ? "border border-oatmeal-50 hover:bg-oatmeal-50 hover:text-espresso-900" 
            : "bg-sage-500 text-oatmeal-50 hover:bg-sage-700 shadow-md"
        )}
      >
        Rezerwacja
      </a>
    </motion.nav>
  );
}
