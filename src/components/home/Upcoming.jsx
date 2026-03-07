import Link from "next/link";
import SectionTitle from "./SectionTitle";
import StaggerContainer from "../animations/StaggerContainer";
import StaggerItem from "../animations/StaggerItem";


const events = [
  {
    id: 1,
    title: "Tech Innovators Summit",
    date: "12 April 2026",
    location: "Tokyo International Forum",
    category: "Conference",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Frontend Developer Workshop",
    date: "20 April 2026",
    location: "Shibuya Tech Center",
    category: "Workshop",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Startup Networking Night",
    date: "01 May 2026",
    location: "Osaka Startup Hub",
    category: "Networking",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Design Systems Meetup",
    date: "10 May 2026",
    location: "Kyoto Design Hall",
    category: "Meetup",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
  },
];

const Upcoming = () => {
  return (
    <section className="bg-base-200/40 py-20">
      <div className="mx-auto max-w-7xl px-4">
        
<div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-5xl font-bold">Explore trending events</h2>
        <p className="py-2">Carefully selected events with a clean, engaging presentation.</p>
</div>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {events.map((event) => (
            <StaggerItem key={event.id}>
              <div
                tabIndex={0}
                className="group overflow-hidden rounded-3xl border border-base-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute left-4 top-4 badge badge-primary badge-lg">
                    {event.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold transition group-hover:text-primary">
                    {event.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-500">{event.date}</p>
                  <p className="mt-1 text-sm text-gray-500">{event.location}</p>

                  <Link href="/events">
                    <button className="btn btn-primary btn-sm mt-5 rounded-full px-5 transition hover:scale-105">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Upcoming;