import SectionTitle from "./SectionTitle";
import StaggerContainer from "../animations/StaggerContainer";
import StaggerItem from "../animations/StaggerItem";

const reasons = [
  {
    id: 1,
    title: "Modern UI Design",
    description:
      "A clean visual structure with strong hierarchy, balance, and elegant spacing.",
  },
  {
    id: 2,
    title: "Responsive Layout",
    description:
      "Optimized for mobile, tablet, and desktop for a smooth browsing experience.",
  },
  {
    id: 3,
    title: "Protected Actions",
    description:
      "Only authenticated users can access add and manage event functionality.",
  },
  {
    id: 4,
    title: "Consistent Components",
    description:
      "Reusable cards, sections, and buttons create a polished experience across the whole site.",
  },
];

const WhyUs = () => {
  return (
    <section className="bg-base-100 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          title="Built for clarity, consistency, and usability"
          subtitle="A modern landing page that feels complete, dynamic, and professional."
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-2">
          {reasons.map((item, index) => (
            <StaggerItem key={item.id}>
              <div
                tabIndex={0}
                className="group flex h-full items-start gap-4 rounded-3xl border border-base-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white transition group-hover:scale-110">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-xl font-semibold transition group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhyUs;