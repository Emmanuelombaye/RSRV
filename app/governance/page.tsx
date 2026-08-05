"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import VerificationDrawer from "@/app/components/VerificationDrawer";
import IntakeWizard from "@/app/components/IntakeWizard";
import { useScrollReveal } from "@/app/lib/useScrollReveal";

export default function GovernancePage() {
  useScrollReveal();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [intakeOpen, setIntakeOpen] = useState(false);

  return (
    <>
      <Header
        onOpenDrawer={() => setDrawerOpen(true)}
        onOpenIntake={() => setIntakeOpen(true)}
      />

      <main style={{ paddingTop: "7rem", paddingBottom: "5rem" }}>
        <section className="section">
          <div style={{ maxWidth: 900 }} className="reveal-up">
            <span className="data-annotation section-label">
              Pharmacy & Clinical Governance
            </span>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                margin: "0.5rem 0 1rem",
              }}
            >
              US 503A Compounding & Physician Oversight
            </h1>
            <p className="section-desc" style={{ fontSize: "1.1rem" }}>
              The differentiator is real: board-certified US clinicians direct every protocol, and formulations are custom compounded
              by licensed US 503A pharmacies, one patient at a time under strict analytical Certificate of Analysis verification.
            </p>
          </div>

          {/* Governance Pipeline Flow Diagram Graphic */}
          <div
            className="reveal-up"
            style={{
              position: "relative",
              width: "100%",
              height: "280px",
              borderRadius: "4px",
              overflow: "hidden",
              margin: "3rem 0",
              border: "1px solid rgba(194,161,95,0.2)",
              background: "var(--rm-charcoal)",
            }}
          >
            <Image
              src="/images/gen6.png"
              alt="US 503A Compounding Pipeline Architecture"
              fill
              style={{ objectFit: "cover" }}
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              quality={85}
            />
          </div>

          {/* Standards & Compliance Grid */}
          <div
            className="standards-grid reveal-stagger"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
              marginTop: "3rem",
            }}
          >
            <div
              style={{
                background: "var(--rm-charcoal)",
                padding: "2rem",
                borderRadius: "4px",
                border: "1px solid rgba(220,218,212,0.08)",
              }}
            >
              <span className="data-annotation" style={{ color: "var(--rm-champagne)" }}>
                USP &lt;795&gt; / &lt;797&gt; / &lt;800&gt; Standards
              </span>
              <h3 className="font-display" style={{ fontSize: "1.5rem", margin: "0.5rem 0 1rem" }}>
                Sterile Compounding Environment
              </h3>
              <p style={{ color: "var(--rm-platinum)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                Operating strictly within Class 5 laminar flow cleanrooms and negative-pressure containment suites, every formulation is compounding individually with high-purity active pharmaceutical ingredients (API).
              </p>
            </div>

            <div
              style={{
                background: "var(--rm-charcoal)",
                padding: "2rem",
                borderRadius: "4px",
                border: "1px solid rgba(220,218,212,0.08)",
              }}
            >
              <span className="data-annotation" style={{ color: "var(--rm-champagne)" }}>
                Licensed US Physicians
              </span>
              <h3 className="font-display" style={{ fontSize: "1.5rem", margin: "0.5rem 0 1rem" }}>
                Clinician-Directed Protocols
              </h3>
              <p style={{ color: "var(--rm-platinum)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                Board-certified US doctors review patient diagnostic history, evaluate biomarker trajectories, and prescribe tailored allocations with dedicated re-assessment cadences.
              </p>
            </div>

            <div
              style={{
                background: "var(--rm-charcoal)",
                padding: "2rem",
                borderRadius: "4px",
                border: "1px solid rgba(220,218,212,0.08)",
              }}
            >
              <span className="data-annotation" style={{ color: "var(--rm-champagne)" }}>
                Certificate of Analysis (CoA)
              </span>
              <h3 className="font-display" style={{ fontSize: "1.5rem", margin: "0.5rem 0 1rem" }}>
                Analytical Batch Verification
              </h3>
              <p style={{ color: "var(--rm-platinum)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                High-performance liquid chromatography (HPLC) and mass spectrometry quantify active potency and confirm zero microbial or endotoxin contamination prior to cold-chain dispatch.
              </p>
            </div>
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
        onClose={() => setIntakeOpen(false)}
        onComplete={(msg) => alert(msg)}
      />
    </>
  );
}
