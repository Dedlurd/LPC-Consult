import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

function ResourcesFAQ() {
  const [openQuestion, setOpenQuestion] = useState(0);

  const faqs = [
    {
      question: "How long should my resume be?",
      answer:
        "There is no single page count that works for every professional. The more important question is whether the document presents relevant experience clearly, efficiently, and with enough evidence to support the target direction.",
    },
    {
      question: "Should I include a photo on my resume?",
      answer:
        "Whether a photo belongs on a resume depends on the market, role, and application context. In many professional hiring environments, a photo is not necessary and can be better omitted unless there is a specific reason to include one.",
    },
    {
      question: "Do cover letters still matter?",
      answer:
        "Their value varies by employer and situation. Where a cover letter is requested or useful for explaining motivation, a tailored letter can add context that a resume alone may not communicate.",
    },
    {
      question: "How should I explain an employment gap?",
      answer:
        "Address the gap honestly and keep the explanation focused on useful context. Where appropriate, highlight professional development, education, consulting, caregiving, personal projects, or other meaningful activity during the period.",
    },
    {
      question: "How often should I update my LinkedIn profile?",
      answer:
        "Review it whenever your role, responsibilities, achievements, skills, or career direction materially changes. It should remain broadly consistent with the professional story you are presenting elsewhere.",
    },
    {
      question: "How many jobs should I apply to each week?",
      answer:
        "Quality and relevance matter more than a fixed application count. A focused search with roles that fit your experience and direction can be more useful than submitting large numbers of generic applications.",
    },
    {
      question: "When should I consider professional career support?",
      answer:
        "Consider it when you are repeatedly struggling to communicate your value, changing direction, preparing for a high-stakes opportunity, or need a more coordinated approach across your professional materials.",
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
              Resources FAQ
            </span>

            <span className="h-px w-8 bg-[#00B4D8]" />
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl">
            Career questions, answered.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-[17px]">
            A few practical answers to questions professionals
            commonly ask while preparing for their next move.
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

export default ResourcesFAQ;