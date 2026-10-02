import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import {
  ArrowUpRight,
  FileText,
  UserRound,
  Compass,
  BriefcaseBusiness,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Counter({ value, suffix = "", duration = 1.8 }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    let animationFrame;

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(
        elapsed / (duration * 1000),
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(value * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function Services() {
  const services = [
    {
      icon: FileText,
      title: "Resume Writing",
      description:
        "Professionally structured resumes that communicate your experience clearly and position you for your target opportunities.",
      price: "From $200",
    },
    {
      icon: BriefcaseBusiness,
      title: "LinkedIn Profile Optimization",
      description:
        "Strategic profile improvements that strengthen your professional presence and make your LinkedIn profile work harder for you.",
      price: "From $200",
    },
    {
      icon: UserRound,
      title: "Executive Bio",
      description:
        "Concise, professional executive biographies designed for leadership profiles, company websites, speaking engagements, and professional platforms.",
      price: "From $200",
    },
    {
      icon: Compass,
      title: "Career Strategy",
      description:
        "Personalized career direction and practical strategy for navigating your next professional move with greater clarity.",
      price: "From $500",
    },
  ];

  const stats = [
    {
      value: 500,
      suffix: "+",
      label: "Professionals supported",
    },
    {
      value: 85,
      suffix: "%",
      label: "Interview rate",
    },
    {
      value: 8,
      suffix: "+",
      label: "Years of experience",
    },
    {
      value: 15,
      suffix: "+",
      label: "Industries served",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* SECTION INTRO */}
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
                What We Do
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.025em] text-slate-950 sm:text-4xl lg:text-[42px]">
              Professional support for every stage of your career.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              From your resume and LinkedIn profile to executive
              positioning and long-term career direction, our services
              are built around helping you present yourself with
              greater clarity and confidence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#00B4D8] transition-colors hover:text-slate-900"
            >
              View all services

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* SERVICES */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group flex min-h-[330px] flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00B4D8]/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00B4D8]/10 text-[#00B4D8] transition-colors duration-300 group-hover:bg-[#00B4D8] group-hover:text-white">
                    <Icon size={20} strokeWidth={2} />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#00B4D8]"
                  />
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-bold text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto border-t border-slate-100 pt-5">
                  <p className="text-sm font-bold text-slate-900">
                    {service.price}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* LIVE STATISTICS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-14 overflow-hidden rounded-2xl bg-slate-950"
        >
          <div className="grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="px-6 py-7 text-center sm:px-5 lg:py-8"
              >
                <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </p>

                <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-7 flex flex-col gap-4 rounded-2xl border border-[#CAD182]/60 bg-[#CAD182]/20 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-2xl text-sm leading-6 text-slate-700">
            Not sure which service fits your situation? Start with a
            free review and identify where your professional profile
            needs the most attention.
          </p>

          <Link
            to="/contact#enquiry"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-slate-900 transition-colors hover:text-[#00B4D8]"
          >
            Get a free review

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default Services;
