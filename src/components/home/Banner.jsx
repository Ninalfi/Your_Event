"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="bg-base-100 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-primary to-secondary p-10 text-white shadow-2xl md:p-14"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to create your next event?
            </h2>
            <p className="mt-4 text-white/90 md:text-lg">
              Start building engaging event experiences with a platform designed
              for discovery, organization, and growth.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/add-event">
                <button className="btn rounded-full border-none bg-white text-primary hover:scale-105 hover:bg-white">
                  Add Event
                </button>
              </Link>

              <Link href="/events">
                <button className="btn rounded-full border border-white bg-transparent text-white hover:scale-105 hover:bg-white hover:text-primary">
                  Browse Events
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;