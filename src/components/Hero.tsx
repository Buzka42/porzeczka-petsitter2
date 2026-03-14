"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative w-full h-[100svh] overflow-hidden"
    >
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover object-center"
        >
          <source src="/vid/herovid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-espresso-900/30" />
      </motion.div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-oatmeal-50 tracking-wide mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Porzeczka Petsitter
        </motion.h1>

        <motion.p 
          className="text-lg md:text-2xl text-oatmeal-100 max-w-2xl font-light tracking-wide bg-espresso-900/10 px-6 py-2 rounded-full backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Premium Pet Care
        </motion.p>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-oatmeal-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-sm uppercase tracking-widest">Odkryj</span>
        <div className="w-px h-12 bg-gradient-to-b from-oatmeal-100 to-transparent" />
      </motion.div>
    </section>
  );
}
