"use client";

import { motion } from "framer-motion";


const services = [
  { title: "Spacery z psem", img: "/img/gallery/dog-walk.jpg", desc: "Zrozumienie mowy ciała i eksploracja otoczenia we własnym tempie" },
  { title: "Zabawa i koty", img: "/img/gallery/cat-visit.jpg", desc: "Karmienie, zabawa wędek i pełny relaks mruczka w swoim domu" },
  { title: "Egzotyka / Gady", img: "/img/gallery/exotic.jpg", desc: "Profesjonalna obsługa terrariów, odpowiednie podawanie pokarmu" },
  { title: "Medykamenty", img: "/img/gallery/medicine.jpg", desc: "Pewna ręka, iniekcje, tabletki - by Twój zwierzak wracał do zdrowia" },
  { title: "Housesitting", img: "/img/gallery/housesitting.jpg", desc: "Całodobowa opieka w Twoim domu. Poczucie bezpieczeństwa i rutyny." },
  { title: "Mały Hotel Wesoła", img: "/img/gallery/hotel.jpg", desc: "Domowy kącik dla gryzoni, zajęcy i ptaków z profesjonalną opieką" },
];

export function Services() {
  return (
    <section id="uslugi" className="relative py-32 bg-oatmeal-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 xl:px-24 flex flex-col pt-10">
        <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl mb-16 text-espresso-900 border-b border-espresso-900/10 pb-4">
          Nasze Usługi
        </h2>

        <div className="flex flex-col relative z-20">
          {services.map((item, i) => (
            <motion.div
              key={i}
              className="group relative flex flex-col md:flex-row items-center justify-between border-b border-espresso-900/10 py-10 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl transition-colors duration-500 w-full md:w-auto text-left relative z-20 group-hover:text-sage-700">
                {item.title}
              </h3>
              
              {/* Desktop view */}
              <div className="hidden md:block w-1/3 relative z-20">
                <p className="text-xl text-espresso-800 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.desc}
                </p>
              </div>

              {/* Mobile view */}
              <motion.div 
                className="md:hidden w-full relative z-20 overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: "auto", opacity: 1 }}
                viewport={{ once: false, margin: "-15%" }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg text-espresso-800 text-left pt-4">
                  {item.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
