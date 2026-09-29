import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Quote,
  Star,
  ChevronRight,
} from "lucide-react";

function Results() {
  const testimonials = [
    {
      name: "Client Name",
      role: "Marketing Professional",
      quote:
        "LCP Careers helped me present my experience in a much clearer and more professional way. I now feel more confident about how I communicate my value.",
    },
    {
      name: "Client Name",
      role: "Finance Professional",
      quote:
        "The process gave me a clearer understanding of how to position my experience. My professional profile now feels much more aligned with the direction I want to take.",
    },
    {
      name: "Client Name",
      role: "Technology Professional",
      quote:
        "The guidance was practical, structured, and focused on my goals. I was able to turn my experience into a much stronger professional story.",
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

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-950/80" />

        {/* Subtle brand overlay */}
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
            Every career journey is different. Our work focuses on
            helping professionals communicate their experience clearly,
            strengthen their positioning, and approach their next move
            with greater direction.
          </p>
        </motion.div>

        {/* Outcome Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 grid gap-4 sm:grid-cols-3"
        >
          {[
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
          ].map((item, index) => (
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
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group flex min-h-[330px] flex-col rounded-2xl border border-white/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-7"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00B4D8]/10 text-[#00B4D8]">
                  <Quote size={19} fill="currentColor" />
                </div>

                <div className="flex gap-1 text-[#CAD182]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={13}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mt-7 text-[15px] leading-7 text-slate-600">
                “{testimonial.quote}”
              </blockquote>

              {/* Client */}
              <div className="mt-auto flex items-center gap-3 border-t border-slate-100 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CAD182] text-sm font-bold text-slate-900">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-950">
                    {testimonial.name}
                  </p>

                  <p className="mt-0.5 text-xs text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Portfolio CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
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

      {/* Decorative brand shape */}
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#00B4D8]/10 blur-3xl" />
    </section>
  );
}

export default Results;