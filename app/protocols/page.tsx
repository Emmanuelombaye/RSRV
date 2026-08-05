"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import IntakeWizard from "@/app/components/IntakeWizard";
import VerificationDrawer from "@/app/components/VerificationDrawer";
import { RSRV_PROTOCOLS, type Protocol } from "@/app/lib/protocols";
import { useScrollReveal } from "@/app/lib/useScrollReveal";

export default function ProtocolsPage() {
  useScrollReveal();

  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [intakeOpen, setIntakeOpen] = useState(false);
  const [selectedProtocol, setSelectedProtocol] = useState<Protocol | null>(null);

  const categories = [
    "ALL",
    "Systemic Metabolic Optimization",
    "Neuro-Endocrine Optimization",
    "Mitochondrial & NAD+ Restoration",
    "Hormonal Rhythm & Vitality",
  ];

  const filteredProtocols = RSRV_PROTOCOLS.filter((p) => {
    const matchesCat =
      selectedCategory === "ALL" || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.targetedBiomarkers.some((b) =>
        b.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCat && matchesSearch;
  });

  const handleOpenIntake = (protocol?: Protocol) => {
    if (protocol) setSelectedProtocol(protocol);
    else setSelectedProtocol(null);
    setIntakeOpen(true);
  };

  return (
    <>
      <Header
        onOpenDrawer={() => setDrawerOpen(true)}
        onOpenIntake={() => handleOpenIntake()}
      />

      <main style={{ paddingTop: "7rem" }}>
        {/* Page Hero Header */}
        <section className="section" style={{ paddingBottom: "3rem" }}>
          <div style={{ maxWidth: 900 }} className="reveal-up">
            <span className="data-annotation section-label">
              Directory & Formulations
            </span>
            <h1 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", margin: "0.5rem 0 1rem" }}>
              Targeted Optimization Protocols
            </h1>
            <p className="section-desc" style={{ fontSize: "1.1rem", maxWidth: 720 }}>
              Formulated to build reserve, restore capacity, and maintain physiological performance over time.
              Directed strictly by board-certified US clinicians under quarterly laboratory verification.
            </p>
          </div>

          {/* Search & Category Filter Control Bar */}
          <div
            className="reveal-up"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              marginTop: "2.5rem",
              background: "var(--rm-charcoal)",
              padding: "1.5rem 2rem",
              borderRadius: "4px",
              border: "1px solid rgba(220,218,212,0.08)",
            }}
          >
            {/* Search Input */}
            <div style={{ position: "relative", width: "100%" }}>
              <input
                type="text"
                placeholder="Search protocols by title, compound, or biomarker..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  background: "var(--rm-obsidian)",
                  border: "1px solid rgba(220,218,212,0.15)",
                  color: "var(--rm-bone)",
                  padding: "0.85rem 1.25rem",
                  borderRadius: "3px",
                  fontSize: "0.9rem",
                  fontFamily: "var(--rm-font-body)",
                }}
              />
            </div>

            {/* Category Buttons */}
            <div
              style={{
                display: "flex",
                gap: "0.6rem",
                flexWrap: "wrap",
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: "0.5rem 1rem",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    borderRadius: "2px",
                    border:
                      selectedCategory === cat
                        ? "1px solid var(--rm-champagne)"
                        : "1px solid rgba(220,218,212,0.08)",
                    background:
                      selectedCategory === cat
                        ? "var(--rm-espresso)"
                        : "var(--rm-obsidian)",
                    color:
                      selectedCategory === cat
                        ? "var(--rm-bone)"
                        : "var(--rm-platinum)",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Protocols Cards Grid */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="protocols-grid reveal-stagger">
            {filteredProtocols.map((p) => (
              <article key={p.id} className="protocol-card">
                <div>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "200px",
                      borderRadius: "3px",
                      overflow: "hidden",
                      marginBottom: "1.5rem",
                      border: "1px solid rgba(194,161,95,0.15)",
                      background: "var(--rm-obsidian)",
                    }}
                  >
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, transparent 40%, rgba(23,23,26,0.95) 100%)",
                      }}
                    />
                  </div>

                  <div className="card-top">
                    <span className="card-id">{p.id}</span>
                    <span className="data-annotation">{p.verificationLevel}</span>
                  </div>

                  <h2 className="card-title font-display" style={{ fontSize: "1.6rem" }}>
                    {p.title}
                  </h2>
                  <p className="card-summary">{p.summary}</p>

                  <div
                    style={{
                      display: "flex",
                      gap: "0.4rem",
                      flexWrap: "wrap",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {p.targetedBiomarkers.map((bm, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: "0.7rem",
                          padding: "0.25rem 0.55rem",
                          background: "var(--rm-obsidian)",
                          border: "1px solid rgba(220,218,212,0.08)",
                          color: "var(--rm-silver)",
                          borderRadius: "2px",
                        }}
                      >
                        {bm}
                      </span>
                    ))}
                  </div>

                  <ul className="specs-list">
                    {Object.entries(p.specs).map(([key, val]) => (
                      <li key={key} className="spec-row">
                        <span className="spec-key">
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </span>
                        <span className="spec-val">{val}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-actions" style={{ gap: "0.75rem", marginTop: "1.5rem" }}>
                  <button
                    className="btn-primary"
                    style={{ flex: 1.2 }}
                    onClick={() => handleOpenIntake(p)}
                  >
                    Request Allocation
                  </button>
                  <Link
                    href={`/protocols/${p.id.toLowerCase()}`}
                    className="btn-secondary"
                    style={{ flex: 0.9, textAlign: "center" }}
                  >
                    Full Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <VerificationDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      <IntakeWizard
        open={intakeOpen}
        initialProtocol={selectedProtocol}
        onClose={() => setIntakeOpen(false)}
        onComplete={(msg) => alert(msg)}
      />
    </>
  );
}
