"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Caretaker() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="o-mnie" ref={ref} className="relative w-full bg-oatmeal-100 py-24 md:py-32 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-start">
        
        {/* Sticky Image Side */}
        <div className="w-full md:w-5/12 h-[60vh] md:h-[80vh] md:sticky md:top-24 rounded-2xl overflow-hidden shadow-2xl relative">
          <motion.div 
            className="absolute inset-0 w-full h-[120%]"
            style={{ y: imgY }}
          >
            <img 
              src="/img/magda-about.jpg" 
              alt="Magda, The Caretaker" 
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          <div className="absolute inset-0 bg-espresso-900/20 mix-blend-overlay" />
        </div>

        {/* Scrolling Content Side */}
        <div className="w-full md:w-7/12 flex flex-col justify-center space-y-12">
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-6xl text-espresso-900 leading-tight">
              Opieka z <span className="text-sage-500 italic">pasją</span> i <span className="text-sage-500 italic">doświadczeniem</span>.
            </h2>
            <div className="h-0.5 w-24 bg-sage-500" />
            <p className="text-xl leading-relaxed text-espresso-800">
              Nazywam się Magda i oddaję się profesjonalnej, dedykowanej opiece nad zwierzętami, rozumiejąc ich indywidualne potrzeby, lęki i pragnienia.
            </p>
          </div>

          <div className="space-y-8">
             <div className="bg-oatmeal-50 p-8 rounded-2xl shadow-sm border border-oatmeal-200">
               <h3 className="font-serif text-2xl mb-4 text-espresso-900">Psy, Koty i Egzotyka</h3>
               <p className="text-espresso-800 leading-relaxed">
                 Mam wieloletnie doświadczenie z nieśmiałymi i lękowymi psami oraz niezależnymi kotami. Rozumiem mowę ich ciała. Specjalizuję się również w zwierzętach egzotycznych: terrarystycznych, papugach oraz wszelkich gryzoniach. 
               </p>
             </div>

             <div className="bg-sage-500 text-oatmeal-50 p-8 rounded-2xl shadow-md">
               <h3 className="font-serif text-2xl mb-4">Medycyna & Zdrowie</h3>
               <p className="leading-relaxed opacity-90">
                 Administruję leki (w tym iniekcje, krople i tabletki) – Twój zwierzak z problemami zdrowotnymi jest w bezpiecznych, kompetentnych rękach.
               </p>
             </div>

             <div className="bg-oatmeal-50 p-8 rounded-2xl shadow-sm border border-oatmeal-200">
               <h3 className="font-serif text-2xl mb-4 text-espresso-900">Domowy Hotel - Wesoła</h3>
               <p className="text-espresso-800 leading-relaxed">
                 Oferuję pobyt dla mniejszych zwierząt (gryzonie, ptaki) w przytulnym, spokojnym środowisku na warszawskiej Wesołej, z pełnym dostępem do opieki weterynaryjnej w pobliżu.
               </p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
