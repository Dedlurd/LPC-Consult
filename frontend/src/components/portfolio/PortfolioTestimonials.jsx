import { motion } from "motion/react";
import {
  Quote,
  Star,
} from "lucide-react";

function PortfolioTestimonials() {
  const testimonials = [
    {
      quote:
        "Replace this with a genuine client testimonial describing their experience with LCP Careers.",
      name: "Client Name",
      role: "Professional Title · Industry",
      service: "Resume Writing",
    },
    {
      quote:
        "Replace this with a genuine client testimonial that reflects a verified client experience and outcome.",
      name: "Client Name",
      role: "Professional Title · Industry",
      service: "LinkedIn Optimization",
    },
    {
      quote:
        "Replace this with a genuine client testimonial approved for publication on the LCP Careers website.",
      name: "Client Name",
      role: "Professional Title · Industry",
      service: "Career Package",
    },
    {
      quote:
        "Replace this with another approved testimonial from a real client before launch.",
      name: "Client Name",
      role: "Professional Title · Industry",
      service: "Executive Branding",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
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
              Client Testimonials
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-[46px]">
            What clients say about the experience.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-[17px]">
            Genuine client feedback gives prospective clients a better
            understanding of what it is like to work with LCP Careers.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              className="flex min-h-[280px] flex-col rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"
            >
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

              <blockquote className="mt-7 text-[15px] leading-7 text-slate-600">
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-auto border-t border-slate-100 pt-5">
                <p className="text-sm font-bold text-slate-950">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {testimonial.role}
                </p>

                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#00B4D8]">
                  {testimonial.service}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioTestimonials;