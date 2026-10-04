import { motion } from "motion/react";
import { Quote } from "lucide-react";

function PortfolioTestimonials() {
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

  return (
    <section className="bg-slate-50 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
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
              Client Testimonials
            </span>

            <span className="h-px w-8 bg-[#00B4D8]" />
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            What professionals say about their experience.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Real feedback from professionals who worked with LCP Careers
            on their career materials and professional positioning.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)] sm:p-7"
            >
              {/* Client Information */}
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
                  <h3 className="text-sm font-bold text-slate-950">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="mt-7 flex h-10 w-10 items-center justify-center rounded-xl bg-[#00B4D8]/10 text-[#00B4D8]">
                <Quote size={19} fill="currentColor" />
              </div>

              {/* Review */}
              <blockquote className="mt-5 text-[15px] leading-7 text-slate-600">
                “{testimonial.quote}”
              </blockquote>

              {/* Date */}
              <div className="mt-auto border-t border-slate-100 pt-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
                  Client testimonial
                </p>

                <p className="mt-1 text-xs font-medium text-slate-500">
                  {testimonial.date}
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