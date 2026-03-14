"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer id="kontakt" className="bg-espresso-900 text-oatmeal-100 py-32 relative z-50 rounded-t-[3rem] -mt-10 overflow-hidden shadow-[0_-20px_40px_rgba(0,0,0,0.2)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-24">
          
          {/* Text/Info Side */}
          <div className="flex flex-col space-y-10">
            <div>
              <h2 className="font-serif text-5xl md:text-7xl mb-4 leading-none">Zaopiekujmy<br/>się Twoim <span className="text-sage-500 italic">pupilem</span>.</h2>
              <p className="text-xl md:text-2xl opacity-80 font-light mt-6 max-w-md">
                Zapytaj o wolny termin, by zagwarantować profesjonalną opiekę.
              </p>
            </div>
            
            <div className="flex flex-col space-y-4">
               <div>
                 <p className="text-sm uppercase tracking-widest text-sage-300">Email</p>
                 <a href="mailto:kontakt@porzeczkapetsitter.pl" className="text-2xl font-serif hover:text-sage-300 transition-colors">
                   kontakt@porzeczkapetsitter.pl
                 </a>
               </div>
               <div>
                 <p className="text-sm uppercase tracking-widest text-sage-300">Telefon</p>
                 <a href="tel:+48123456789" className="text-2xl font-serif hover:text-sage-300 transition-colors">
                   +48 123 456 789
                 </a>
               </div>
               <div>
                 <p className="text-sm uppercase tracking-widest text-sage-300">Lokalizacja</p>
                 <p className="text-2xl font-serif">Warszawa Wesoła / Dojazd</p>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-espresso-800 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
             {/* Decorative element */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-sage-700/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

             <form className="flex flex-col space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
               <div className="flex flex-col md:flex-row gap-6">
                 <div className="flex flex-col w-full space-y-2">
                   <label className="text-xs uppercase tracking-widest opacity-60">Imię i Nazwisko</label>
                   <input type="text" className="bg-transparent border-b border-oatmeal-100/30 pb-2 outline-none focus:border-sage-500 transition-colors placeholder-oatmeal-100/20" placeholder="Jan Kowalski" />
                 </div>
                 <div className="flex flex-col w-full space-y-2">
                   <label className="text-xs uppercase tracking-widest opacity-60">Twój Zwierzak</label>
                   <input type="text" className="bg-transparent border-b border-oatmeal-100/30 pb-2 outline-none focus:border-sage-500 transition-colors placeholder-oatmeal-100/20" placeholder="Pies / Kot / Inne" />
                 </div>
               </div>

               <div className="flex flex-col space-y-2">
                 <label className="text-xs uppercase tracking-widest opacity-60">Usługa i Preferowane daty</label>
                 <input type="text" className="bg-transparent border-b border-oatmeal-100/30 pb-2 outline-none focus:border-sage-500 transition-colors placeholder-oatmeal-100/20" placeholder="np. Spacery, 12-19 Sierpnia" />
               </div>

               <div className="flex flex-col space-y-2">
                 <label className="text-xs uppercase tracking-widest opacity-60">Twoja Wiadomość</label>
                 <textarea rows={3} className="bg-transparent border-b border-oatmeal-100/30 pb-2 outline-none focus:border-sage-500 transition-colors resize-none placeholder-oatmeal-100/20" placeholder="Opowiedz mi krótko o potrzebach Twojego pupila..." />
               </div>

               <motion.button 
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 className="mt-4 bg-sage-500 text-oatmeal-50 font-serif text-xl py-4 rounded-xl hover:bg-sage-700 transition-colors shadow-lg"
               >
                 Wyślij Zapytanie
               </motion.button>
             </form>
          </div>
        </div>

        <div className="border-t border-oatmeal-100/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm opacity-50">
          <p>© {new Date().getFullYear()} Porzeczka Petsitter. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-sage-300">Facebook</a>
            <a href="#" className="hover:text-sage-300">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
