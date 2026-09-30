import { motion } from "motion/react";
import {
  ArrowUpRight,
  Lightbulb,
  MessageCircle,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

function OurStory() {
  const ideas = [
    {
      icon: Lightbulb,
      title: "The problem we noticed",
      text: "Many professionals have valuable experience, but the way that experience is presented can make it difficult for the right audience to understand its full value.",
    },
    {
      icon: Target,
      title: "What we focus on",
      text: "We bring structure to professional stories by connecting experience, achievements, strengths, and career direction into a clearer narrative.",
    },
    {
      icon: MessageCircle,
      title: "Why it matters",
      text: "A strong professional story should make your capabilities easier to understand while staying authentic to the person behind the materials.",
    },
  ];

  return (
    <section
      id="our-story"
      className="bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#00B4D8]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00B4D8]">
              Our Story
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-[46px]">
            Better career positioning starts with understanding the
            story behind the experience.
          </h2>
        </motion.div>

        {/* Main Story */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=85"
                alt="Professionals discussing career strategy together"
                className="h-[400px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[480px]"
              />
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />

            {/* Story Marker */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute bottom-5 left-5 rounded-xl border border-white/30 bg-white/90 px-5 py-4 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6"
            >
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#00B4D8]">
                The LCP Careers Approach
              </p>

              <p className="mt-1 text-sm font-bold text-slate-950">
                Strategy before decoration.
              </p>
            </motion.div>

            <div className="absolute -bottom-4 -right-4 -z-10 h-28 w-28 rounded-2xl bg-[#CAD182]" />
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-lg font-semibold leading-8 text-slate-950">
              We believe talented professionals should have materials
              that do justice to the work they have already done.
            </p>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Too often, strong career histories become difficult to
              interpret because achievements are buried, responsibilities
              are presented without context, or professional materials
              are treated as documents rather than positioning tools.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              LCP Careers was built around a different approach: first
              understand the professional, then define the message, and
              only after that shape the final presentation. The goal is
              to create materials that communicate experience with
              greater precision while remaining authentic to the person
              behind them.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Whether the need is a stronger resume, a more compelling
              LinkedIn presence, an executive biography, or broader
              career direction, we approach the work from the same
              principle: clarity should come before polish.
            </p>

            <Link
              to="/services"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#00B4D8] transition-colors duration-300 hover:text-slate-900"
            >
              Explore our services

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* Story Principles */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {ideas.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00B4D8]/10 text-[#00B4D8]">
                  <Icon size={20} strokeWidth={2} />
                </div>

                <h3 className="mt-6 text-lg font-bold tracking-tight text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>

                <div className="mt-6 h-px w-8 bg-[#CAD182]" />
              </motion.article>
            );
          })}
        </div>

        {/* Brand Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 rounded-2xl bg-slate-950 px-6 py-8 sm:px-8 sm:py-10 lg:px-10"
        >
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#00B4D8]">
              Our Philosophy
            </p>

            <blockquote className="mt-4 text-2xl font-semibold leading-9 tracking-tight text-white sm:text-3xl sm:leading-10">
              “Your career materials should not simply describe what
              you have done. They should make it easier for the right
              people to understand why it matters.”
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OurStory;