import Link from "next/link";
import { FaExclamationTriangle, FaArrowLeft, FaHome } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-base-100 px-4 py-16">
      <div className="w-full max-w-2xl rounded-[2rem] border border-base-200 bg-base-100 p-8 text-center shadow-xl md:p-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-3xl text-primary">
          <FaExclamationTriangle />
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          404 Error
        </p>

        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-base-content/70 md:text-base">
          Sorry, the page you are looking for does not exist, may have been
          moved, or is temporarily unavailable.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/">
            <button className="btn btn-primary rounded-full px-6">
              <FaHome />
              Go Home
            </button>
          </Link>

          <Link href="/events">
            <button className="btn btn-outline rounded-full px-6">
              <FaArrowLeft />
              Browse Events
            </button>
          </Link>
        </div>

        <div className="mt-10 rounded-2xl bg-base-200/40 p-5 text-sm text-base-content/60">
          Try checking the URL or return to the homepage to continue browsing.
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;