import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  FileText,
  Mail,
  Timer,
} from "lucide-react";

function ContactInformationAndReview() {
  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@lpccareers.com",
    },
    {
      icon: Clock3,
      label: "Availability",
      value: "24-hour enquiries",
    },
    {
      icon: Timer,
      label: "Standard Delivery",
      value: "1–3 days",
    },
    {
      icon: FileText,
      label: "Document Delivery",
      value: "DOCX + PDF where applicable",
    },
  ];

  const reviewBenefits = [
    "Understand how your professional story is currently presented",
    "Identify areas where your positioning may need more clarity",
    "Get guidance on where to begin based on your goals",
  ];

  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#00B4D8]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00B4D8]">
                Contact Information
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Reach LPC Careers directly.
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Use the details below for general enquiries, service
              questions, and requests related to your career materials.
            </p>

            <div className="mt-8 space-y-4">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#00B4D8]/10 text-[#00B4D8]">
                      <Icon size={18} strokeWidth={2} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                        {item.label}
                      </p>

                      {item.label === "Email" ? (
                        <a
                          href="mailto:hello@lpccareers.com"
                          className="mt-1 block text-sm font-bold text-slate-950 transition-colors hover:text-[#00B4D8]"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-bold text-slate-950">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-7 border-t border-slate-200 pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                Service Area
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Remote professional career support for clients across
                different industries and career stages.
              </p>
            </div>

            <a
              href="mailto:hello@lpccareers.com"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#00B4D8] transition-colors hover:text-slate-900"
            >
              Send an email

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          {/* Free Review */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl bg-slate-950"
          >
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85"
                alt=""
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-slate-950/78" />

              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-[#00B4D8]/20" />
            </div>

            <div className="relative flex h-full flex-col justify-center p-6 sm:p-8 lg:p-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00B4D8] text-white">
                <FileText size={21} strokeWidth={2} />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.15em] text-[#00B4D8]">
                Free Career Review
              </p>

              <h2 className="mt-3 max-w-lg text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl">
                Not sure which service is right for you?
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                Start by sharing your current resume and telling us
                what you are trying to achieve. LPC Careers can help you
                identify areas that may need stronger positioning and
                where to begin.
              </p>

              <div className="mt-7 space-y-4">
                {reviewBenefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#00B4D8]"
                      strokeWidth={2.2}
                    />

                    <p className="text-sm leading-6 text-slate-300">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                to="/contact#enquiry"
                className="group mt-8 inline-flex items-center justify-center gap-2 self-start rounded-lg bg-[#00B4D8] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#009FC0] hover:shadow-lg hover:shadow-[#00B4D8]/20"
              >
                Get Your Free Review

                <ArrowUpRight
                  size={17}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactInformationAndReview;
