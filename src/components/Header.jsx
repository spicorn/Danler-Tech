"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavNavbarDemo,
  MobileNavToggle,
  MobileNavMenu,
} from "../Layouts/ResizableNavbar";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function Header() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About Us", link: "#skills" },
    { name: "Why Us", link: "#services" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact Us", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.div
      className="relative w-full"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <NavbarLogo />
          </motion.div>

          <NavItems items={navItems} />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavNavbarDemo>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <NavbarLogo />
            </motion.div>

            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            />
          </MobileNavNavbarDemo>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {/* Navigation Links */}
            <div className="space-y-2 mb-8">
              {navItems.map((item, idx) => (
                <motion.a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative block px-4 py-4 text-lg font-semibold text-white rounded-xl bg-slate-900/80 backdrop-blur-sm border border-slate-700 hover:bg-slate-900/90 hover:border-slate-500 transition-all group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{
                    delay: 0.25 + idx * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    x: 8,
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(15, 23, 42, 0.5)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center">
                    <span className="block">{item.name}</span>
                    <motion.span
                      className="ml-auto text-teal-500 opacity-0 group-hover:opacity-100"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </span>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100"
                    layoutId="mobile-nav-hover"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </motion.a>
              ))}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </motion.div>
  );
}

export default Header;
