import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Compass,
} from "lucide-react";

function Resources() {
  const resources = [
    {
      category: "Career Guides",
      title: "How to Build a Resume That Communicates Your Value",
      description:
        "Practical guidance for presenting your experience, strengths, and achievements in a way employers can understand quickly.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",
      icon: BookOpen,
    },
    {
      category: "Professional Branding",
      title: "Building a Stronger Professional Presence on LinkedIn",
      description:
        "Understand the key elements of a professional LinkedIn profile and how they work together to communicate your expertise.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
      icon: BriefcaseBusiness,
    },
    {
      category: "Career Strategy",
      title: "How to Approach Your Next Career Move Strategically",
      description:
        "A practical framework for evaluating your direction, identifying opportunities, and making more intentional career decisions.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
      icon: Compass,
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#00B4D8]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00B4D8]">
                Career Insights / Resources
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.025em] text-slate-950 sm:text-4xl lg:text-[42px]">
              Practical insights for your next career move.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-[17px]">
              Explore practical guidance on professional positioning,
              career strategy, and building a stronger presence in
              today's professional environment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              to="/resources"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#00B4D8] transition-colors duration-300 hover:text-slate-900"
            >
              Explore all resources

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* Resource Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {resources.map((resource, index) => {
            const Icon = resource.icon;

            return (
              <motion.article
                key={resource.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#00B4D8]/40 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                  {/* Category */}
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-800 backdrop-blur-sm">
                      <Icon
                        size={14}
                        className="text-[#00B4D8]"
                        strokeWidth={2.2}
                      />

                      {resource.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex min-h-[270px] flex-col p-6 sm:p-7">
                  <h3 className="text-xl font-bold leading-snug tracking-tight text-slate-950">
                    {resource.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {resource.description}
                  </p>

                  <div className="mt-auto pt-7">
                    <Link
                      to="/resources"
                      className="group/link inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-colors duration-300 hover:text-[#00B4D8]"
                    >
                      Read more

                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-col gap-5 rounded-2xl border border-[#CAD182]/60 bg-[#CAD182]/20 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8"
        >
          <div>
            <p className="text-sm font-bold text-slate-950">
              Looking for practical career guidance?
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Explore the LCP Careers resource library for more
              professional insights and career guidance.
            </p>
          </div>

          <Link
            to="/resources"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#00B4D8] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#009FC0] hover:shadow-lg hover:shadow-[#00B4D8]/20"
          >
            View Resources

            <ArrowUpRight
              size={17}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Resources;