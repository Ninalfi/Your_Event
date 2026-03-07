import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-neutral text-neutral-content py-10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
            <h2 className="text-5xl font-semibold">Your <span className="text-primary">Event</span></h2>
          <p className="mt-3 text-sm leading-6">
            Discover, explore, and manage events through a clean and modern
            event management platform.
          </p>
        </div>

        <div>
          <h4 className="font-semibold ">Quick Links</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm ">
            <Link href="/">Home</Link>
            <Link href="/events">Events</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold ">Account</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm ">
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
            <Link href="/add-event">Add Event</Link>
            <Link href="/manage-events">Manage Events</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold ">Follow Us</h4>
          <div className="mt-4 flex items-center gap-3 ">
            <a href="#" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon">
              <FaGithub />
            </a>
            <a href="#" className="social-icon">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-500">
        © 2026 YourEvent. All rights reserved.
      </div>
    </footer>
  );
}