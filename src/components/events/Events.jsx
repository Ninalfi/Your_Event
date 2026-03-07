"use client";

import { useEffect, useMemo, useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import EventCardSkeleton from "./EventCardSkeleton";
import EventCard from "./EventCard";
import events from "@/app/data/events.json";


const Events = () => {
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(events.map((event) => event.category))];
    return ["All", ...uniqueCategories];
  }, []);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchText.toLowerCase()) ||
        event.shortDescription.toLowerCase().includes(searchText.toLowerCase()) ||
        event.location.toLowerCase().includes(searchText.toLowerCase());

      const matchesCategory =
        category === "All" || event.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [searchText, category]);

  return (
    <section className="min-h-screen bg-base-100 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-base-content md:text-4xl">
            Events
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-base-content/70 md:text-base">
            Explore conferences, workshops, meetups, expos, and networking events.
            Discover opportunities to learn, connect, and grow through a clean,
            responsive, and engaging event experience.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="mb-10 grid gap-4 md:grid-cols-3">
          <label className="input input-bordered flex items-center gap-3 md:col-span-2">
            <FaSearch className="text-base-content/60" />
            <input
              type="text"
              className="grow"
              placeholder="Search events..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </label>

          <label className="select select-bordered flex items-center gap-2">
            <FaFilter className="text-base-content/60" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-transparent outline-none"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Results Count */}
        {!loading && (
          <div className="mb-6">
            <p className="text-sm text-base-content/60">
              Showing {filteredEvents.length} event
              {filteredEvents.length !== 1 ? "s" : ""}
            </p>
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <EventCardSkeleton key={index} />
              ))
            : filteredEvents.map((event, index) => (
                <EventCard key={index} event={event} index={index} />
              ))}
        </div>

        {/* Empty State */}
        {!loading && filteredEvents.length === 0 && (
          <div className="mt-12 rounded-2xl border border-base-200 bg-base-200/40 p-10 text-center">
            <h3 className="text-xl font-semibold">No events found</h3>
            <p className="mt-2 text-sm text-base-content/70">
              Try changing your search text or category filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;