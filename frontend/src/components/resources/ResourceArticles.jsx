import { useState } from "react";
import { motion } from "motion/react";
import {
  FileText,
  BriefcaseBusiness,
  MessageCircle,
  Target,
  RefreshCcw,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  "All",
  "Resume",
  "Professional Branding",
  "Interview",
  "Career Strategy",
  "Career Transition",
];

const articles = [
  {
    id: 1,
    category: "Resume",
    title: "Make your resume easier to understand in seconds",
    excerpt:
      "A strong resume should help the reader quickly identify what you have done, what you are good at, and where your experience fits.",
    takeaway:
      "Lead with relevant achievements and evidence instead of making the reader search through long responsibility lists.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    icon: FileText,
  },
  {
    id: 2,
    category: "Resume",
    title: "Replace duties with evidence of contribution",
    excerpt:
      "Job descriptions explain what a role required. Your resume should explain what you contributed while performing that role.",
    takeaway:
      "Whenever possible, connect an action to an outcome, improvement, scale, responsibility, or measurable result.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    icon: FileText,
  },
  {
    id: 3,
    category: "Professional Branding",
    title: "Your LinkedIn profile should support your professional story",
    excerpt:
      "Your resume, LinkedIn profile, and professional introduction should communicate the same overall direction without simply repeating the same wording.",
    takeaway:
      "Make your headline specific enough to show your professional direction and the value you bring.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    icon: BriefcaseBusiness,
  },
  {
    id: 4,
    category: "Professional Branding",
    title: "Professional positioning is more than looking polished",
    excerpt:
      "Good presentation matters, but professional positioning also requires clarity about the kind of opportunities you want to be considered for.",
    takeaway:
      "Choose language that connects your experience to your target direction rather than trying to appeal to every possible employer.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    icon: Target,
  },
  {
    id: 5,
    category: "Interview",
    title: "Prepare stories, not memorized answers",
    excerpt:
      "Interview preparation becomes stronger when you can explain real situations clearly instead of trying to memorize perfect responses.",
    takeaway:
      "Prepare several examples that demonstrate leadership, problem-solving, collaboration, adaptability, and results.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    icon: MessageCircle,
  },
  {
    id: 6,
    category: "Interview",
    title: "Connect your answers to the role",
    excerpt:
      "A good interview answer should not only explain what happened. It should help the interviewer understand why your experience matters for the opportunity.",
    takeaway:
      "After describing an example, make the relevance clear by connecting the experience to the role you are pursuing.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    icon: MessageCircle,
  },
  {
    id: 7,
    category: "Career Strategy",
    title: "Do not let your next career move happen by accident",
    excerpt:
      "Career progress becomes easier to manage when you define the direction you are moving toward before changing your materials or applying widely.",
    takeaway:
      "Identify your target role, industry, level, location preference, and strongest transferable skills before beginning a large job search.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    icon: Target,
  },
  {
    id: 8,
    category: "Career Strategy",
    title: "Your strongest qualifications should be easy to find",
    excerpt:
      "Hiring managers and recruiters may review many applications. Important qualifications should therefore appear where they can quickly be understood.",
    takeaway:
      "Prioritize the experience, skills, and achievements most relevant to your target opportunity rather than giving everything equal emphasis.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    icon: BriefcaseBusiness,
  },
  {
    id: 9,
    category: "Career Transition",
    title: "Career changes require translation, not reinvention",
    excerpt:
      "Changing industries or functions does not mean your previous experience has no value. The challenge is communicating its relevance.",
    takeaway:
      "Identify transferable skills, experiences, and achievements that demonstrate how your previous background supports the new direction.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    icon: RefreshCcw,
  },
];

function ResourceArticles() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  return (
    <section
      id="articles"
      className="scroll-mt-28 bg-white px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#00B4D8]">
            Career Articles & Guides
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Practical advice you can apply to your next career move.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Explore practical guidance on resumes, professional branding,
            interviews, career strategy, and career transitions.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-[#00B4D8] bg-[#00B4D8] text-white shadow-[0_8px_20px_rgba(0,180,216,0.18)]"
                    : "border-slate-200 bg-white text-slate-600 hover:border-[#00B4D8]/40 hover:text-slate-950"
                }`}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Articles */}
        <motion.div
          layout
          className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3"
        >
          {filteredArticles.map((article, index) => {
            const Icon = article.icon;

            return (
              <motion.article
                layout
                key={article.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -5 }}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-slate-950/20" />

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-bold text-slate-800 shadow-sm backdrop-blur-sm">
                    <Icon size={14} strokeWidth={2.4} />
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-extrabold leading-tight text-slate-950">
                    {article.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {article.excerpt}
                  </p>

                  <div className="mt-6 rounded-2xl bg-[#caf0f8]/50 p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0077B6]">
                      Practical takeaway
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {article.takeaway}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-slate-900">
                    <span>Use this in your career planning</span>
                    <ArrowUpRight
                      size={17}
                      strokeWidth={2.4}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-14 max-w-3xl rounded-3xl border border-[#90e0ef]/60 bg-[#caf0f8]/30 p-6 text-center sm:p-8"
        >
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            Good career materials do more than look polished. They make your
            experience, direction, and value easier for the right people to
            understand.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ResourceArticles;