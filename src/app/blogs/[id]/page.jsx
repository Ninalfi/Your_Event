import Link from "next/link";
import { notFound } from "next/navigation";
import { FaCalendarAlt, FaUserAlt, FaTag, FaArrowLeft } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "How to Plan a Successful Tech Event",
    excerpt:
      "Learn the key steps to organize a smooth and engaging tech event, from planning and promotion to execution.",
    content:
      "Planning a successful tech event starts with defining your audience and goals clearly. Then you need to choose the right venue, create a strong schedule, promote the event effectively, and ensure a smooth attendee experience. A polished design, clear communication, and organized registration flow all contribute to a memorable event.",
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
    content:
      "Promoting an event successfully requires a mix of social media, email campaigns, partnerships, landing pages, and clear messaging. Consistency is key. Build hype early, post regularly, and make your event benefits clear to your audience.",
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
    content:
      "Networking events are important because they connect professionals, founders, students, and creators in one place. These interactions can lead to partnerships, job opportunities, mentorship, and long-term collaboration.",
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
    content:
      "Event experience design includes visual branding, layout flow, attendee communication, accessibility, and atmosphere. Small design decisions can significantly improve the overall experience and satisfaction of participants.",
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
    content:
      "Efficient event registration means keeping the process short, clear, and user-friendly. Use clean forms, confirmation emails, reminders, and dashboards to track participants and reduce confusion.",
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
    content:
      "The future of event technology includes AI-powered planning tools, smarter attendee analytics, hybrid event platforms, immersive virtual experiences, and automation that improves organization and engagement.",
    category: "Technology",
    author: "Admin",
    date: "2026-05-10",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
];

const BlogDetailsPage = async ({ params }) => {
  const { id } = await params;
  const blogId = parseInt(id, 10);
  const blog = blogs.find((item) => item.id === blogId);

  if (!blog) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-base-100 py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <Link href="/blogs" className="btn btn-outline btn-sm mb-8 rounded-full">
          <FaArrowLeft />
          Back to Blogs
        </Link>

        <article className="overflow-hidden rounded-[2rem] border border-base-200 bg-base-100 shadow-lg">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-[280px] w-full object-cover md:h-[420px]"
          />

          <div className="p-6 md:p-10">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <FaTag />
                {blog.category}
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              {blog.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-base-content/70">
              <p className="flex items-center gap-2">
                <FaUserAlt className="text-primary" />
                {blog.author}
              </p>
              <p className="flex items-center gap-2">
                <FaCalendarAlt className="text-primary" />
                {blog.date}
              </p>
            </div>

            <div className="mt-8">
              <p className="leading-8 text-base-content/80">
                {blog.content}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogDetailsPage;