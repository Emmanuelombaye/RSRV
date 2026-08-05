"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AllocationEngine from "@/app/components/AllocationEngine";
import VerificationDrawer from "@/app/components/VerificationDrawer";
import IntakeWizard from "@/app/components/IntakeWizard";
import { useScrollReveal } from "@/app/lib/useScrollReveal";

export default function AllocationPage() {
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
              Allocation Management
            </span>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                margin: "0.5rem 0 1rem",
              }}
            >
              Standing Reserve Allocation Engine
            </h1>
            <p className="section-desc" style={{ fontSize: "1.1rem" }}>
              Standing Reserve is your personalized allocation relationship. Replenishment cadences are synchronized with required biomarker tracking and physician re-evaluations.
            </p>
          </div>
        </section>

        {/* Interactive Allocation Engine Component */}
        <AllocationEngine onOpenIntake={() => setIntakeOpen(true)} />
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
