import { FaCalendarAlt, FaMapMarkedAlt, FaUsers, FaShieldAlt } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import StaggerContainer from "../animations/StaggerContainer";
import StaggerItem from "../animations/StaggerItem";


const features = [
  {
    id: 1,
    icon: <FaCalendarAlt className="text-3xl text-primary" />,
    title: "Easy Event Discovery",
    description:
      "Browse conferences, workshops, meetups, and community programs from one clean interface.",
  },
  {
    id: 2,
    icon: <FaMapMarkedAlt className="text-3xl text-primary" />,
    title: "Venue Details",
    description:
      "Access location, timing, and event information in a structured and readable layout.",
  },
  {
    id: 3,
    icon: <FaUsers className="text-3xl text-primary" />,
    title: "Community Focused",
    description:
      "Connect organizers, professionals, and attendees around meaningful events.",
  },
  {
    id: 4,
    icon: <FaShieldAlt className="text-3xl text-primary" />,
    title: "Secure Management",
    description:
      "Protected routes allow only logged-in users to add and manage events.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-base-100 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          title="Everything needed for a smarter event experience"
          subtitle="Elegant UI, consistent cards, responsive layouts, and secure management tools."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <StaggerItem key={feature.id}>
              <div
                tabIndex={0}
                className="group h-full rounded-3xl border border-base-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-4 transition group-hover:scale-110">
                  {feature.icon}
                </div>

                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm leading-7 text-gray-500">{feature.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default FeaturesSection;