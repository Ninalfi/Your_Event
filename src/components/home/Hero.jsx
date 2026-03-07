"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const slides = [
  {
    id: "slide1",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80",
    title: "Discover Amazing Events Near You",
    subtitle:
      "Explore conferences, workshops, networking meetups, and community events through a modern event platform.",
    primaryBtn: "Explore Events",
    primaryLink: "/events",
    secondaryBtn: "Add Event",
    secondaryLink: "/add-event",
  },
  {
    id: "slide2",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80",
    title: "Join Inspiring Tech & Community Gatherings",
    subtitle:
      "Find opportunities to learn, connect, and grow with events tailored for students and professionals.",
    primaryBtn: "Browse Events",
    primaryLink: "/events",
    secondaryBtn: "Manage Events",
    secondaryLink: "/manage-events",
  },
  {
    id: "slide3",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    title: "Plan, Manage, and Share Events Easily",
    subtitle:
      "Create event listings, organize schedules, and keep everything accessible in one polished platform.",
    primaryBtn: "Get Started",
    primaryLink: "/register",
    secondaryBtn: "Add Event",
    secondaryLink: "/add-event",
  },
];

const Hero = () => {
  return (
    <section className="w-full">
      <div className="carousel rounded-3xl w-full min-h-[85vh]">
        {slides.map((slide, index) => {
          const prev = slides[(index - 1 + slides.length) % slides.length].id;
          const next = slides[(index + 1) % slides.length].id;

          return (
            <div key={slide.id} id={slide.id} className="carousel-item relative w-full">
              <div
                className="hero min-h-[85vh] w-full"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="hero-overlay bg-gradient-to-r from-black/80 via-black/55 to-black/40"></div>

                <div className="hero-content text-neutral-content px-4">
                  <div className="max-w-3xl text-center">
                    <motion.span
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur"
                    >
                      Smart Event Management Platform
                    </motion.span>

                    <motion.h1
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                      className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="mx-auto mb-8 max-w-2xl text-base text-gray-200 md:text-lg"
                    >
                      {slide.subtitle}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                      className="flex flex-wrap justify-center gap-4"
                    >
                      <Link href={slide.primaryLink}>
                        <button className="btn btn-primary rounded-full px-7 shadow-lg transition hover:scale-105 hover:shadow-primary/30">
                          {slide.primaryBtn}
                        </button>
                      </Link>

                      <Link href={slide.secondaryLink}>
                        <button className="btn btn-outline rounded-full border-white text-white px-7 transition hover:scale-105 hover:bg-white hover:text-black">
                          {slide.secondaryBtn}
                        </button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
                <a href={`#${prev}`} className="btn btn-circle border-none bg-white/10 text-white backdrop-blur hover:bg-white/20">
                  ❮
                </a>
                <a href={`#${next}`} className="btn btn-circle border-none bg-white/10 text-white backdrop-blur hover:bg-white/20">
                  ❯
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;