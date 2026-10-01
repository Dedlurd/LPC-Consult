import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  FileText,
  Target,
  UserRound,
} from "lucide-react";

function WorkByService() {
  const services = [
    {
      icon: FileText,
      title: "Resume Writing",
      description:
        "Examples of professional resumes developed around experience, achievements, target roles, and career direction.",
    },
    {
      icon: BriefcaseBusiness,
      title: "LinkedIn Optimization",
      description:
        "Profile positioning designed to create stronger consistency between your professional story and online presence.",
    },
    {
      icon: UserRound,
      title: "Executive Bio",
      description:
        "Professional biographies built to communicate leadership, expertise, scope, and professional identity.",
    },
    {
      icon: Target,
      title: "Career Strategy",
      description:
        "Strategic work focused on career direction, positioning, transitions, and practical next steps.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Executive Branding",
      description:
        "Coordinated positioning across multiple professional touchpoints for senior professionals and leaders.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#00B4D8]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00B4D8]">
                Work by Service
              </span>
            </div>

            <h2 className="mt-5 max-w-md text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Explore the type of work behind each service.
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
              See how different services contribute to a stronger,
              more consistent professional presence.
            </p>

            <Link
              to="/services"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#00B4D8] transition-colors hover:text-slate-900"
            >
              Explore all services

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group bg-white p-6 transition-colors duration-300 hover:bg-slate-50 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00B4D8]/10 text-[#00B4D8] transition-colors duration-300 group-hover:bg-[#00B4D8] group-hover:text-white">
                      <Icon size={19} strokeWidth={2} />
                    </div>

                    <span className="text-xs font-bold tracking-[0.12em] text-slate-300">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold tracking-tight text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {service.description}
                  </p>

                  <div className="mt-6 h-px w-8 bg-[#CAD182] transition-all duration-500 group-hover:w-14" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkByService;