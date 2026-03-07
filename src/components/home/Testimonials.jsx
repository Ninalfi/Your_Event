"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    title:
      "This platform helped us organize our tech conference smoothly and made event management much easier.",
    author: "Sarah Ahmed",
    role: "Event Organizer",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title:
      "Discovering new events and communities became incredibly easy with the clean layout and smooth navigation.",
    author: "Rahim Khan",
    role: "Attendee",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title:
      "The interface feels modern and the overall workflow is simple, polished, and very user friendly.",
    author: "Maya Lee",
    role: "Community Manager",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title:
      "I really liked how clearly each event was presented. The whole experience feels professional and responsive.",
    author: "Ariana Blake",
    role: "Tech Enthusiast",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title:
      "Managing our event listings became much faster, and the UI style gave our platform a premium look.",
    author: "Noah Karim",
    role: "Organizer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const item = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-12">

        {/* LEFT CARD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-6 md:p-7 max-w-xl">

              <span className="text-5xl text-primary font-serif leading-none">
                “
              </span>

              <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-snug">
                {item.title}
              </h2>

              <div className="mt-6">
                <p className="font-semibold">{item.author}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>

              {/* NAV BUTTONS */}
              <div className="flex items-center justify-between mt-8">

                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="btn btn-circle btn-sm"
                  >
                    <FaChevronLeft />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="btn btn-circle btn-sm"
                  >
                    <FaChevronRight />
                  </button>
                </div>

              </div>

              {/* THUMBNAILS */}
              <div className="flex gap-3 mt-8 flex-wrap">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => setIndex(i)}
                    className={`transition ${
                      i === index
                        ? "ring-4 ring-primary scale-110"
                        : "opacity-70 hover:opacity-100"
                    } rounded-full`}
                  >
                    <img
                      src={t.image}
                      alt={t.author}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </button>
                ))}
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* IMAGE SIDE */}
        <div className="relative flex justify-center lg:justify-end ">
          <AnimatePresence mode="wait">
            <motion.img
              key={item.image}
              src={item.image}
              alt="testimonial"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="rounded-xl shadow-2xl w-[360px] md:w-[420px] object-cover"
            />
          </AnimatePresence>
        </div>

      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute right-24 top-16 w-[520px] h-[320px] border border-white/40 rounded-lg"></div>
      </div>
    </section>
  );
}