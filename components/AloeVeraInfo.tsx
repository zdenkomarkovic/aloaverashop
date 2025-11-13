"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Leaf, Droplets, Sun, Heart, Sparkles, Shield } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AloeVeraInfo() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-400 mb-6">
            Aloe Vera Biljka
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prava riznica lekovitih sastojaka koja se koristi hiljadama godina
            za zdravlje i lepotu
          </p>
        </motion.div>

        {/* Origin Section */}
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/aloe-vera-plant.jpg"
              alt="Aloe Vera biljka"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-emerald-400 mb-4">
              <Sun className="w-6 h-6" />
              <h3 className="text-2xl md:text-3xl text-emerald-400 font-bold">
                Poreklo Aloe Vere
              </h3>
            </div>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Aloe Vera potiče sa Arabijskog poluostrva, ali se danas gaji širom
              sveta u tropskim i suptropskim klimama. Ova čudesna biljka koristi
              se više od 6000 godina.
            </p>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Stari Egipćani su je zvali &quot;biljka besmrtnosti&quot;, dok su
              je drevni Grci koristili za lečenje rana i kožnih problema.
              Kleopatra i Nefertiti su koristile aloe veru u svojoj svakodnevnoj
              rutini nege.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              U modernom svetu, Aloe Vera je postala jedan od najtraženijih
              prirodnih proizvoda u industriji zdravlja i lepote.
            </p>
          </div>
        </motion.div>

        {/* Composition Section */}
        <motion.div
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-emerald-400 mb-4">
              <Droplets className="w-6 h-6" />
              <h3 className="text-2xl md:text-3xl text-emerald-400 font-bold">
                Sastav Aloe Vere
              </h3>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Gel Aloe Vere sadrži preko 200 aktivnih sastojaka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Vitamini",
                description:
                  "A, C, E, B12, folna kiselina i holin za jačanje imuniteta",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Minerali",
                description:
                  "Kalcijum, magnezijum, cink, hrom, selen i drugi esencijalni minerali",
              },
              {
                icon: <Droplets className="w-8 h-8" />,
                title: "Enzimi",
                description:
                  "8 različitih enzima koji pomažu varenju i smanjuju upalu",
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Amino kiseline",
                description:
                  "20 od 22 amino kiseline uključujući 7 od 8 esencijalnih",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 border-2 border-emerald-400 rounded-full flex items-center justify-center text-emerald-400 mb-4 mx-auto">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Uses Section */}
        <motion.div
          ref={ref3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 mb-20"
        >
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-emerald-400 mb-4">
              <Heart className="w-6 h-6" />
              <h3 className="text-2xl md:text-3xl text-emerald-400 font-bold">
                Upotreba Aloe Vere
              </h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Hidratacija kože",
                  description:
                    "Gel aloe vere prodire duboko u kožu i obezbeđuje intenzivnu hidrataciju",
                },
                {
                  title: "Lečenje opekotina",
                  description:
                    "Ubrzava zarastanje opekotina od sunca i smanjuje crvenilo",
                },
                {
                  title: "Anti-aging efekat",
                  description: "Podstiče proizvodnju kolagena i smanjuje bore",
                },
                {
                  title: "Varenje",
                  description:
                    "Sok aloe vere pomaže kod problema sa varenjem i čisti organizam",
                },
                {
                  title: "Jačanje imuniteta",
                  description:
                    "Antioksidanti pomažu u jačanju prirodne odbrane organizma",
                },
                {
                  title: "Nega kose",
                  description: "Jača kosu, ubrzava rast i pomaže kod peruti",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
            <Image
              src="/aloe-vera-gel.jpg"
              alt="Aloe Vera gel"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Cultivation Section */}
        <motion.div
          ref={ref4}
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="border-emerald-400 border-2 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-emerald-400 mb-4">
              Kako se gaji Aloe Vera?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Sun className="w-8 h-8" />,
                title: "Svetlost",
                description:
                  "Voli svetlo mesto ali ne direktno sunce. Idealna je svetla prostorija.",
              },
              {
                icon: <Droplets className="w-8 h-8" />,
                title: "Zalivanje",
                description:
                  "Zaliva se umereno, samo kada se zemlja potpuno osuši.",
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Temperatura",
                description: "Idealna temperatura je 18-27°C. Ne podnosi mraz.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-emerald-400 backdrop-blur-sm p-6 rounded-xl"
              >
                <div className="mb-4 text-white">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-white">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
