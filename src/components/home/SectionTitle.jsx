import FadeUp from "../animations/FadeUp";


const SectionTitle = ({ title, subtitle, badge }) => {
  return (
    <FadeUp className="mx-auto mb-12 max-w-2xl text-center">

      {badge && (
        <span className="badge badge-primary badge-outline mb-4 px-4 py-3">
          {badge}
        </span>
      )}

      <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-4 text-base leading-7 text-gray-500 md:text-lg">
        {subtitle}
      </p>

    </FadeUp>
  );
};

export default SectionTitle;