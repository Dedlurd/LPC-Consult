import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  ChevronDown,
  Crown,
  FileCheck2,
  FileText,
  GraduationCap,
  MessageCircle,
  Search,
  ShieldCheck,
  Target,
  UserRound,
} from "lucide-react";

function IndividualServices() {
  const [openService, setOpenService] = useState(0);

  const services = [
    {
      number: "01",
      title: "Resume Writing / Rewriting",
      icon: FileText,
      intro:
        "A professionally developed resume built around your experience, target role, and the value you bring to an employer.",
      tiers: [
        {
          name: "Basic",
          price: "$395",
          description:
            "A focused professional resume for a clear target direction.",
          features: [
            "ATS-friendly structure",
            "Achievement-focused writing",
            "Targeted keyword integration",
          ],
        },
        {
          name: "Professional",
          price: "$749",
          popular: true,
          description:
            "A deeper rewrite designed for stronger industry positioning.",
          features: [
            "Everything in Basic",
            "Role and industry-specific positioning",
            "Professional summary development",
          ],
        },
        {
          name: "Executive",
          price: "$1,250",
          description:
            "Senior-level positioning for experienced professionals and leaders.",
          features: [
            "Everything in Professional",
            "Leadership-focused positioning",
            "Executive-level career narrative",
          ],
        },
      ],
    },

    {
      number: "02",
      title: "Cover Letter Writing",
      icon: FileCheck2,
      intro:
        "A tailored cover letter that connects your experience to the opportunity and gives your application a stronger professional voice.",
      tiers: [
        {
          name: "Basic",
          price: "$200",
          description:
            "A clear and professionally written application letter.",
          features: [
            "Role-focused content",
            "Professional structure",
            "Clear value proposition",
          ],
        },
        {
          name: "Professional",
          price: "$375",
          popular: true,
          description:
            "A more targeted letter built around the opportunity.",
          features: [
            "Everything in Basic",
            "Job-specific positioning",
            "Stronger achievement integration",
          ],
        },
        {
          name: "Executive",
          price: "$499",
          description:
            "A refined application narrative for senior opportunities.",
          features: [
            "Everything in Professional",
            "Leadership-level messaging",
            "Senior-career positioning",
          ],
        },
      ],
    },

    {
      number: "03",
      title: "LinkedIn Profile Optimization",
      icon: BadgeCheck,
      intro:
        "A strategic LinkedIn refresh that aligns your profile with your professional direction and strengthens how your expertise is presented online.",
      tiers: [
        {
          name: "Basic",
          price: "$495",
          description:
            "The essential profile improvements for a stronger presence.",
          features: [
            "Headline optimization",
            "About section refinement",
            "Core profile recommendations",
          ],
        },
        {
          name: "Professional",
          price: "$1,050",
          popular: true,
          description:
            "A deeper optimization for stronger professional positioning.",
          features: [
            "Everything in Basic",
            "Experience section development",
            "Industry-focused positioning",
          ],
        },
        {
          name: "Executive",
          price: "$1,750",
          description:
            "Comprehensive positioning for leaders and senior professionals.",
          features: [
            "Everything in Professional",
            "Executive brand positioning",
            "Leadership profile messaging",
          ],
        },
      ],
    },

    {
      number: "04",
      title: "Executive Bio",
      icon: UserRound,
      intro:
        "A concise professional biography designed to communicate your background, expertise, leadership experience, and professional identity.",
      tiers: [
        {
          name: "Basic",
          price: "$200",
          description:
            "A concise biography for professional use.",
          features: [
            "Professional background summary",
            "Clear career narrative",
            "Polished final copy",
          ],
        },
        {
          name: "Professional",
          price: "$375",
          popular: true,
          description:
            "A stronger biography for broader professional visibility.",
          features: [
            "Everything in Basic",
            "Achievement and expertise positioning",
            "Stronger professional voice",
          ],
        },
        {
          name: "Executive",
          price: "$499",
          description:
            "A leadership-focused biography for senior professionals.",
          features: [
            "Everything in Professional",
            "Executive positioning",
            "Leadership narrative",
          ],
        },
      ],
    },

    {
      number: "05",
      title: "KSA Statements",
      icon: Target,
      intro:
        "Structured statements that clearly demonstrate your knowledge, skills, and abilities against the requirements of the opportunity.",
      tiers: [
        {
          name: "Basic",
          price: "$200",
          description:
            "Focused support for presenting your core competencies.",
          features: [
            "Requirement-based structure",
            "Clear evidence presentation",
            "Professional writing",
          ],
        },
        {
          name: "Professional",
          price: "$375",
          popular: true,
          description:
            "More detailed positioning around the role requirements.",
          features: [
            "Everything in Basic",
            "Stronger evidence development",
            "Role-specific alignment",
          ],
        },
        {
          name: "Executive",
          price: "$499",
          description:
            "A deeper approach for complex or senior-level applications.",
          features: [
            "Everything in Professional",
            "Advanced evidence positioning",
            "Senior-level presentation",
          ],
        },
      ],
    },

    {
      number: "06",
      title: "Statement of Purpose (SOP)",
      icon: GraduationCap,
      intro:
        "A focused statement that presents your academic or professional background, motivation, goals, and fit for your intended program or opportunity.",
      tiers: [
        {
          name: "Basic",
          price: "$200",
          description:
            "A clear statement built around your core story.",
          features: [
            "Structured narrative",
            "Goal-focused writing",
            "Professional editing",
          ],
        },
        {
          name: "Professional",
          price: "$375",
          popular: true,
          description:
            "A more developed statement with stronger positioning.",
          features: [
            "Everything in Basic",
            "Stronger personal positioning",
            "Program-focused alignment",
          ],
        },
        {
          name: "Executive",
          price: "$499",
          description:
            "A highly refined statement for complex applications.",
          features: [
            "Everything in Professional",
            "Advanced narrative development",
            "Senior-level polish",
          ],
        },
      ],
    },

    {
      number: "07",
      title: "Letter of Intent",
      icon: BriefcaseBusiness,
      intro:
        "A professionally structured letter that communicates your intentions, relevant experience, and reasons for pursuing a specific opportunity.",
      tiers: [
        {
          name: "Basic",
          price: "$200",
          description:
            "A polished letter built around your intended opportunity.",
          features: [
            "Professional structure",
            "Clear objective",
            "Relevant experience positioning",
          ],
        },
        {
          name: "Professional",
          price: "$375",
          popular: true,
          description:
            "A more tailored version with stronger context and positioning.",
          features: [
            "Everything in Basic",
            "Opportunity-specific messaging",
            "Stronger professional narrative",
          ],
        },
        {
          name: "Executive",
          price: "$499",
          description:
            "A refined statement for senior or high-impact opportunities.",
          features: [
            "Everything in Professional",
            "Leadership positioning",
            "Executive-level narrative",
          ],
        },
      ],
    },

    {
      number: "08",
      title: "Executive Leadership Profile",
      icon: Crown,
      intro:
        "A high-level professional profile built to communicate leadership scope, expertise, impact, and executive value.",
      tiers: [
        {
          name: "Basic",
          price: "$200",
          description:
            "A structured leadership profile for professional use.",
          features: [
            "Leadership summary",
            "Career highlights",
            "Executive-focused structure",
          ],
        },
        {
          name: "Professional",
          price: "$375",
          popular: true,
          description:
            "A more comprehensive profile for senior professionals.",
          features: [
            "Everything in Basic",
            "Leadership impact positioning",
            "Strategic career narrative",
          ],
        },
        {
          name: "Executive",
          price: "$499",
          description:
            "A highly polished profile for senior leadership positioning.",
          features: [
            "Everything in Professional",
            "Executive brand narrative",
            "High-level leadership positioning",
          ],
        },
      ],
    },

    {
      number: "09",
      title: "Executive Core Qualifications (ECQ)",
      icon: ShieldCheck,
      intro:
        "Structured executive qualification narratives that connect your leadership experience and evidence to the required competency areas.",
      tiers: [
        {
          name: "Basic",
          price: "$300",
          description:
            "A clear foundation for presenting your executive qualifications.",
          features: [
            "Competency-focused structure",
            "Evidence organization",
            "Professional presentation",
          ],
        },
        {
          name: "Professional",
          price: "$499",
          popular: true,
          description:
            "Stronger development around executive leadership evidence.",
          features: [
            "Everything in Basic",
            "Deeper evidence development",
            "Leadership-focused positioning",
          ],
        },
        {
          name: "Executive",
          price: "$749",
          description:
            "Comprehensive executive-level positioning and narrative development.",
          features: [
            "Everything in Professional",
            "Advanced executive narrative",
            "High-level strategic positioning",
          ],
        },
      ],
    },

    {
      number: "10",
      title: "Interview Preparation",
      icon: MessageCircle,
      intro:
        "Practical preparation to help you communicate your experience, answer difficult questions, and approach important interviews with greater confidence.",
      tiers: [
        {
          name: "Basic",
          price: "$500",
          description:
            "Focused preparation around your target interview.",
          features: [
            "Interview question preparation",
            "Answer structure guidance",
            "Role-focused discussion",
          ],
        },
        {
          name: "Professional Coaching",
          price: "$705",
          popular: true,
          description:
            "More comprehensive preparation with deeper coaching support.",
          features: [
            "Everything in Basic",
            "Personalized answer coaching",
            "Interview strategy guidance",
          ],
        },
        {
          name: "Executive Coaching",
          price: "$1,099",
          description:
            "High-level coaching for leadership and executive interviews.",
          features: [
            "Everything in Professional",
            "Executive interview preparation",
            "Leadership communication coaching",
          ],
        },
      ],
    },

    {
      number: "11",
      title: "Job Search Assistance",
      icon: Search,
      intro:
        "Practical support for organizing and improving your approach to identifying relevant opportunities and managing your search.",
      tiers: [
        {
          name: "Basic",
          price: "$10",
          description:
            "A simple starting point for organizing your search.",
          features: [
            "Search direction guidance",
            "Opportunity identification support",
            "Basic search structure",
          ],
        },
        {
          name: "Professional",
          price: "$15",
          popular: true,
          description:
            "Broader support for a more structured job search.",
          features: [
            "Everything in Basic",
            "Search refinement",
            "Opportunity targeting support",
          ],
        },
        {
          name: "Executive",
          price: "$20",
          description:
            "A focused search approach for senior-level opportunities.",
          features: [
            "Everything in Professional",
            "Senior-opportunity targeting",
            "Executive search guidance",
          ],
        },
      ],
    },
  ];

  const toggleService = (index) => {
    setOpenService(openService === index ? -1 : index);
  };

  return (
    <section
      id="individual"
      className="bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#00B4D8]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00B4D8]">
              Individual Services
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-[46px]">
            Choose the service that matches your current career need.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-[17px]">
            Select a service to compare the available levels of support.
            Each tier is designed for a different level of depth,
            positioning, and professional requirement.
          </p>
        </motion.div>

        {/* Pricing Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 rounded-2xl border border-[#CAD182]/70 bg-[#CAD182]/20 px-6 py-6 sm:px-8"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-slate-900">
                Transparent Pricing
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                Every service has clearly defined pricing and
                deliverables. Choose the level that fits the depth of
                support you need.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <span className="h-2 w-2 rounded-full bg-[#00B4D8]" />
              1–3 day delivery
            </div>
          </div>
        </motion.div>

        {/* Services */}
        <div className="mt-10 space-y-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isOpen = openService === index;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.03,
                }}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-[#00B4D8]/50 shadow-[0_18px_45px_rgba(0,0,0,0.07)]"
                    : "border-slate-200"
                }`}
              >
                {/* Service Header */}
                <button
                  type="button"
                  onClick={() => toggleService(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00B4D8]/10 text-[#00B4D8]">
                    <Icon size={19} strokeWidth={2} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold tracking-[0.12em] text-[#00B4D8]">
                        {service.number}
                      </span>

                      <span className="text-base font-bold text-slate-950 sm:text-lg">
                        {service.title}
                      </span>
                    </span>

                    <span className="mt-1 block text-sm text-slate-500">
                      {service.intro}
                    </span>
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown size={18} />
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
                      <div className="border-t border-slate-100 px-5 pb-6 pt-6 sm:px-7 sm:pb-8">
                        <div className="grid gap-5 lg:grid-cols-3">
                          {service.tiers.map((tier) => (
                            <div
                              key={tier.name}
                              className={`relative flex flex-col rounded-2xl border p-6 ${
                                tier.popular
                                  ? "border-[#00B4D8] bg-[#00B4D8]/5"
                                  : "border-slate-200 bg-slate-50/60"
                              }`}
                            >
                              {tier.popular && (
                                <span className="absolute -top-3 left-5 rounded-full bg-[#00B4D8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                                  Popular
                                </span>
                              )}

                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <p className="text-sm font-bold text-slate-900">
                                    {tier.name}
                                  </p>

                                  <p className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                                    {tier.price}
                                  </p>
                                </div>

                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#00B4D8] shadow-sm">
                                  <Icon size={17} />
                                </div>
                              </div>

                              <p className="mt-4 text-sm leading-6 text-slate-500">
                                {tier.description}
                              </p>

                              <div className="my-6 h-px bg-slate-200" />

                              <div className="space-y-3">
                                {tier.features.map((feature) => (
                                  <div
                                    key={feature}
                                    className="flex items-start gap-2.5"
                                  >
                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00B4D8]/10 text-[#00B4D8]">
                                      <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M2.5 6.2L4.7 8.4L9.5 3.6"
                                          stroke="currentColor"
                                          strokeWidth="1.6"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </span>

                                    <span className="text-sm leading-5 text-slate-600">
                                      {feature}
                                    </span>
                                  </div>
                                ))}
                              </div>

                              <Link
                                to="/contact"
                                className={`group mt-7 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold transition-all duration-300 ${
                                  tier.popular
                                    ? "bg-[#00B4D8] text-white hover:bg-[#009FC0]"
                                    : "border border-slate-200 bg-white text-slate-900 hover:border-[#00B4D8] hover:text-[#00B4D8]"
                                }`}
                              >
                                Get Started

                                <ArrowUpRight
                                  size={16}
                                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                              </Link>
                            </div>
                          ))}
                        </div>

                        <p className="mt-6 text-xs leading-5 text-slate-400">
                          Final scope, delivery timing, and any service
                          requirements are confirmed before work begins.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-col gap-4 rounded-2xl bg-slate-950 px-6 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <p className="text-sm font-bold text-white">
              Need help choosing the right service?
            </p>

            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-400">
              Tell us about your current career situation and we can
              help you identify the most suitable starting point.
            </p>
          </div>

          <Link
            to="/free-review"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#00B4D8] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#009FC0]"
          >
            Get a Free Review

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default IndividualServices;