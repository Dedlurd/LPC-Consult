import { motion } from "motion/react";
import {
  BookOpen,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";

function FeaturedInsight() {
  const keyPoints = [
    "Lead with the experience and achievements most relevant to your target direction.",
    "Replace responsibility-heavy descriptions with evidence of contribution, scope, and impact.",
    "Keep your resume, LinkedIn profile, and professional biography aligned around the same professional story.",
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#00B4D8]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00B4D8]">
              Featured Insight
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl">
            Your professional story should make your value easier to see.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-[17px]">
            One of the most important parts of career positioning is
            deciding what the reader should understand about you within
            the first few moments of reviewing your materials.
          </p>
        </motion.div>

        {/* Featured Content */}
        <motion.article
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
        >
          <div className="grid lg:grid-cols-[1fr_1fr]">
            {/* Image */}
            <div className="relative min-h-[360px] overflow-hidden lg:min-h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85"
                alt="Professional reviewing career documents"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-800 backdrop-blur-sm">
                  <BookOpen size={14} className="text-[#00B4D8]" />
                  Career Strategy
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00B4D8]/10 text-[#00B4D8]">
                <Lightbulb size={21} strokeWidth={2} />
              </div>

              <p className="mt-6 text-sm font-bold uppercase tracking-[0.12em] text-[#00B4D8]">
                The key idea
              </p>

              <h3 className="mt-3 text-2xl font-bold leading-8 tracking-tight text-slate-950 sm:text-3xl">
                Don't make the reader work to understand your value.
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
                Many professionals have strong experience but present it
                as a list of duties. A stronger approach is to make your
                contribution, scope, and results easier to recognize.
                The objective is not to exaggerate your career. It is to
                make the important parts of your real experience more
                visible and relevant.
              </p>

              <div className="mt-7 space-y-4">
                {keyPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00B4D8]/10 text-[#00B4D8]">
                      <CheckCircle2 size={15} strokeWidth={2.2} />
                    </span>

                    <p className="text-sm leading-6 text-slate-600">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-slate-200 pt-5">
                <p className="text-sm font-semibold leading-6 text-slate-700">
                  The strongest materials don't simply contain more
                  information. They make the most important information
                  easier to find and understand.
                </p>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default FeaturedInsight;