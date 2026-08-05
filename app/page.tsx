"use client";

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProtocolGrid from "./components/ProtocolGrid";
import BiomarkerExplorer from "./components/BiomarkerExplorer";
import ProcessFlow from "./components/ProcessFlow";
import AllocationEngine from "./components/AllocationEngine";
import VerificationSection from "./components/VerificationSection";
import VerificationDrawer from "./components/VerificationDrawer";
import ClinicalFAQ from "./components/ClinicalFAQ";
import Footer from "./components/Footer";
import IntakeWizard from "./components/IntakeWizard";
import { useScrollReveal } from "./lib/useScrollReveal";
import type { Protocol } from "./lib/protocols";

export default function Home() {
  useScrollReveal();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [intakeOpen, setIntakeOpen] = useState(false);
  const [selectedProtocol, setSelectedProtocol] = useState<Protocol | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 4000);
  };

  const handleSelectProtocol = (protocol: Protocol) => {
    setSelectedProtocol(protocol);
    setIntakeOpen(true);
  };

  return (
    <>
      <Header
        onOpenDrawer={() => setDrawerOpen(true)}
        onOpenIntake={() => {
          setSelectedProtocol(null);
          setIntakeOpen(true);
        }}
      />

      <main>
        <Hero />
        <ProtocolGrid
          onSelect={handleSelectProtocol}
          onVerify={() => setDrawerOpen(true)}
        />
        <BiomarkerExplorer />
        <ProcessFlow />
        <AllocationEngine onOpenIntake={() => setIntakeOpen(true)} />
        <VerificationSection />
        <ClinicalFAQ />
      </main>

      <Footer />

      {/* Verification Drawer */}
      <VerificationDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      {/* Multi-Step Patient Intake Wizard */}
      <IntakeWizard
        open={intakeOpen}
        initialProtocol={selectedProtocol}
        onClose={() => setIntakeOpen(false)}
        onComplete={(msg) => showToast(msg)}
      />

      {toast && <div className="toast">{toast}</div>}
    </>
  );
}
