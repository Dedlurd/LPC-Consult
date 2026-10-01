import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Crosshair,
  FileSearch,
  MessageSquareText,
} from "lucide-react";

function WhoWeAre() {
  const principles = [
    {
      icon: FileSearch,
      title: "Clarity before presentation",
      text: "We first identify what your experience actually says about your value before deciding how it should be presented.",
    },
    {
      icon: Crosshair,
      title: "Positioning with purpose",
      text: "Your materials are shaped around the opportunity, audience, and professional direction you are pursuing.",
    },
    {
      icon: MessageSquareText,
      title: "A story people can understand",
      text: "We turn complex career histories into professional narratives that are easier to follow, interpret, and remember.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                alt="Professional career consultation and team discussion"
                className="h-[420px] w-full object-cover sm:h-[500px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-28 w-28 rounded-2xl bg-[#CAD182]" />

            {/* Small overlay card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute bottom-5 left-5 max-w-xs rounded-xl border border-white/40 bg-white/90 p-4 shadow-lg backdrop-blur-md sm:left-6"
            >
              <p className="text-sm font-bold text-slate-950">
                Strategy first. Presentation second.
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Strong career materials begin with a clear understanding
                of the professional story behind them.
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#00B4D8]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00B4D8]">
                  Who We Are
                </span>
              </div>

              <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-[44px]">
                We help professionals make their experience easier to
                understand and harder to overlook.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-[17px]">
                LPC Careers exists to help professionals communicate
                their value more effectively. We work across resumes,
                LinkedIn profiles, executive biographies, and broader
                career strategy to create a clearer connection between
                where you have been and where you want to go.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-[17px]">
                Our approach is not simply about making documents look
                polished. We focus on the message, the positioning, and
                the evidence behind your professional story so the final
                result feels intentional, credible, and relevant to the
                opportunity ahead.
              </p>
            </motion.div>

            {/* Principles */}
            <div className="mt-10 space-y-6">
              {principles.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="flex gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#00B4D8]/10 text-[#00B4D8]">
                      <Icon size={20} strokeWidth={2} />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-slate-950 sm:text-base">
                        {principle.title}
                      </h3>

                      <p className="mt-1.5 max-w-xl text-sm leading-6 text-slate-500">
                        {principle.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-9"
            >
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-sm font-bold text-[#00B4D8] transition-colors duration-300 hover:text-slate-900"
              >
                Explore what we do

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;