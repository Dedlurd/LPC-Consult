import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

function AboutFAQ() {
  const [openQuestion, setOpenQuestion] = useState(0);

  const faqs = [
    {
      question: "What does LPC Careers actually help with?",
      answer:
        "LPC Careers provides professional support across resumes, LinkedIn profile optimization, executive biographies, career strategy, interview preparation, and related career-positioning needs.",
    },
    {
      question: "Do you work with professionals at different career levels?",
      answer:
        "Yes. Our services are structured for different levels of experience, from early-career professionals to experienced specialists, managers, directors, and senior leaders.",
    },
    {
      question: "How personalized is the work?",
      answer:
        "The work is developed around the information you provide, your professional background, your goals, and the audience or opportunity you are targeting. The level of depth depends on the selected service or package.",
    },
    {
      question: "Do you only work on resumes?",
      answer:
        "No. Resumes are one part of the broader support we provide. Depending on your needs, we can also work on LinkedIn positioning, executive biographies, interview preparation, career strategy, and other professional materials.",
    },
    {
      question: "Can LPC Careers help if I am changing careers?",
      answer:
        "Yes. Career transitions often require a different way of presenting existing experience. The work can focus on transferable strengths, relevant evidence, and a clearer connection to the new direction.",
    },
    {
      question: "How involved do I need to be?",
      answer:
        "Your input is important because the quality of the final positioning depends on understanding your real experience and goals. You provide the relevant information, and LPC Careers uses that context to develop the selected service.",
    },
    {
      question: "Is my career information treated confidentially?",
      answer:
        "Professional discretion is an important part of the engagement. Information and documents shared for the purpose of your project should be handled appropriately and only used for the agreed work.",
    },
    {
      question: "Where do I start if I am not sure what I need?",
      answer:
        "You can start with a free review or contact LPC Careers with a description of your current situation. From there, the most appropriate service or package can be identified.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? -1 : index);
  };

  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
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
              About LPC Careers
            </span>

            <span className="h-px w-8 bg-[#00B4D8]" />
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl">
            A few things you may want to know before starting.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-[17px]">
            Some questions are easier to answer before the first
            conversation. Here is a quick overview of how we approach
            our work and client relationships.
          </p>
        </motion.div>

        {/* Questions */}
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
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
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

export default AboutFAQ;