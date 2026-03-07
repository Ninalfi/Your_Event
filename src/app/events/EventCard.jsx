import Link from "next/link";
import { FaCalendarAlt, FaMapMarkerAlt, FaTag } from "react-icons/fa";

const EventCard = ({ event, index }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-within:ring-2 focus-within:ring-primary">
      <div className="overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <FaTag />
            {event.category}
          </span>

          <span className="text-sm font-semibold text-base-content/70">
            {event.price}
          </span>
        </div>

        <h2 className="line-clamp-1 text-xl font-semibold text-base-content">
          {event.title}
        </h2>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-base-content/70">
          {event.shortDescription}
        </p>

        <div className="mt-4 space-y-2 text-sm text-base-content/60">
          <p className="flex items-center gap-2">
            <FaCalendarAlt className="text-primary" />
            <span>{event.date}</span>
          </p>

          <p className="flex items-center gap-2 line-clamp-1">
            <FaMapMarkerAlt className="text-primary" />
            <span>{event.location}</span>
          </p>
        </div>

        <Link href={`/events/${index}`}>
          <button className="btn btn-primary btn-sm mt-5 rounded-full px-5">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;