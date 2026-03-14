"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const imagesCol1 = [
  "/img/gallery/klienci/Buzka.jpg",
  "/img/gallery/klienci/Halina i Mimi.jpg",
  "/img/gallery/klienci/Holly.jpeg",
];
const imagesCol2 = [
  "/img/gallery/klienci/Kofi.jpeg",
  "/img/gallery/klienci/Kreska 2.jpeg",
  "/img/gallery/klienci/Kreska 3.jpeg",
  "/img/gallery/klienci/Kreska.jpeg",
];
const imagesCol3 = [
  "/img/gallery/klienci/Mania i Pedro.jpg",
  "/img/gallery/klienci/Mania.jpg",
  "/img/gallery/klienci/Molly i Badi.jpg",
];
const imagesCol4 = [
  "/img/gallery/klienci/Orion.jpg",
  "/img/gallery/klienci/kokos.jpg",
  "/img/gallery/klienci/kreska.jpg",
];

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section id="galeria" ref={ref} className="relative bg-espresso-900 py-32 overflow-hidden px-4 md:px-8">
      <h2 className="text-center font-serif text-5xl md:text-7xl text-oatmeal-100 mb-20 z-10 relative">
        Nasi Przyjaciele
      </h2>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 h-[120vh] max-w-7xl mx-auto overflow-hidden">
        {/* Col 1 */}
        <motion.div style={{ y: y1 }} className="flex flex-col gap-4 md:gap-8">
          {imagesCol1.map((src, i) => (
            <img key={i} src={src} className="w-full h-auto object-cover rounded-xl shadow-lg aspect-[3/4]" alt="Zadowolony klient zwierzęcy" loading="lazy" />
          ))}
        </motion.div>
        
        {/* Col 2 */}
        <motion.div style={{ y: y2 }} className="flex flex-col gap-4 md:gap-8 mt-12 md:mt-0">
          {imagesCol2.map((src, i) => (
            <img key={i} src={src} className="w-full h-auto object-cover rounded-xl shadow-lg aspect-[4/5]" alt="Zadowolony klient zwierzęcy" loading="lazy" />
          ))}
        </motion.div>
        
        {/* Col 3 */}
        <motion.div style={{ y: y3 }} className="flex flex-col gap-4 md:gap-8">
          {imagesCol3.map((src, i) => (
            <img key={i} src={src} className="w-full h-auto object-cover rounded-xl shadow-lg aspect-[1/1]" alt="Zadowolony klient zwierzęcy" loading="lazy" />
          ))}
        </motion.div>
        
        {/* Col 4 */}
        <motion.div style={{ y: y4 }} className="flex flex-col gap-4 md:gap-8 mt-16 md:mt-24 hidden lg:flex">
          {imagesCol4.map((src, i) => (
            <img key={i} src={src} className="w-full h-auto object-cover rounded-xl shadow-lg aspect-[3/4]" alt="Zadowolony klient zwierzęcy" loading="lazy" />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
