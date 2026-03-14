"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const quotes = [
  "„Najlepsza opiekunka, po powrocie pies był w lepszej formie niż przed urlopem!”",
  "„Magda ma super pojęcie, cierpliwość i co najważniejsze, wspaniałe podejście.”",
  "„Mój kot nie dał się dotknąć nikomu. Magda zdobyła jego zaufanie w trzy dni.”",
  "„Nigdy nie widziałam tak zaangażowanej i kompetentnej osoby, jeśli chodzi o leki.”",
  "„Domowy hotel dla gryzoni to rewelacja. Świnka morska szczęśliwa!”"
];

export function Testimonials() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="opinie" className="relative py-24 md:py-40 bg-sage-500 overflow-hidden text-oatmeal-50 border-t border-oatmeal-100/20">
      <div className="absolute inset-0 opacity-10 blur-3xl rounded-full bg-oatmeal-100 scale-150 transform translate-y-1/2" />
      
      {mounted && (
        <div className="relative z-10 flex flex-nowrap overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 120,
              repeat: Infinity,
            }}
          >
            {[...quotes, ...quotes, ...quotes, ...quotes].map((quote, i) => (
              <p 
                key={i} 
                className="font-serif text-5xl md:text-7xl lg:text-8xl mx-16 opacity-90 tracking-wide"
              >
                {quote}
              </p>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}
