import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
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
    { name: "Free Review", path: "/free-review" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]">
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
              to="/free-review"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-colors hover:text-[#00B4D8]"
            >
              Start with a free review
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>

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
              <div className="flex items-start gap-3">
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-[#00B4D8]"
                />

                <span className="text-sm leading-6 text-slate-500">
                  Professional career support and consultation
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#00B4D8]"
                />

                <span className="text-sm leading-6 text-slate-500">
                  Luna Consult Group
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-[#00B4D8]"
                />

                <Link
                  to="/contact"
                  className="text-sm leading-6 text-slate-500 transition-colors hover:text-[#00B4D8]"
                >
                  Contact our team
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Luna Consult Group. All rights reserved.
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