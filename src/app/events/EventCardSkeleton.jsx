const EventCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm">
      <div className="skeleton h-56 w-full"></div>

      <div className="p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="skeleton h-6 w-24 rounded-full"></div>
          <div className="skeleton h-5 w-14"></div>
        </div>

        <div className="skeleton h-6 w-3/4"></div>
        <div className="mt-3 space-y-2">
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-5/6"></div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="skeleton h-4 w-1/2"></div>
          <div className="skeleton h-4 w-2/3"></div>
        </div>

        <div className="skeleton mt-5 h-9 w-24 rounded-full"></div>
      </div>
    </div>
  );
};

export default EventCardSkeleton;