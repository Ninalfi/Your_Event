import EventCard from "@/components/events/EventCard";
import Events from "@/components/events/Events";
import Banner from "@/components/home/Banner";
import FeaturesSection from "@/components/home/FeaturesSection";
import Hero from "@/components/home/Hero";
import TestimonialsSection from "@/components/home/Testimonials";
import Upcoming from "@/components/home/Upcoming";
import WhyUs from "@/components/home/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <section>
          <Hero></Hero>
          <FeaturesSection></FeaturesSection>
          <Upcoming></Upcoming>
          <Banner></Banner>
          <WhyUs></WhyUs>
          <TestimonialsSection></TestimonialsSection>
      </section>
     <section>
      <Events></Events>
     </section>
    </div>
  );
}


