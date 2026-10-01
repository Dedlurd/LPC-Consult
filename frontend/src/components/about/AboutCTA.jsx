import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

function AboutCTA() {
  const points = [
    "Start with a free review",
    "Explore the service that fits your needs",
    "Get clear guidance on your next step",
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2000&q=85"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/80" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-[#00B4D8]/25" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#00B4D8]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00B4D8]">
                Next Step
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-[52px]">
              Your experience is already yours. Let’s make sure your
              professional story reflects it.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-[17px] sm:leading-8">
              Whether you need a stronger resume, a more consistent
              professional presence, or broader career direction, LPC
              Careers can help you identify the right place to begin.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/free-review"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#00B4D8] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#009FC0] hover:shadow-lg hover:shadow-[#00B4D8]/25"
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
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/15"
              >
                Contact LPC Careers

                <MessageCircle
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </motion.div>

          {/* Support Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md sm:p-7">
              <p className="text-sm font-bold text-white">
                A clearer starting point.
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                You do not need to have everything figured out before
                reaching out. Start with where you are, and we can work
                from there.
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
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00B4D8]/15 text-[#00B4D8]">
                      <CheckCircle2 size={15} strokeWidth={2.2} />
                    </span>

                    <p className="text-sm leading-6 text-slate-300">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 border-t border-white/10 pt-6"
        >
          <p className="text-xs leading-5 text-slate-500">
            LPC Careers · Professional Positioning · Career Development
            · Strategic Support
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutCTA;