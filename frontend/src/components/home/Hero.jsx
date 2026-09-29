import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-36">
      <div className="mx-auto max-w-7xl px-5 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* =========================
              LEFT CONTENT
          ========================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="max-w-xl"
          >
            {/* Small label */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#00B4D8]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
                Luna Consult Group
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-[54px]"
            >
              Your career deserves
              <span className="block text-[#00B4D8]">
                a clear direction.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-[17px]"
            >
              Professional career support to help you present your
              experience, strengthen your professional profile, and
              approach your next opportunity with confidence.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                to="/free-review"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#00B4D8] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#009FC0] hover:shadow-lg hover:shadow-[#00B4D8]/20"
              >
                Get a Free Review

                <ArrowUpRight
                  size={17}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-800 transition-all duration-300 hover:border-[#00B4D8] hover:text-[#0077B6]"
              >
                Explore Services

                <ChevronRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.55,
              }}
              className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  className="text-[#00B4D8]"
                  strokeWidth={2.2}
                />

                <span>Professional guidance</span>
              </div>

              <span className="hidden h-4 w-px bg-slate-200 sm:block" />

              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  className="text-[#00B4D8]"
                  strokeWidth={2.2}
                />

                <span>Personalized support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* =========================
              RIGHT ORGANISATION IMAGE
          ========================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                alt="Professional team collaborating in a modern organisation"
                className="h-[400px] w-full object-cover sm:h-[470px] lg:h-[510px]"
              />

              {/* Subtle image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />

              {/* Image information */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                }}
                className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/40 bg-white/90 p-4 backdrop-blur-md sm:left-6 sm:right-auto sm:max-w-xs"
              >
                <p className="text-sm font-bold text-slate-900">
                  Move forward with confidence.
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Practical support for your next professional move.
                </p>
              </motion.div>
            </div>

            {/* Brand accent */}
            <div className="absolute -bottom-3 -right-3 -z-10 h-28 w-28 rounded-2xl bg-[#CAD182] sm:-bottom-4 sm:-right-4" />
          </motion.div>
        </div>

        {/* =========================
            BOTTOM BRAND STATEMENT
        ========================== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.8,
          }}
          className="mt-12 border-t border-slate-100 pt-6 lg:mt-14"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              Career Strategy · Professional Branding · Career Development
            </p>

            <Link
              to="/about"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition-colors hover:text-[#0077B6]"
            >
              About Luna Consult Group

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;