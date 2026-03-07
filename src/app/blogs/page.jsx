import { FaSearch, FaFilter, FaCalendarAlt, FaUserAlt, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "How to Plan a Successful Tech Event",
    excerpt:
      "Learn the key steps to organize a smooth and engaging tech event, from planning and promotion to execution.",
    category: "Event Planning",
    author: "Admin",
    date: "2026-04-12",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Top 10 Tips for Event Promotion",
    excerpt:
      "Discover proven strategies to market your events effectively and attract more attendees.",
    category: "Marketing",
    author: "Sarah Ahmed",
    date: "2026-04-18",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Why Networking Events Matter",
    excerpt:
      "Networking events create opportunities for growth, collaboration, and meaningful industry connections.",
    category: "Networking",
    author: "Rahim Khan",
    date: "2026-04-24",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Designing Better Event Experiences",
    excerpt:
      "A polished user experience can transform an event from ordinary to unforgettable.",
    category: "Design",
    author: "Maya Lee",
    date: "2026-05-01",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Managing Event Registrations Efficiently",
    excerpt:
      "Explore ways to simplify registration flow and improve attendee management for any event.",
    category: "Management",
    author: "Noah Karim",
    date: "2026-05-06",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Future Trends in Event Technology",
    excerpt:
      "From AI tools to virtual experiences, see how technology is reshaping the future of events.",
    category: "Technology",
    author: "Admin",
    date: "2026-05-10",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
];

const BlogsPage = () => {
  const featuredBlog = blogs[0];
  const otherBlogs = blogs.slice(1);

  return (
    <section className="min-h-screen bg-base-100 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-base-content md:text-4xl">
            Latest <span className="text-primary">Blogs</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-base-content/70 md:text-base">
            Explore insights, tips, and updates on event planning, technology,
            networking, and user experience through our latest blog articles.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="mb-10 grid gap-4 md:grid-cols-3">
          <label className="input input-bordered flex items-center gap-3 md:col-span-2">
            <FaSearch className="text-base-content/60" />
            <input
              type="text"
              className="grow"
              placeholder="Search blogs..."
            />
          </label>

          <label className="select select-bordered flex items-center gap-2">
            <FaFilter className="text-base-content/60" />
            <select className="w-full bg-transparent outline-none">
              <option>All Categories</option>
              <option>Event Planning</option>
              <option>Marketing</option>
              <option>Networking</option>
              <option>Design</option>
              <option>Management</option>
              <option>Technology</option>
            </select>
          </label>
        </div>

        {/* Featured Blog */}
        <div className="mb-12 overflow-hidden rounded-3xl border border-base-200 bg-base-100 shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="overflow-hidden">
              <img
                src={featuredBlog.image}
                alt={featuredBlog.title}
                className="h-full min-h-[280px] w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-6 md:p-10">
              <span className="mb-4 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {featuredBlog.category}
              </span>

              <h2 className="text-2xl font-bold leading-tight md:text-3xl">
                {featuredBlog.title}
              </h2>

              <p className="mt-4 leading-7 text-base-content/70">
                {featuredBlog.excerpt}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-base-content/60">
                <p className="flex items-center gap-2">
                  <FaUserAlt className="text-primary" />
                  {featuredBlog.author}
                </p>
                <p className="flex items-center gap-2">
                  <FaCalendarAlt className="text-primary" />
                  {featuredBlog.date}
                </p>
              </div>

              <Link href={`/blogs/${featuredBlog.id}`} className="mt-6">
                <button className="btn btn-primary rounded-full px-6">
                  Read More
                  <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {otherBlogs.map((blog) => (
            <div
              key={blog.id}
              className="group overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {blog.category}
                  </span>
                  <span className="text-sm text-base-content/60">
                    {blog.date}
                  </span>
                </div>

                <h3 className="line-clamp-2 text-xl font-semibold">
                  {blog.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-base-content/70">
                  {blog.excerpt}
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm text-base-content/60">
                  <FaUserAlt className="text-primary" />
                  <span>{blog.author}</span>
                </div>

                <Link href={`/blogs/${blog.id}`}>
                  <button className="btn btn-outline btn-primary btn-sm mt-5 rounded-full px-5">
                    Read Blog
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;