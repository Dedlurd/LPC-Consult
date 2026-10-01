import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  FileText,
} from "lucide-react";

const CONTACT_EMAIL = "hello@lpccareers.com";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    service: "",
    careerLevel: "",
    targetRole: "",
    deadline: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `LPC Careers Enquiry - ${formData.service || "Career Support"}`
    );

    const body = encodeURIComponent(
      [
        `Full Name: ${formData.fullName}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone || "Not provided"}`,
        `LinkedIn: ${formData.linkedin || "Not provided"}`,
        `Service: ${formData.service}`,
        `Career Level: ${formData.careerLevel || "Not provided"}`,
        `Target Role / Opportunity: ${formData.targetRole || "Not provided"}`,
        `Target Deadline: ${formData.deadline || "Not provided"}`,
        "",
        "Message:",
        formData.message,
      ].join("\n")
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  const inputClasses =
    "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#00B4D8] focus:ring-4 focus:ring-[#00B4D8]/10";

  return (
    <section
      id="enquiry"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#00B4D8]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00B4D8]">
                Start Your Enquiry
              </span>
            </div>

            <h2 className="mt-5 max-w-md text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Tell us where you are and where you want to go.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl text-base leading-7 text-slate-600 sm:text-[17px]"
          >
            Give us enough context to understand your situation.
            Detailed information helps us guide you toward the most
            appropriate service or package.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 lg:grid-cols-[0.72fr_1.28fr]">
          {/* Information Panel */}
          <div className="bg-slate-950 p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#00B4D8]">
              Before You Submit
            </p>

            <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
              A little context goes a long way.
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-400 sm:text-base">
              Tell us about your current situation, the opportunity you
              are targeting, and the type of support you believe you
              need.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Your current career situation",
                "The role or opportunity you are targeting",
                "The service you are interested in",
                "Any important deadline or timing requirement",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00B4D8]/15 text-[#00B4D8]">
                    <CheckCircle2 size={15} strokeWidth={2.2} />
                  </span>

                  <p className="text-sm leading-6 text-slate-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="flex items-start gap-3">
                <FileText
                  size={19}
                  className="mt-0.5 shrink-0 text-[#00B4D8]"
                />

                <p className="text-xs leading-5 text-slate-500">
                  Document-based services can be delivered in DOCX and
                  PDF formats where applicable.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 sm:p-8 lg:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="fullName"
                  className="text-sm font-bold text-slate-900"
                >
                  Full Name
                  <span className="ml-1 text-[#00B4D8]">*</span>
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-slate-900"
                >
                  Email Address
                  <span className="ml-1 text-[#00B4D8]">*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-bold text-slate-900"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Optional"
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="linkedin"
                  className="text-sm font-bold text-slate-900"
                >
                  LinkedIn Profile
                </label>

                <input
                  id="linkedin"
                  name="linkedin"
                  type="url"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/..."
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="text-sm font-bold text-slate-900"
                >
                  Service of Interest
                  <span className="ml-1 text-[#00B4D8]">*</span>
                </label>

                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select a service</option>
                  <option value="Free Career Review">
                    Free Career Review
                  </option>
                  <option value="Resume Writing / Rewriting">
                    Resume Writing / Rewriting
                  </option>
                  <option value="Cover Letter Writing">
                    Cover Letter Writing
                  </option>
                  <option value="LinkedIn Profile Optimization">
                    LinkedIn Profile Optimization
                  </option>
                  <option value="Executive Bio">
                    Executive Bio
                  </option>
                  <option value="KSA Statements">
                    KSA Statements
                  </option>
                  <option value="Statement of Purpose (SOP)">
                    Statement of Purpose (SOP)
                  </option>
                  <option value="Letter of Intent">
                    Letter of Intent
                  </option>
                  <option value="Executive Leadership Profile">
                    Executive Leadership Profile
                  </option>
                  <option value="ECQ">
                    Executive Core Qualifications (ECQ)
                  </option>
                  <option value="Interview Preparation">
                    Interview Preparation
                  </option>
                  <option value="Job Search Assistance">
                    Job Search Assistance
                  </option>
                  <option value="Career Package">
                    Career Package
                  </option>
                  <option value="Something Else">
                    Something Else
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="careerLevel"
                  className="text-sm font-bold text-slate-900"
                >
                  Career Level
                </label>

                <select
                  id="careerLevel"
                  name="careerLevel"
                  value={formData.careerLevel}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select your level</option>
                  <option value="Student / Recent Graduate">
                    Student / Recent Graduate
                  </option>
                  <option value="Early Career">
                    Early Career
                  </option>
                  <option value="Mid-Career">
                    Mid-Career
                  </option>
                  <option value="Senior Professional">
                    Senior Professional
                  </option>
                  <option value="Director">
                    Director
                  </option>
                  <option value="Executive / C-Suite">
                    Executive / C-Suite
                  </option>
                  <option value="Career Changer">
                    Career Changer
                  </option>
                  <option value="Military Transition">
                    Military Transition
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="targetRole"
                  className="text-sm font-bold text-slate-900"
                >
                  Target Role / Opportunity
                </label>

                <input
                  id="targetRole"
                  name="targetRole"
                  type="text"
                  value={formData.targetRole}
                  onChange={handleChange}
                  placeholder="e.g. Product Manager"
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="deadline"
                  className="text-sm font-bold text-slate-900"
                >
                  Target Deadline
                </label>

                <input
                  id="deadline"
                  name="deadline"
                  type="text"
                  value={formData.deadline}
                  onChange={handleChange}
                  placeholder="e.g. Within 3 days"
                  className={inputClasses}
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="text-sm font-bold text-slate-900"
                >
                  Your Message
                  <span className="ml-1 text-[#00B4D8]">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your current situation, what you are targeting, and what you would like help with."
                  className={`${inputClasses} resize-none`}
                />
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-xs leading-5 text-slate-400">
                Selecting submit will open your default email app with
                your enquiry prepared for LPC Careers.
              </p>

              <button
                type="submit"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#00B4D8] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#009FC0] hover:shadow-lg hover:shadow-[#00B4D8]/20"
              >
                Prepare My Enquiry

                <ArrowUpRight
                  size={17}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
            </div>

            {submitted && (
              <p className="mt-4 text-sm font-semibold text-[#00B4D8]">
                Your email draft has been prepared. Complete the send
                step in your email application.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;