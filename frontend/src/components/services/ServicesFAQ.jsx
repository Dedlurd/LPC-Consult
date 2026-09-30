import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronDown,
  HelpCircle,
} from "lucide-react";

function ServicesFAQ() {
  const [openQuestion, setOpenQuestion] = useState(0);

  const faqs = [
    {
      question: "How quickly will my service be completed?",
      answer:
        "Standard delivery is generally targeted within 1–3 days. The final turnaround depends on the service selected, the agreed scope of work, and how quickly the required information is provided.",
    },
    {
      question: "What do I need to provide before work begins?",
      answer:
        "Depending on the service, you may need to provide your current resume or career history, target role or opportunity, relevant achievements, professional background, and any specific requirements that should be considered.",
    },
    {
      question: "Can you tailor my documents to a specific job?",
      answer:
        "Yes. Where the selected service includes targeted positioning, your materials can be developed around the role, industry, opportunity, or professional direction you are pursuing.",
    },
    {
      question: "What file formats will I receive?",
      answer:
        "Document-based services can be delivered in DOCX and PDF formats where applicable. The exact deliverables are confirmed before work begins.",
    },
    {
      question: "Should I choose an individual service or a career package?",
      answer:
        "An individual service is suitable when you have one specific need. A career package is more appropriate when several professional materials need to work together as one consistent career story.",
    },
    {
      question: "Are revisions included?",
      answer:
        "Revision support depends on the service and tier selected. The applicable revision terms and scope are confirmed before the engagement begins so expectations are clear.",
    },
    {
      question: "Can I request an urgent or rush service?",
      answer:
        "Rush requests may be considered depending on availability, service type, and workload. Contact LCP Careers before placing your request so the timing and any applicable arrangements can be confirmed.",
    },
    {
      question: "How do I get started?",
      answer:
        "Choose the service or package that best fits your needs, then contact LCP Careers with your requirements. You will be guided through the next steps and provided with the information needed to begin.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? -1 : index);
  };

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#00B4D8]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00B4D8]">
              Frequently Asked Questions
            </span>

            <span className="h-px w-8 bg-[#00B4D8]" />
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl">
            Questions before you get started?
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-[17px]">
            Here are answers to some of the most common questions
            about our services, delivery process, and engagement.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openQuestion === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#00B4D8]/50 shadow-[0_12px_35px_rgba(0,0,0,0.05)]"
                    : "border-slate-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
                      isOpen
                        ? "bg-[#00B4D8] text-white"
                        : "bg-[#00B4D8]/10 text-[#00B4D8]"
                    }`}
                  >
                    <HelpCircle size={18} strokeWidth={2} />
                  </span>

                  <span className="flex-1 text-sm font-bold text-slate-950 sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown size={17} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="border-t border-slate-100 px-5 pb-6 pl-[68px] sm:px-6 sm:pb-6 sm:pl-[74px]">
                        <p className="max-w-3xl text-sm leading-6 text-slate-500 sm:text-[15px]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Help Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 overflow-hidden rounded-2xl bg-slate-950"
        >
          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#00B4D8]">
                Still Have Questions?
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
                Tell us what you need help with.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                Every career situation is different. Contact LCP Careers
                with your question and we can help you understand the
                most appropriate next step.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#00B4D8] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#009FC0] hover:shadow-lg hover:shadow-[#00B4D8]/20"
            >
              Contact LCP Careers

              <ArrowUpRight
                size={17}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesFAQ;