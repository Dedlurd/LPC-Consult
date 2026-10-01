import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

function ContactFAQ() {
  const [openQuestion, setOpenQuestion] = useState(0);

  const faqs = [
    {
      question: "How quickly will I receive a response?",
      answer:
        "LCP Careers is available for enquiries 24 hours a day. Response timing can vary depending on the nature and volume of enquiries, so the specific response window should be confirmed as part of your contact process.",
    },
    {
      question: "Can I contact LCP Careers outside normal business hours?",
      answer:
        "Yes. Enquiries can be submitted at any time. This does not mean every enquiry will receive an immediate response, but you can reach out whenever it is convenient for you.",
    },
    {
      question: "Can I request a 24-hour service?",
      answer:
        "Rush requests can be considered depending on availability, service type, scope, and deadline. Tell us your required delivery date when submitting your enquiry so availability can be assessed.",
    },
    {
      question: "How do I send my resume for a free review?",
      answer:
        "You can start through the Free Career Review page. The review process will provide the appropriate instructions for submitting your current resume and any relevant context.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes. LCP Careers can provide remote professional career support regardless of your location, subject to the service, communication requirements, and agreed engagement terms.",
    },
    {
      question: "What happens after I submit an enquiry?",
      answer:
        "Your request is reviewed to understand what you are targeting and what type of support is most relevant. You can then be guided on the recommended service, scope, timing, and next steps.",
    },
    {
      question: "How is my information handled?",
      answer:
        "Career information and documents should be handled with professional discretion and used for the purpose of the requested service or enquiry. Specific privacy terms should be published once your site's privacy policy is finalized.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? -1 : index);
  };

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
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
              Contact FAQ
            </span>

            <span className="h-px w-8 bg-[#00B4D8]" />
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl">
            Before you write to us.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-[17px]">
            A few answers about contacting LCP Careers, submitting an
            enquiry, and getting started.
          </p>
        </motion.div>

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
      </div>
    </section>
  );
}

export default ContactFAQ;