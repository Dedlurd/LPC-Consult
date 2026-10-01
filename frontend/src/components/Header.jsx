import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import {
  Home,
  BriefcaseBusiness,
  UserRound,
  FolderKanban,
  BookOpen,
  Mail,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: Home,
    },
    {
      name: "Services",
      path: "/services",
      icon: BriefcaseBusiness,
    },
    {
      name: "About",
      path: "/about",
      icon: UserRound,
    },
    {
      name: "Portfolio",
      path: "/portfolio",
      icon: FolderKanban,
    },
    {
      name: "Resources",
      path: "/resources",
      icon: BookOpen,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: Mail,
    },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mx-auto max-w-7xl"
        >
          <div className="flex h-[72px] items-center justify-between rounded-2xl border border-slate-200/80 bg-white/95 px-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md sm:px-7">

            {/* ================= LOGO ================= */}
            <Link
              to="/"
              onClick={closeMenu}
              className="group flex items-center gap-2"
            >
              <motion.div
                whileHover={{ rotate: 6 }}
                transition={{ duration: 0.25 }}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00B4D8] text-sm font-extrabold text-white"
              >
                L
              </motion.div>

              <span className="text-lg font-extrabold tracking-tight text-slate-900">
                LCP
                <span className="ml-1 text-[#00B4D8]">
                  CAREERS
                </span>
              </span>
            </Link>

            {/* ================= DESKTOP NAVIGATION ================= */}
            <nav className="hidden items-center gap-7 lg:flex">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{
                    opacity: 0,
                    y: -8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.15 + index * 0.06,
                  }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `group relative py-2 text-[14px] font-medium transition-colors duration-300 ${
                        isActive
                          ? "text-[#00B4D8]"
                          : "text-slate-600 hover:text-slate-950"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}

                        <span
                          className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#00B4D8] transition-all duration-300 ${
                            isActive
                              ? "w-full"
                              : "w-0 group-hover:w-full"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* ================= DESKTOP CTA ================= */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.55,
              }}
              className="hidden md:block"
            >
              <Link
                to="/free-review"
                className="group flex items-center gap-2 rounded-xl bg-[#00B4D8] px-5 py-3 text-sm font-bold text-white shadow-[0_6px_20px_rgba(0,180,216,0.25)] transition-all duration-300 hover:bg-[#009fc0] hover:shadow-[0_8px_25px_rgba(0,180,216,0.3)]"
              >
                Free Review

                <ArrowUpRight
                  size={17}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>

            {/* ================= MOBILE MENU BUTTON ================= */}
            <button
              type="button"
              aria-label={
                isMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 transition-colors duration-300 hover:border-[#00B4D8] hover:text-[#00B4D8] lg:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.div>
      </header>

      {/* ================= MOBILE NAVIGATION ================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-sm lg:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="fixed left-4 right-4 top-[100px] z-50 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] lg:hidden sm:left-6 sm:right-6"
            >
              <nav className="p-4 sm:p-6">
                {/* Mobile Links */}
                <div className="space-y-1">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;

                    return (
                      <motion.div
                        key={link.name}
                        initial={{
                          opacity: 0,
                          x: -20,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          delay: 0.06 + index * 0.06,
                        }}
                      >
                        <NavLink
                          to={link.path}
                          onClick={closeMenu}
                          className={({ isActive }) =>
                            `group flex items-center gap-4 rounded-xl px-4 py-3.5 transition-all duration-300 ${
                              isActive
                                ? "bg-[#CAF0F8] text-[#0077B6]"
                                : "text-slate-700 hover:bg-[#CAF0F8] hover:text-[#0077B6]"
                            }`
                          }
                        >
                          {({ isActive }) => (
                            <>
                              <span
                                className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300 ${
                                  isActive
                                    ? "bg-[#00B4D8] text-white"
                                    : "bg-slate-100 text-slate-500 group-hover:bg-[#00B4D8] group-hover:text-white"
                                }`}
                              >
                                <Icon size={19} strokeWidth={2} />
                              </span>

                              <span className="text-base font-semibold">
                                {link.name}
                              </span>

                              <ArrowUpRight
                                size={17}
                                className="ml-auto opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                              />
                            </>
                          )}
                        </NavLink>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Divider */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scaleX: 0,
                  }}
                  animate={{
                    opacity: 1,
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.45,
                  }}
                  className="my-5 h-px origin-left bg-slate-200"
                />

                {/* Mobile CTA */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5,
                  }}
                >
                  <Link
                    to="/free-review"
                    onClick={closeMenu}
                    className="group flex items-center justify-between rounded-xl bg-[#00B4D8] px-5 py-4 font-bold text-white shadow-[0_8px_25px_rgba(0,180,216,0.2)] transition-all duration-300 hover:bg-[#009fc0]"
                  >
                    <span>Get Your Free Review</span>

                    <ArrowUpRight
                      size={20}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </motion.div>

                {/* Supporting text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.6,
                  }}
                  className="mt-5 px-2 text-center text-xs leading-relaxed text-slate-400"
                >
                  Let's build your next career move with clarity
                  and confidence.
                </motion.p>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;