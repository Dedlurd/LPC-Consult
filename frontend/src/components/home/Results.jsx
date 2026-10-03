import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import {
  ArrowUpRight,
  Quote,
} from "lucide-react";

function CountUp({ from, to, duration = 1800, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out effect
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(
        from + (to - from) * easedProgress
      );

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function Results() {
  const testimonials = [
    {
      name: "Peggy Quinn, ABD",
      role: "Chief of Staff, AI & Data Enablement @ BrightAccounting",
      date: "May 28, 2025",
      quote:
        "I highly recommend Patricia! As I was going through my recent job search, Patricia reached out and partnered with me to update and spruce up my resume! She did a fantastic job and quickly too! She also gave me a couple of options and versions to use. If anyone is looking to upgrade and get a professionally polished resume, I would reach out to her. Highly recommend!",
      image: "/images/testimonials/peggy-quinn.jpg",
    },
    {
      name: "John McGuire",
      role: "Strategic Program & Project Management Leader",
      date: "September 3, 2024",
      quote:
        "I engaged Luna to assist with my resume, LinkedIn profile, and personal website. Luna demonstrated professionalism and thoroughness throughout the process, consistently keeping me updated on progress. She completed the work within the agreed timeframe and promptly made any requested changes. I am extremely pleased with her work and highly recommend her services to help you stand out from the crowd.",
      image: "/images/testimonials/john-mcguire.jpg",
    },
    {
      name: "Robert Guo",
      role: "M365 Digital Learning Instructor",
      date: "July 15, 2024",
      quote:
        "I recommend Luna for their outstanding resume writing skills. They crafted a resume for me that effectively showcased my experience and qualifications, significantly enhancing my job search prospects. Their attention to detail and expertise in highlighting key achievements make them a valuable asset for anyone seeking professional career services.",
      image: "/images/testimonials/robert-guo.jpg",
    },
  ];

  const outcomes = [
    {
      title: "Professional Positioning",
      text: "Present your experience with greater clarity.",
    },
    {
      title: "Career Clarity",
      text: "Build a stronger understanding of your next move.",
    },
    {
      title: "Stronger Presentation",
      text: "Communicate your professional value more effectively.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/80" />

        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/75 to-[#007f96]/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
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
              Results / Client Outcomes
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-[46px]">
            Helping professionals present their value with confidence.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-[17px]">
            Every career journey is different. Our work focuses on helping
            professionals communicate their experience clearly, strengthen
            their positioning, and approach their next move with greater
            direction.
          </p>
        </motion.div>

        {/* Track Record */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-2"
        >
          {/* Professionals Supported */}
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Professionals Supported
            </p>

            <p className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              <CountUp
                from={500}
                to={2000}
                duration={2200}
                suffix="+"
              />
            </p>

            <div className="mt-3 h-1 w-10 rounded-full bg-[#CAD182]" />

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Supporting professionals with clearer career materials and
              stronger professional positioning.
            </p>
          </div>

          {/* Years */}
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Years of Experience
            </p>

            <p className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              10+
            </p>

            <div className="mt-3 h-1 w-10 rounded-full bg-[#CAD182]" />

            <p className="mt-3 text-sm leading-6 text-slate-300">
              More than a decade of experience developing professional career
              materials and positioning.
            </p>
          </div>
        </motion.div>

        {/* Outcome Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 grid gap-4 sm:grid-cols-3"
        >
          {outcomes.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: 0.15 + index * 0.08,
              }}
              className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm"
            >
              <div className="mb-4 h-1 w-8 rounded-full bg-[#CAD182]" />

              <h3 className="text-sm font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14"
        >
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#00B4D8]">
              What Clients Say
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Trusted by professionals navigating important career moves.
            </h3>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group flex min-h-[470px] flex-col rounded-2xl border border-white/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-7"
              >
                {/* Client Header */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#CAD182] text-sm font-bold text-slate-900">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name} profile`}
                      className="h-full w-full object-cover"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";

                        const fallback =
                          event.currentTarget.parentElement.querySelector(
                            "[data-fallback]"
                          );

                        if (fallback) {
                          fallback.classList.remove("hidden");
                        }
                      }}
                    />

                    <span
                      data-fallback
                      className="hidden h-full w-full items-center justify-center"
                    >
                      {testimonial.name
                        .split(" ")
                        .map((word) => word.charAt(0))
                        .slice(0, 2)
                        .join("")}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-950">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Quote Icon */}
                <div className="mt-7 flex h-10 w-10 items-center justify-center rounded-xl bg-[#00B4D8]/10 text-[#00B4D8]">
                  <Quote size={19} fill="currentColor" />
                </div>

                {/* Testimonial */}
                <blockquote className="mt-5 text-[15px] leading-7 text-slate-600">
                  “{testimonial.quote}”
                </blockquote>

                {/* Date */}
                <div className="mt-auto border-t border-slate-100 pt-6">
                  <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-slate-400">
                    Client testimonial
                  </p>

                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    {testimonial.date}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Portfolio CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 px-6 py-7 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:px-8"
        >
          <div>
            <p className="text-sm font-bold text-white">
              Want to see more client outcomes?
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-400">
              Explore our portfolio for additional testimonials,
              professional transformations, and career work.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#00B4D8] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#009FC0] hover:shadow-lg hover:shadow-[#00B4D8]/20"
          >
            View Client Results

            <ArrowUpRight
              size={17}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>

      {/* Decorative Brand Shape */}
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#00B4D8]/10 blur-3xl" />
    </section>
  );
}

export default Results;