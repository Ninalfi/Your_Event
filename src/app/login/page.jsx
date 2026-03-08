"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";

const LoginPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleCredentialsLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Invalid email or password");
      return;
    }

    router.push("/");
  };

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  return (
    <section className="min-h-screen bg-base-100 py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
        <div className="rounded-[2rem] bg-gradient-to-br from-primary to-secondary p-8 text-white shadow-xl md:p-12">
          <h1 className="text-3xl font-bold md:text-5xl">
            Welcome Back
          </h1>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/85 md:text-base">
            Sign in to explore events, manage bookings, and access protected pages
            in your event platform.
          </p>

          <div className="mt-8 rounded-2xl bg-white/10 p-5 backdrop-blur">
            <p className="text-sm font-medium">Demo Credentials</p>
            <p className="mt-2 text-sm text-white/85">
              Email: demo@example.com
            </p>
            <p className="text-sm text-white/85">
              Password: 123456
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-base-200 bg-base-100 p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold md:text-3xl">Login</h2>
          <p className="mt-2 text-sm leading-7 text-base-content/70">
            Continue with Google or use your email and password.
          </p>

          <button
            onClick={handleGoogleLogin}
            className="btn mt-6 w-full rounded-full"
          >
            <FaGoogle />
            Continue with Google
          </button>

          <div className="divider">OR</div>

          <form onSubmit={handleCredentialsLogin} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>
              <label className="input input-bordered flex items-center gap-3">
                <FaEnvelope className="text-base-content/60" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="grow"
                  placeholder="Enter your email"
                  required
                />
              </label>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Password</label>
              <label className="input input-bordered flex items-center gap-3">
                <FaLock className="text-base-content/60" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="grow"
                  placeholder="Enter your password"
                  required
                />
              </label>
            </div>

            {error && (
              <div className="alert alert-error shadow-sm">
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full rounded-full"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-base-content/70">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-semibold text-primary">
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;