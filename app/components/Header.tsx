"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  onOpenDrawer: () => void;
  onOpenIntake: () => void;
}

export default function Header({ onOpenDrawer, onOpenIntake }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (height > 0) {
        setScrollProgress((winScroll / height) * 100);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <Link href="/">
          <Image
            src="/logos/rsrv-wordmark-dark.svg"
            alt="RSRV"
            width={110}
            height={28}
            className="header-logo"
            priority
          />
        </Link>

        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><a href="#protocols" className="nav-link">Protocols</a></li>
            <li><a href="#biomarkers" className="nav-link">Biomarkers</a></li>
            <li><a href="#governance" className="nav-link">503A Governance</a></li>
            <li><a href="#allocation" className="nav-link">Standing Reserve</a></li>
            <li><a href="#faq" className="nav-link">FAQ</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="btn-secondary" onClick={onOpenDrawer}>
            Verify Proof
          </button>
          <button className="btn-primary" onClick={onOpenIntake}>
            Start Intake
          </button>
        </div>

        <button
          className="mobile-menu-btn"
          aria-label="Toggle Navigation Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={mobileMenuOpen ? "rotate-down" : ""} />
          <span className={mobileMenuOpen ? "hide" : ""} />
          <span className={mobileMenuOpen ? "rotate-up" : ""} />
        </button>
      </div>

      {/* Modern Hairline Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "2px",
          width: `${scrollProgress}%`,
          background:
            "linear-gradient(90deg, var(--rm-champagne) 0%, #ffffff 100%)",
          boxShadow: "0 0 10px rgba(194,161,95,0.7)",
          transition: "width 0.08s linear",
        }}
      />

      {/* Responsive Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-nav-content" onClick={(e) => e.stopPropagation()}>
            <ul className="mobile-nav-list">
              <li>
                <a
                  href="#protocols"
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Protocols
                </a>
              </li>
              <li>
                <a
                  href="#biomarkers"
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Biomarker Diagnostics
                </a>
              </li>
              <li>
                <a
                  href="#governance"
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  US 503A Governance
                </a>
              </li>
              <li>
                <a
                  href="#allocation"
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Standing Reserve
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Clinical FAQ
                </a>
              </li>
            </ul>

            <div className="mobile-nav-ctas">
              <button
                className="btn-primary"
                style={{ width: "100%" }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenIntake();
                }}
              >
                Start Patient Intake
              </button>
              <button
                className="btn-secondary"
                style={{ width: "100%" }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDrawer();
                }}
              >
                View Verification Standard
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
