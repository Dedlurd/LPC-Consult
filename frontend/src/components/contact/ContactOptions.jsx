import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Clock3,
  FileSearch,
  Mail,
  MessageSquare,
} from "lucide-react";

function ContactOptions() {
  const options = [
    {
      icon: Mail,
      title: "Email LCP Careers",
      text: "For written enquiries, service questions, documents, and quotes.",
      action: "Send an email",
      href: "mailto:hello@lcpcareers.com",
    },
    {
      icon: FileSearch,
      title: "Free Career Review",
      text: "Start with an initial review when you're unsure which service you need.",
      action: "Get a free review",
      href: "/free-review",
    },
    {
      icon: MessageSquare,
      title: "Discuss Your Needs",
      text: "Tell us about your career situation and get guidance on where to begin.",
      action: "Start an enquiry",
      href: "#enquiry",
    },
    {
      icon: Clock3,
      title: "Rush Request",
      text: "Need an urgent turnaround? Tell us your deadline so availability can be checked.",
      action: "Request rush support",
      href: "#enquiry",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch lg:gap-14">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[440px] overflow-hidden rounded-2xl bg-slate-950"
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
              alt="Professionals discussing a project in a modern workspace"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-7 sm:left-7 sm:right-7">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#00B4D8]">
                Get in touch
              </p>

              <h2 className="mt-3 text-2xl font-bold leading-8 text-white sm:text-3xl">
                Start with your situation. We can work from there.
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
                Whether you know exactly what you need or are still
                figuring it out, your first conversation can start with
                a simple explanation of where you are now.
              </p>
            </div>
          </motion.div>

          {/* Contact Cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#00B4D8]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00B4D8]">
                  Ways to Reach Us
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl">
                Choose the way that works best for you.
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                Use email for written enquiries, the free review for
                document feedback, or the enquiry form when you want to
                explain your situation in more detail.
              </p>
            </motion.div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {options.map((option, index) => {
                const Icon = option.icon;

                const isHashLink = option.href.startsWith("#");

                return (
                  <motion.div
                    key={option.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                    }}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00B4D8]/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00B4D8]/10 text-[#00B4D8] transition-colors duration-300 group-hover:bg-[#00B4D8] group-hover:text-white">
                      <Icon size={19} strokeWidth={2} />
                    </div>

                    <h3 className="mt-6 text-lg font-bold tracking-tight text-slate-950">
                      {option.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {option.text}
                    </p>

                    {isHashLink ? (
                      <a
                        href={option.href}
                        className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#00B4D8]"
                      >
                        {option.action}

                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        />
                      </a>
                    ) : option.href.startsWith("mailto:") ? (
                      <a
                        href={option.href}
                        className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#00B4D8]"
                      >
                        {option.action}

                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        />
                      </a>
                    ) : (
                      <Link
                        to={option.href}
                        className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#00B4D8]"
                      >
                        {option.action}

                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        />
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                    Availability
                  </p>

                  <p className="mt-2 text-sm font-bold text-slate-950">
                    24-hour enquiry availability
                  </p>
                </div>

                <div className="h-px flex-1 bg-slate-200 sm:mx-6" />

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                    Standard Delivery
                  </p>

                  <p className="mt-2 text-sm font-bold text-slate-950">
                    1–3 days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactOptions;