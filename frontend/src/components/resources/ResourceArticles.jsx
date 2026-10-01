import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BriefcaseBusiness,
  FileText,
  Search,
  Target,
  UsersRound,
} from "lucide-react";

function ResourceArticles() {
  const [activeCategory, setActiveCategory] = useState("All");

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
      title: "Make your strongest experience visible first",
      description:
        "Your resume should make your most relevant experience easy to find. Lead with achievements, responsibilities, or capabilities that directly support the type of role you are pursuing.",
      advice:
        "A useful test is to look at the first third of your resume and ask: if someone read only this section, would they understand what I can contribute?",
      icon: FileText,
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      category: "Professional Branding",
      title: "Make your professional presence tell one story",
      description:
        "Your resume, LinkedIn profile, and professional biography should reinforce the same overall positioning rather than describing completely different versions of your career.",
      advice:
        "Keep your role, expertise, strengths, and career direction broadly consistent across the platforms people use to evaluate you.",
      icon: BriefcaseBusiness,
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      category: "Interview",
      title: "Use evidence instead of general statements",
      description:
        "Interview answers become stronger when they explain what happened, what you personally did, and what changed because of your actions.",
      advice:
        "When preparing examples, focus on the situation, your specific contribution, the decisions you made, and the result that followed.",
      icon: UsersRound,
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 4,
      category: "Career Strategy",
      title: "Choose your next move deliberately",
      description:
        "A career move should be evaluated against more than job title. Consider the responsibilities, learning opportunity, organizational environment, future options, and alignment with your longer-term direction.",
      advice:
        "Write down what you want more of, what you want less of, and what must be true for the next role to make sense before beginning your search.",
      icon: Target,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 5,
      category: "Career Transition",
      title: "Translate your experience instead of hiding it",
      description:
        "Changing fields does not mean discarding everything you have done. The goal is to identify the parts of your previous experience that remain valuable in the new direction.",
      advice:
        "Start by mapping your strongest transferable skills, responsibilities, and achievements to the language and requirements of the target field.",
      icon: Target,
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 6,
      category: "Resume",
      title: "Replace duty lists with contribution",
      description:
        "Statements such as 'responsible for managing' often tell the reader what your job was without explaining what you actually contributed.",
      advice:
        "Where the evidence exists, show scale, improvements, outcomes, efficiency gains, revenue, cost savings, team size, project scope, or other meaningful measures.",
      icon: FileText,
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 7,
      category: "Professional Branding",
      title: "Your headline should communicate direction",
      description:
        "A generic title may describe your current position, but it often tells people very little about your expertise or the professional direction you are building.",
      advice:
        "Use your headline to communicate your professional area, relevant expertise, and the value or direction you want to be associated with.",
      icon: BriefcaseBusiness,
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 8,
      category: "Interview",
      title: "Prepare stories before you prepare answers",
      description:
        "Trying to memorize answers can make interviews feel rigid. Preparing a library of career examples gives you evidence that can be adapted to different questions.",
      advice:
        "Prepare examples covering leadership, problem-solving, conflict, failure, initiative, teamwork, change, and measurable achievement.",
      icon: UsersRound,
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 9,
      category: "Career Strategy",
      title: "Do not confuse activity with progress",
      description:
        "Sending more applications is not automatically the same as running a better job search. Relevance, positioning, networking, preparation, and follow-up all matter.",
      advice:
        "Track the quality of the opportunities you pursue and the response you receive, then adjust the parts of your strategy that are not producing useful movement.",
      icon: Search,
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const filteredArticles = useMemo(() => {
    if (activeCategory === "All") {
      return articles;
    }

    return articles.filter(
      (article) => article.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section
      id="articles"
      className="bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
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
              Career Articles & Guides
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-[46px]">
            Practical advice for the decisions that matter.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-[17px]">
            Use these ideas to improve how you present your experience,
            approach opportunities, and think about your next career
            move.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-[#00B4D8] bg-[#00B4D8] text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-[#00B4D8]/50 hover:text-[#00B4D8]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>


        {/* Advice Cards */}
        <motion.div
          layout
          className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article) => {
              const Icon = article.icon;

              return (
                <motion.article
                  key={article.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#00B4D8]/40 hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)]"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-800 backdrop-blur-sm">
                        <Icon
                          size={14}
                          className="text-[#00B4D8]"
                        />

                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold leading-7 tracking-tight text-slate-950">
                      {article.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {article.description}
                    </p>

                    <div className="mt-6 rounded-xl border border-[#00B4D8]/15 bg-[#00B4D8]/5 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#00B4D8]">
                        Practical takeaway
                      </p>

                      <p className="mt-2 text-sm font-medium leading-6 text-slate-700">
                        {article.advice}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default ResourceArticles;