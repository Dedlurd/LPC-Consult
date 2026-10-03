import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  Globe2,
  BriefcaseBusiness,
} from "lucide-react";

function Footer() {
  const companyLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  const resourceLinks = [
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
    { name: "Free Review", path: "/contact#enquiry" },
  ];

  const linkedinUrl =
    "https://www.linkedin.com/in/luna-patricia-cprw-mrw-41905a1b2p45bb/";

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00B4D8] text-sm font-extrabold text-white">
                L
              </span>

              <span className="text-lg font-extrabold tracking-tight text-slate-900">
                LCP
                <span className="ml-1 text-[#00B4D8]">
                  CAREERS
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500">
              Professional career support designed to help
              individuals strengthen their positioning and move
              forward with clarity.
            </p>

            <Link
              to="/contact#enquiry"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-colors hover:text-[#00B4D8]"
            >
              Start with a free review

              <ArrowUpRight
                size={16}
                strokeWidth={2.3}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h3 className="text-sm font-bold text-slate-900">
              Company
            </h3>

            <div className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-sm text-slate-500 transition-colors hover:text-[#00B4D8]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Explore */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-bold text-slate-900">
              Explore
            </h3>

            <div className="mt-5 space-y-3">
              {resourceLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-sm text-slate-500 transition-colors hover:text-[#00B4D8]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Get In Touch */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="text-sm font-bold text-slate-900">
              Get in touch
            </h3>

            <div className="mt-5 space-y-4">
              {/* Email */}
              <a
                href="mailto:support@lpccareers.com"
                className="group flex items-start gap-3"
              >
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-[#00B4D8]"
                />

                <span className="text-sm leading-6 text-slate-500 transition-colors group-hover:text-[#00B4D8]">
                  support@lpccareers.com
                </span>
              </a>

              {/* Worldwide */}
              <div className="flex items-start gap-3">
                <Globe2
                  size={17}
                  className="mt-0.5 shrink-0 text-[#00B4D8]"
                />

                <span className="text-sm leading-6 text-slate-500">
                  Worldwide
                </span>
              </div>

              {/* LinkedIn */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
                aria-label="Visit LCP Careers on LinkedIn"
              >
                <BriefcaseBusiness
                  size={17}
                  className="mt-0.5 shrink-0 text-[#00B4D8]"
                />

                <span className="inline-flex items-center gap-1.5 text-sm leading-6 text-slate-500 transition-colors group-hover:text-[#00B4D8]">
                  LinkedIn

                  <ArrowUpRight
                    size={14}
                    strokeWidth={2.2}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} LCP Careers. All rights reserved.
          </p>

          <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate-400">
            Career Strategy · Professional Branding · Career Development
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;