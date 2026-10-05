import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FileText,
  BriefcaseBusiness,
  UserRound,
  Target,
  Award,
  ClipboardCheck,
  Search,
  Crown,
  UsersRound,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function IndividualServices() {
  const [openService, setOpenService] = useState(1);

  const services = [
    {
      number: "01",
      title: "Resume Writing / Rewriting",
      shortDescription:
        "A professionally written or rewritten resume designed to communicate your experience, achievements, and career direction clearly.",
      icon: FileText,
      tiers: [
        {
          name: "Basic",
          price: "$395",
          description:
            "A focused resume refresh for professionals who need stronger structure, clarity, and presentation.",
          features: [
            "Professional resume structure",
            "Content refinement",
            "Achievement-focused language",
            "ATS-conscious formatting",
          ],
        },
        {
          name: "Professional",
          price: "$749",
          description:
            "A more strategic resume for professionals actively positioning themselves for competitive opportunities.",
          features: [
            "Complete resume rewrite",
            "Strategic professional positioning",
            "Achievement and impact development",
            "ATS-conscious structure",
            "Professional formatting",
          ],
        },
        {
          name: "Executive",
          price: "$1,250",
          description:
            "A high-level executive resume built around leadership scope, influence, strategic contribution, and career direction.",
          features: [
            "Executive-level resume development",
            "Leadership positioning",
            "Strategic achievement development",
            "Career narrative refinement",
            "Executive presentation",
          ],
        },
      ],
    },
    {
      number: "02",
      title: "Cover Letter Writing",
      shortDescription:
        "A tailored cover letter that connects your background, strengths, and career direction to the opportunity you are pursuing.",
      icon: ClipboardCheck,
      tiers: [
        {
          name: "Basic",
          price: "$200",
          description:
            "A concise cover letter designed around a specific role and professional direction.",
          features: [
            "Role-specific positioning",
            "Professional introduction",
            "Relevant experience alignment",
            "Polished final copy",
          ],
        },
        {
          name: "Professional",
          price: "$375",
          description:
            "A stronger, more tailored cover letter designed to communicate your value with greater precision.",
          features: [
            "Detailed role alignment",
            "Personalized professional narrative",
            "Relevant achievement integration",
            "Stronger closing positioning",
            "Professional formatting",
          ],
        },
        {
          name: "Executive",
          price: "$499",
          description:
            "An executive-level cover letter built around leadership impact, strategic experience, and senior-level positioning.",
          features: [
            "Executive positioning",
            "Leadership-focused narrative",
            "Strategic experience alignment",
            "High-level professional messaging",
            "Executive presentation",
          ],
        },
      ],
    },
    {
      number: "03",
      title: "LinkedIn Profile Optimization",
      shortDescription:
        "A stronger LinkedIn presence that aligns your professional profile with the opportunities, industries, and roles you want to pursue.",
      icon: BriefcaseBusiness,
      tiers: [
        {
          name: "Basic",
          price: "$495",
          description:
            "A focused optimization of your core LinkedIn profile sections.",
          features: [
            "Headline refinement",
            "About section improvement",
            "Experience section optimization",
            "Core positioning guidance",
          ],
        },
        {
          name: "Professional",
          price: "$1,050",
          description:
            "A complete professional LinkedIn positioning service designed around your career direction.",
          features: [
            "Complete profile optimization",
            "Professional headline",
            "Strategic About section",
            "Experience positioning",
            "Skills and keyword guidance",
          ],
        },
        {
          name: "Executive",
          price: "$1,750",
          description:
            "A strategic executive LinkedIn profile designed to strengthen authority, leadership positioning, and professional visibility.",
          features: [
            "Executive profile positioning",
            "Leadership-focused About section",
            "Strategic career narrative",
            "Executive experience positioning",
            "Professional visibility guidance",
          ],
        },
      ],
    },
    {
      number: "04",
      title: "Executive Bio",
      shortDescription:
        "A polished professional biography for senior professionals, leaders, founders, speakers, websites, and professional profiles.",
      icon: UserRound,
      tiers: [
        {
          name: "Basic",
          price: "$200",
          description:
            "A concise professional biography that communicates your background and current professional identity.",
          features: [
            "Professional biography",
            "Career highlights",
            "Clear professional positioning",
            "Polished final copy",
          ],
        },
        {
          name: "Professional",
          price: "$375",
          description:
            "A more developed professional bio with stronger narrative flow and positioning.",
          features: [
            "Expanded career narrative",
            "Achievement integration",
            "Professional positioning",
            "Audience-aware messaging",
            "Refined final copy",
          ],
        },
        {
          name: "Executive",
          price: "$499",
          description:
            "A leadership-focused biography designed to communicate credibility, influence, and executive presence.",
          features: [
            "Executive-level narrative",
            "Leadership positioning",
            "Strategic achievement integration",
            "Authority-focused messaging",
            "Executive-ready presentation",
          ],
        },
      ],
    },
    {
      number: "05",
      title: "KSA Statements",
      shortDescription:
        "Professionally developed Knowledge, Skills, and Abilities statements that connect your qualifications and experience to the requirements of the role.",
      icon: Target,
      tiers: [
        {
          name: "Basic",
          price: "$200",
          description:
            "Focused support for developing clear and relevant KSA statements.",
          features: [
            "Requirement alignment",
            "Relevant experience selection",
            "Clear professional writing",
            "Structured presentation",
          ],
        },
        {
          name: "Professional",
          price: "$375",
          description:
            "More detailed KSA development with stronger evidence and positioning.",
          features: [
            "Detailed requirement mapping",
            "Evidence-based writing",
            "Achievement integration",
            "Professional narrative",
          ],
        },
        {
          name: "Executive",
          price: "$499",
          description:
            "High-level KSA development for senior and leadership opportunities.",
          features: [
            "Strategic requirement alignment",
            "Leadership evidence",
            "Complex achievement development",
            "Executive-level positioning",
          ],
        },
      ],
    },
    {
      number: "06",
      title: "Chairman & Board Appointment Profile",
      shortDescription:
        "A concise and strategically positioned profile designed for board, chairman, advisory, and governance-level opportunities.",
      icon: Crown,
      tiers: [
        {
          name: "Basic",
          price: "$200",
          description:
            "A focused board profile presenting your leadership background, governance relevance, and professional credibility.",
          features: [
            "Board-focused profile",
            "Leadership summary",
            "Relevant governance experience",
            "Professional positioning",
          ],
        },
        {
          name: "Professional",
          price: "$375",
          description:
            "A stronger board appointment profile built around leadership experience, strategic contribution, and organizational influence.",
          features: [
            "Board positioning strategy",
            "Leadership and governance narrative",
            "Relevant achievement integration",
            "Strategic experience presentation",
            "Professional formatting",
          ],
        },
        {
          name: "Executive",
          price: "$499",
          description:
            "A senior-level board profile designed to communicate authority, governance value, strategic influence, and leadership depth.",
          features: [
            "Executive board positioning",
            "Governance-focused narrative",
            "Leadership impact",
            "Strategic influence positioning",
            "High-level professional presentation",
          ],
        },
      ],
    },
    {
      number: "07",
      title: "Executive One-Page Profile",
      shortDescription:
        "A concise executive snapshot designed to communicate your leadership identity, expertise, achievements, and value in a single page.",
      icon: FileText,
      tiers: [
        {
          name: "Basic",
          price: "$200",
          description:
            "A concise one-page executive profile covering your key experience and professional identity.",
          features: [
            "One-page executive summary",
            "Career highlights",
            "Core expertise",
            "Professional positioning",
          ],
        },
        {
          name: "Professional",
          price: "$375",
          description:
            "A more strategic one-page profile built around leadership impact and professional differentiation.",
          features: [
            "Executive positioning",
            "Leadership summary",
            "Selected achievements",
            "Core expertise positioning",
            "Professional formatting",
          ],
        },
        {
          name: "Executive",
          price: "$499",
          description:
            "A high-impact executive profile designed for senior leaders who need a concise and authoritative professional snapshot.",
          features: [
            "Executive-level positioning",
            "Leadership identity",
            "Strategic achievement highlights",
            "Executive value proposition",
            "Premium one-page presentation",
          ],
        },
      ],
    },
    {
      number: "08",
      title: "Executive Leadership Profile",
      shortDescription:
        "A strategic profile that presents your leadership experience, influence, expertise, and executive value across professional opportunities.",
      icon: UsersRound,
      tiers: [
        {
          name: "Basic",
          price: "$200",
          description:
            "A focused leadership profile that communicates your management experience and professional strengths.",
          features: [
            "Leadership overview",
            "Management experience",
            "Professional positioning",
            "Polished final copy",
          ],
        },
        {
          name: "Professional",
          price: "$375",
          description:
            "A more detailed profile for experienced leaders seeking stronger positioning.",
          features: [
            "Leadership narrative",
            "Management scope",
            "Achievement development",
            "Strategic positioning",
            "Professional formatting",
          ],
        },
        {
          name: "Executive",
          price: "$499",
          description:
            "An executive leadership profile built to communicate influence, strategic contribution, and leadership depth.",
          features: [
            "Executive leadership positioning",
            "Strategic influence",
            "Leadership achievements",
            "Career narrative refinement",
            "Executive presentation",
          ],
        },
      ],
    },
    {
      number: "09",
      title: "ECQ",
      shortDescription:
        "Professionally structured Executive Core Qualifications that communicate leadership competencies and evidence for senior-level opportunities.",
      icon: Award,
      tiers: [
        {
          name: "Basic",
          price: "$300",
          description:
            "Focused support for developing clear and relevant ECQ narratives.",
          features: [
            "ECQ structure",
            "Relevant experience selection",
            "Clear leadership writing",
            "Professional presentation",
          ],
        },
        {
          name: "Professional",
          price: "$499",
          description:
            "Detailed ECQ development with stronger evidence and leadership positioning.",
          features: [
            "Leadership competency mapping",
            "Evidence-based narrative",
            "Achievement integration",
            "Strategic positioning",
          ],
        },
        {
          name: "Executive",
          price: "$749",
          description:
            "Comprehensive ECQ development for senior executive opportunities and leadership-level applications.",
          features: [
            "Executive-level positioning",
            "Complex leadership examples",
            "Strategic achievement development",
            "Competency alignment",
            "Executive-ready presentation",
          ],
        },
      ],
    },
    {
      number: "10",
      title: "Interview Preparation",
      shortDescription:
        "Structured preparation to help you communicate your experience, answer difficult questions, and approach interviews with greater confidence.",
      icon: Search,
      tiers: [
        {
          name: "Basic",
          price: "$500",
          description:
            "Focused interview preparation around your target role and professional background.",
          features: [
            "Interview preparation guidance",
            "Common question review",
            "Professional story development",
            "Role-specific preparation",
          ],
        },
        {
          name: "Professional",
          price: "$705",
          description:
            "A deeper preparation process with structured practice and stronger response development.",
          features: [
            "Detailed interview preparation",
            "Role-specific questions",
            "Achievement story development",
            "Response refinement",
            "Interview strategy",
          ],
        },
        {
          name: "Executive",
          price: "$1,099",
          description:
            "Senior-level interview preparation focused on executive presence, strategic communication, and high-stakes conversations.",
          features: [
            "Executive interview preparation",
            "Leadership storytelling",
            "Strategic question preparation",
            "Executive communication",
            "High-stakes interview strategy",
          ],
        },
      ],
    },
    {
      number: "11",
      title: "Job Search Assistance",
      shortDescription:
        "Practical support to help you organize your search, identify relevant opportunities, and approach your job search more strategically.",
      icon: BriefcaseBusiness,
      tiers: [
        {
          name: "Basic",
          price: "$10",
          description:
            "Simple job search guidance to help you establish a clearer starting point.",
          features: [
            "Search direction",
            "Opportunity identification",
            "Basic job search guidance",
            "Action recommendations",
          ],
        },
        {
          name: "Professional",
          price: "$15",
          description:
            "More structured assistance for professionals actively navigating a targeted job search.",
          features: [
            "Target opportunity guidance",
            "Search strategy",
            "Application prioritization",
            "Job search organization",
          ],
        },
        {
          name: "Executive",
          price: "$20",
          description:
            "Focused support for senior professionals managing a selective and strategic search.",
          features: [
            "Executive opportunity targeting",
            "Search strategy",
            "Opportunity prioritization",
            "Strategic application guidance",
          ],
        },
      ],
    },
  ];

  const toggleService = (number) => {
    setOpenService((current) =>
      current === number ? null : number
    );
  };

  return (
    <section
      id="individual"
      className="scroll-mt-28 bg-slate-50 px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#00B4D8]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00B4D8]">
              Individual Services
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Choose the support that fits your next move.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Select a service below to explore the available levels of
            support and find the option that best matches your career
            goals.
          </p>
        </motion.div>

        {/* Services */}
        <div className="mt-12 space-y-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isOpen = openService === Number(service.number);

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                }}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
              >
                {/* Service Header */}
                <button
                  type="button"
                  onClick={() => toggleService(Number(service.number))}
                  className="flex w-full items-center gap-4 px-5 py-6 text-left sm:px-7"
                  aria-expanded={isOpen}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#caf0f8] text-sm font-extrabold text-[#0077B6]">
                    {service.number}
                  </span>

                  <span className="flex min-w-0 flex-1 items-center gap-4">
                    <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-700 sm:flex">
                      <Icon size={20} strokeWidth={2.2} />
                    </span>

                    <span>
                      <span className="block text-base font-extrabold text-slate-950 sm:text-lg">
                        {service.title}
                      </span>

                      <span className="mt-1 block max-w-3xl text-sm leading-6 text-slate-500">
                        {service.shortDescription}
                      </span>
                    </span>
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown size={19} />
                  </span>
                </button>

                {/* Service Details */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="border-t border-slate-100 px-5 pb-7 pt-7 sm:px-7">
                        <div className="grid gap-5 md:grid-cols-3">
                          {service.tiers.map((tier, tierIndex) => (
                            <motion.div
                              key={tier.name}
                              initial={{
                                opacity: 0,
                                y: 12,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                duration: 0.35,
                                delay: tierIndex * 0.07,
                              }}
                              className={`rounded-2xl border p-5 ${
                                tier.name === "Professional"
                                  ? "border-[#00B4D8]/40 bg-[#caf0f8]/30"
                                  : "border-slate-200 bg-white"
                              }`}
                            >
                              {/* Tier */}
                              <div className="flex items-center justify-between gap-3">
                                <span
                                  className={`text-xs font-bold uppercase tracking-[0.14em] ${
                                    tier.name === "Professional"
                                      ? "text-[#0077B6]"
                                      : "text-slate-500"
                                  }`}
                                >
                                  {tier.name}
                                </span>

                                {tier.name === "Professional" && (
                                  <span className="rounded-full bg-[#00B4D8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                                    Popular
                                  </span>
                                )}
                              </div>

                              {/* Price */}
                              <p className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">
                                {tier.price}
                              </p>

                              {/* Description */}
                              <p className="mt-3 text-sm leading-6 text-slate-600">
                                {tier.description}
                              </p>

                              {/* Features */}
                              <div className="mt-5 space-y-2.5">
                                {tier.features.map((feature) => (
                                  <div
                                    key={feature}
                                    className="flex items-start gap-2.5"
                                  >
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00B4D8]" />

                                    <span className="text-sm leading-5 text-slate-600">
                                      {feature}
                                    </span>
                                  </div>
                                ))}
                              </div>

                              {/* CTA */}
                              <Link
                                to="/contact"
                                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-900 transition-all duration-300 hover:border-[#00B4D8] hover:bg-[#00B4D8] hover:text-white"
                              >
                                Get Started

                                <ArrowUpRight
                                  size={16}
                                  strokeWidth={2.4}
                                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 rounded-2xl border border-slate-200 bg-white px-5 py-6 sm:px-7"
        >
          <p className="text-sm font-bold text-slate-950">
            Transparent pricing and clear delivery.
          </p>

          <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">
            Services are priced according to the level of support selected.
            Standard delivery is generally targeted within 1–3 days,
            depending on the service, scope, and information provided.
            Final timing will be confirmed when your project begins.
          </p>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-col gap-5 rounded-3xl bg-slate-950 px-6 py-8 sm:px-8 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="text-lg font-bold text-white">
              Not sure which service is right for you?
            </p>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              Tell us about your career goals and we can help you identify
              the most appropriate starting point.
            </p>
          </div>

          <Link
            to="/contact#enquiry"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#00B4D8] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#009FC0] hover:shadow-lg hover:shadow-[#00B4D8]/20"
          >
            Get a Free Review

            <ArrowUpRight
              size={17}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default IndividualServices;