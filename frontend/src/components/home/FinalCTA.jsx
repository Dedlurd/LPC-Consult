import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

function FinalCTA() {
  const points = [
    "Professional career support",
    "Personalized guidance",
    "Strategy focused on your goals",
  ];

  return (
    <section className="relative overflow-hidden bg-[#00B4D8] py-20 sm:py-24 lg:py-28">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#CAD182]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/70" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                Take the Next Step
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-[48px]">
              Ready to move your career forward?
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-[17px]">
              Your experience has value. Let LCP Careers help you
              communicate it clearly, strengthen your professional
              positioning, and approach your next opportunity with
              greater direction.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/free-review"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-xl"
              >
                Get Your Free Review

                <ArrowUpRight
                  size={17}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/10 px-5 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/15"
              >
                <MessageCircle size={17} strokeWidth={2} />

                Contact LCP Careers
              </Link>
            </div>
          </motion.div>

          {/* Supporting Points */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:justify-self-end"
          >
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-7">
              <p className="text-sm font-bold text-white">
                Start with a clearer professional direction.
              </p>

              <div className="mt-6 space-y-4">
                {points.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2 + index * 0.08,
                    }}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15">
                      <CheckCircle2
                        size={16}
                        className="text-white"
                        strokeWidth={2}
                      />
                    </span>

                    <span className="text-sm text-white/85">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;