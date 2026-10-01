import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  FileSearch,
} from "lucide-react";

function FreeReview() {
  const benefits = [
    "A clearer view of your current professional positioning",
    "Identification of areas that may need stronger presentation",
    "Guidance on where to begin based on your goals",
  ];

  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-slate-950">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* Image */}
            <div className="relative min-h-[360px] overflow-hidden lg:min-h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85"
                alt="Professional reviewing career documents"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-6 left-6 sm:bottom-7 sm:left-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00B4D8] text-white">
                  <FileSearch size={21} strokeWidth={2} />
                </div>

                <p className="mt-4 text-sm font-bold text-white">
                  Start with a clearer picture.
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-10">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#00B4D8]">
                  Free Career Review
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl">
                  Not sure where your professional materials need work?
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                  Start with a free review and get a clearer
                  understanding of where your current positioning may
                  need attention before deciding on a service.
                </p>

                <div className="mt-7 space-y-4">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00B4D8]/15 text-[#00B4D8]">
                        <CheckCircle2 size={15} strokeWidth={2.2} />
                      </span>

                      <p className="text-sm leading-6 text-slate-300">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  to="/free-review"
                  className="group mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[#00B4D8] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#009FC0] hover:shadow-lg hover:shadow-[#00B4D8]/20"
                >
                  Get Your Free Review

                  <ArrowUpRight
                    size={17}
                    strokeWidth={2.5}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FreeReview;