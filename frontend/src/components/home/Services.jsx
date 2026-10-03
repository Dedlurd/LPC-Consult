import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  FileText,
  BriefcaseBusiness,
  UserRound,
  Target,
  ArrowUpRight,
} from "lucide-react";

function Services() {
  const services = [
    {
      number: "01",
      title: "Resume Writing",
      description:
        "Transform your experience into a clear, professional resume that highlights relevant achievements, strengths, and career direction.",
      price: "From $200",
      icon: FileText,
    },
    {
      number: "02",
      title: "LinkedIn Profile Optimization",
      description:
        "Strengthen your professional presence with a LinkedIn profile that communicates your expertise, positioning, and value more clearly.",
      price: "From $200",
      icon: BriefcaseBusiness,
    },
    {
      number: "03",
      title: "Executive Bio",
      description:
        "Develop a polished professional biography that communicates your leadership experience, expertise, and professional identity.",
      price: "From $200",
      icon: UserRound,
    },
    {
      number: "04",
      title: "Career Strategy",
      description:
        "Get structured guidance around your next career move, including positioning, direction, priorities, and practical next steps.",
      price: "From $500",
      icon: Target,
    },
  ];

  return (
    <section className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#00B4D8]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00B4D8]">
              What We Do
            </span>

            <span className="h-px w-8 bg-[#00B4D8]" />
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Career support built around where you want to go.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            LCP Careers helps professionals communicate their experience,
            strengthen their professional positioning, and make more
            informed career moves.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_12px_35px_rgba(15,23,42,0.05)] transition-all duration-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)] sm:p-8"
              >
                {/* Decorative Number */}
                <span className="absolute right-6 top-5 text-5xl font-extrabold tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-[#caf0f8]">
                  {service.number}
                </span>

                <div className="relative">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#caf0f8] text-[#0077B6] transition-all duration-300 group-hover:bg-[#00B4D8] group-hover:text-white">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-[15px]">
                    {service.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-7 flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
                    <span className="text-sm font-bold text-[#0077B6]">
                      {service.price}
                    </span>

                    <Link
                      to="/services"
                      className="group/link inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-colors duration-300 hover:text-[#0077B6]"
                    >
                      Learn More

                      <ArrowUpRight
                        size={16}
                        strokeWidth={2.4}
                        className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#00B4D8] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col gap-5 rounded-3xl bg-slate-50 px-6 py-7 sm:px-8 sm:py-8 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="text-base font-bold text-slate-950">
              Not sure which service fits your goals?
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Tell us what you are working toward and we can help you
              identify the most suitable starting point.
            </p>
          </div>

          <Link
            to="/contact#enquiry"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#00B4D8] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#009FC0] hover:shadow-lg hover:shadow-[#00B4D8]/20"
          >
            Get a Free Review

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

export default Services;