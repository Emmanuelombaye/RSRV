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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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

        <nav>
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

        <button className="mobile-menu-btn" aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
