import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { CONTACT_EMAIL } from "@/lib/site-data";

const navItems = [
  { to: "/", page: "home", label: "Home" },
  { to: "/experience", page: "experience", label: "Experience" },
  { to: "/publications", page: "publications", label: "Publications" },
  { to: "/resources", page: "resources", label: "Free Resources" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-locked", open);
    if (open) closeRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        menuRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth > 700 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="nav-wrap">
          <Link to="/" className="brand" data-page="home">
            <span className="brand-mark">
              F<span>.</span>
            </span>
            <span className="brand-name">
              FALOLA <small>TITILOPE ROSEMARY</small>
            </span>
          </Link>
          <nav id="nav" aria-label="Main navigation" className={open ? "open" : undefined}>
            <div className="sidebar-top">
              <span className="sidebar-title">
                FALOLA <span>· MENU</span>
              </span>
              <button
                type="button"
                id="close-menu"
                aria-label="Close navigation"
                ref={closeRef}
                onClick={() => {
                  setOpen(false);
                  menuRef.current?.focus();
                }}
              >
                ×
              </button>
            </div>
            <p className="sidebar-caption">EXPLORE PORTFOLIO</p>
            {navItems.map((item) => (
              <Link
                key={item.page}
                to={item.to}
                data-page={item.page}
                activeProps={{ className: "active" }}
                activeOptions={{ exact: true }}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}{" "}
            <a className="sidebar-contact" href={`mailto:${CONTACT_EMAIL}`}>
              Get in touch <span>↗</span>
            </a>
          </nav>
          <a className="contact-pill" href={`mailto:${CONTACT_EMAIL}`}>
            Get in touch <span>↗</span>
          </a>
          <button
            id="menu"
            type="button"
            ref={menuRef}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-controls="nav"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menu-bars">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </button>
        </div>
      </header>
      <div
        className={open ? "mobile-nav-backdrop open" : "mobile-nav-backdrop"}
        id="nav-backdrop"
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />
    </>
  );
}
