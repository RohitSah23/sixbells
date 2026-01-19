import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Link, useLocation, useNavigate } from "react-router";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reservations", label: "Book" },
  { href: "#contact", label: "Contact" },
] as const;

interface NavLinkProps {
  href: string;
  label: string;
  onClick: (href: string) => void;
  className?: string;
}

const NavLink = ({ href, label, onClick, className }: NavLinkProps) => {
  if (href.startsWith("/")) {
    return (
      <Link
        to={href}
        onClick={() => onClick(href)}
        className={cn(
          "transition-colors duration-300 hover:text-gold",
          className
        )}
      >
        {label}
      </Link>
    );
  }

  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick(href);
      }}
      className={cn(
        "transition-colors duration-300 hover:text-gold",
        className
      )}
    >
      {label}
    </a>
  );
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((href: string) => {
    if (href.startsWith("/")) {
      navigate(href);
      setIsOpen(false);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      // Give time for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    setIsOpen(false);
  }, [location.pathname, navigate]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-charcoal/95 py-3 shadow-medium backdrop-blur-md"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              scrollToSection("#home");
            }}
            className="group flex items-center gap-2"
          >
            <span className="font-heading text-2xl font-bold text-cream transition-colors group-hover:text-gold md:text-3xl">
              Six Bells
            </span>
            <span className="hidden font-heading text-lg text-gold sm:inline">
              Oxford
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink
                  {...link}
                  onClick={scrollToSection}
                  className="text-sm font-medium uppercase tracking-wide text-cream/80"
                />
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button variant="hero" asChild>
              <a
                href="https://widget.thefork.com/en/839e957f-1943-4ca7-b1b6-69a84769ab7a"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Table
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle menu"
                className="text-cream hover:bg-cream/10 border border-cream/20"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex w-[300px] flex-col border-charcoal-light bg-charcoal p-0"
            >
              <div className="flex flex-col px-6 pt-10">
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-4.5 text-cream hover:bg-cream/10 hover:text-gold sm:right-6 lg:right-8 border border-cream/20"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </SheetClose>

                <SheetTitle className="mb-8 flex items-center">
                  <span className="font-heading text-2xl font-bold text-cream">
                    Six Bells
                  </span>
                  <span className="ml-2 font-heading text-lg text-gold">
                    Oxford
                  </span>
                </SheetTitle>

                <nav className="flex flex-col gap-2">
                  {NAV_LINKS.map((link) => (
                    <NavLink
                      key={link.href}
                      {...link}
                      onClick={scrollToSection}
                      className="border-b border-charcoal-light py-4 text-lg font-medium text-cream/80 last:border-0"
                    />
                  ))}
                </nav>
              </div>

              <div className="mt-auto p-6 pb-10">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a
                    href="https://widget.thefork.com/en/839e957f-1943-4ca7-b1b6-69a84769ab7a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Table
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </motion.header>
  );
}
