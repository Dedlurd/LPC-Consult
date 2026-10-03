import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Crown,
  Layers3,
  Rocket,
  Sparkles,
} from "lucide-react";

function CareerPackages() {
  const packages = [
    {
      name: "Career Starter",
      audience: "Students, graduates & early-career professionals",
      icon: Rocket,
      description:
        "A focused package for building a stronger professional foundation before entering or advancing in the job market.",
      price: "$525",
      originalPrice: "$550",
      savings: "$25",
      features: [
        "Basic Resume Writing",
        "Basic Cover Letter",
      ],
    },
    {
      name: "Professional Positioning",
      audience: "Professionals competing for stronger opportunities",
      icon: Layers3,
      popular: true,
      description:
        "A coordinated career package that brings your resume, application materials, and professional story into alignment.",
      price: "$1,349",
      originalPrice: "$1,499",
      savings: "$150",
      features: [
        "Professional Resume Writing",
        "Professional Cover Letter",
        "Professional Executive Bio",
      ],
    },
    {
      name: "Executive Brand",
      audience: "Directors, senior managers & executive leaders",
      icon: Crown,
      description:
        "A comprehensive executive positioning package designed to create consistency across the documents and platforms that represent you.",
      price: "$3,599",
      originalPrice: "$3,998",
      savings: "$399",
      features: [
        "Executive Resume",
        "Executive Cover Letter",
        "Executive Bio",
        "Executive LinkedIn Optimization",
      ],
    },
    {
      name: "Career Transition",
      audience: "Professionals preparing for a significant career move",
      icon: BriefcaseBusiness,
      description:
        "Built for professionals changing direction, pursuing a more competitive role, or preparing for a high-stakes job search.",
      price: "$4,120",
      originalPrice: "$4,500",
      savings: "$380",
      features: [
        "Professional Resume Writing",
        "Professional Cover Letter",
        "Professional LinkedIn Optimization",
        "Professional Interview Preparation",
        "Career Strategy",
      ],
    },
    {
      name: "Executive Leadership",
      audience: "Senior executives pursuing high-impact opportunities",
      icon: Sparkles,
      description:
        "Our most comprehensive career positioning package for professionals who need their leadership experience presented consistently across every major touchpoint.",
      price: "$5,200",
      originalPrice: "$5,597",
      savings: "$397",
      features: [
        "Executive Resume",
        "Executive Cover Letter",
        "Executive Bio",
        "Executive LinkedIn Optimization",
        "Executive Interview Preparation",
        "Career Strategy",
      ],
    },
  ];

  return (
    <section
      id="packages"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#00B4D8]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00B4D8]">
              Career Packages
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-[46px]">
            Build a complete professional presence with one package.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-[17px]">
            Our signature packages bring complementary services
            together so your professional story remains consistent
            across the documents and platforms that represent you.
          </p>
        </motion.div>

        {/* Intro Notice */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 rounded-2xl border border-[#CAD182]/70 bg-[#CAD182]/20 px-6 py-6 sm:px-8"
        >
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-bold text-slate-950">
                Better alignment. One coordinated engagement.
              </p>

              <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">
                Packages are designed to cover common career needs while
                providing a lower combined price than purchasing the
                included services individually.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-slate-800">
              <BadgeCheck
                size={18}
                className="text-[#00B4D8]"
              />
              Clear package savings
            </div>
          </div>
        </motion.div>

        {/* Package Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;

            return (
              <motion.article
                key={pkg.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className={`relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 sm:p-8 ${
                  pkg.popular
                    ? "border-[#00B4D8] shadow-[0_20px_50px_rgba(0,180,216,0.10)]"
                    : "border-slate-200 hover:-translate-y-1 hover:border-[#00B4D8]/40 hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)]"
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute right-5 top-5 rounded-full bg-[#00B4D8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                    Best Value
                  </div>
                )}

                {/* Package Header */}
                <div className="flex items-start gap-4 pr-20">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#00B4D8]/10 text-[#00B4D8]">
                    <Icon size={21} strokeWidth={2} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#00B4D8]">
                      Package {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-1 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                      {pkg.name}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-slate-500">
                      {pkg.audience}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-6 text-sm leading-6 text-slate-600">
                  {pkg.description}
                </p>

                {/* Pricing */}
                <div className="mt-7 rounded-xl bg-slate-50 p-5">
                  <div className="flex flex-wrap items-end gap-3">
                    <span className="text-3xl font-bold tracking-tight text-slate-950">
                      {pkg.price}
                    </span>

                    <span className="pb-1 text-sm text-slate-400 line-through">
                      {pkg.originalPrice}
                    </span>

                    <span className="mb-1 rounded-full bg-[#CAD182]/40 px-2.5 py-1 text-xs font-bold text-slate-800">
                      Save {pkg.savings}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-400">
                    Combined package price
                  </p>
                </div>

                {/* Included Services */}
                <div className="mt-7">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-900">
                    Included Services
                  </p>

                  <div className="mt-4 space-y-3">
                    {pkg.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00B4D8]/10 text-[#00B4D8]">
                          <BadgeCheck size={13} strokeWidth={2.5} />
                        </span>

                        <span className="text-sm leading-5 text-slate-600">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-8">
                  <Link
                    to="/contact"
                    className={`group inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-bold transition-all duration-300 ${
                      pkg.popular
                        ? "bg-[#00B4D8] text-white hover:-translate-y-0.5 hover:bg-[#009FC0] hover:shadow-lg hover:shadow-[#00B4D8]/20"
                        : "border border-slate-200 bg-white text-slate-900 hover:-translate-y-0.5 hover:border-[#00B4D8] hover:text-[#00B4D8]"
                    }`}
                  >
                    Choose This Package

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Package Comparison Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 grid gap-6 rounded-2xl bg-slate-950 p-6 sm:p-8 lg:grid-cols-[1fr_auto]"
        >
          <div>
            <p className="text-sm font-bold text-white">
              Not sure whether an individual service or package is
              right for you?
            </p>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              Share your current career situation with LPC Careers and
              we can help you identify the most appropriate level of
              support.
            </p>
          </div>

          <div className="flex items-center">
            <Link
              to="/contact#enquiry"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#00B4D8] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#009FC0]"
            >
              Get a Free Review

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CareerPackages;
