import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Compass,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function AboutHero() {
  const highlights = [
    {
      icon: Compass,
      title: "Strategy-led",
      text: "Message before presentation",
    },
    {
      icon: Sparkles,
      title: "Personalized",
      text: "Built around your career story",
    },
    {
      icon: ShieldCheck,
      title: "Professional",
      text: "Clear, credible, and purposeful",
    },
  ];

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-slate-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=85"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/35" />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />
      </div>

      <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-5 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-9 bg-[#00B4D8]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00B4D8]">
                About LPC Careers
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-[64px]"
            >
              Your experience deserves a{" "}
              <span className="text-[#00B4D8]">
                stronger story.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
              className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
            >
              LPC Careers helps professionals turn experience,
              achievements, and career ambitions into clearer
              professional positioning that is easier to understand,
              trust, and remember.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                to="/contact#enquiry"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#00B4D8] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#009FC0] hover:shadow-lg hover:shadow-[#00B4D8]/25"
              >
                Get Your Free Review

                <ArrowUpRight
                  size={17}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <a
                href="#our-story"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/15"
              >
                Our Story

                <ArrowDown
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
            </motion.div>
          </div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="mt-14 border-t border-white/15 pt-6 lg:mt-20"
          >
            <div className="grid gap-5 sm:grid-cols-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.55 + index * 0.08,
                    }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-[#00B4D8]">
                      <Icon size={17} strokeWidth={2} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-white">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Shape */}
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#00B4D8]/10 blur-3xl" />
    </section>
  );
}

export default AboutHero;
