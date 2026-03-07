const Loading = () => {
  return (
    <section className="min-h-screen bg-base-100 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Page Title Skeleton */}
        <div className="mb-10">
          <div className="skeleton h-10 w-64"></div>
          <div className="mt-4 space-y-2">
            <div className="skeleton h-4 w-full max-w-2xl"></div>
            <div className="skeleton h-4 w-full max-w-xl"></div>
          </div>
        </div>

        {/* Search + Filter Skeleton */}
        <div className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="skeleton h-12 w-full rounded-xl md:col-span-2"></div>
          <div className="skeleton h-12 w-full rounded-xl"></div>
        </div>

        {/* Results Count Skeleton */}
        <div className="mb-6">
          <div className="skeleton h-4 w-36"></div>
        </div>

        {/* Cards Grid Skeleton */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loading;