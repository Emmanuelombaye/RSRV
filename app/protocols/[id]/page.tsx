"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import IntakeWizard from "@/app/components/IntakeWizard";
import VerificationDrawer from "@/app/components/VerificationDrawer";
import { RSRV_PROTOCOLS } from "@/app/lib/protocols";
import { useScrollReveal } from "@/app/lib/useScrollReveal";

export default function ProtocolDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  useScrollReveal();
  const resolvedParams = use(params);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [intakeOpen, setIntakeOpen] = useState(false);

  const protocol = RSRV_PROTOCOLS.find(
    (p) => p.id.toLowerCase() === resolvedParams.id.toLowerCase()
  );

  if (!protocol) {
    return (
      <>
        <Header
          onOpenDrawer={() => setDrawerOpen(false)}
          onOpenIntake={() => setIntakeOpen(false)}
        />
        <main
          style={{
            paddingTop: "10rem",
            minHeight: "70vh",
            textAlign: "center",
          }}
        >
          <h1 className="font-display" style={{ fontSize: "2.5rem" }}>
            Protocol Specification Not Found
          </h1>
          <p
            style={{
              color: "var(--rm-platinum)",
              margin: "1rem 0 2rem",
            }}
          >
            The requested allocation protocol ID does not match our current clinical registry.
          </p>
          <Link href="/protocols" className="btn-primary">
            Return to Protocol Directory
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header
        onOpenDrawer={() => setDrawerOpen(true)}
        onOpenIntake={() => setIntakeOpen(true)}
      />

      <main style={{ paddingTop: "7rem", paddingBottom: "5rem" }}>
        {/* Breadcrumb Navigation */}
        <div
          className="section"
          style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.8rem",
              color: "var(--rm-platinum)",
            }}
          >
            <Link href="/" style={{ color: "var(--rm-silver)" }}>
              Home
            </Link>
            <span>/</span>
            <Link href="/protocols" style={{ color: "var(--rm-silver)" }}>
              Protocols
            </Link>
            <span>/</span>
            <span style={{ color: "var(--rm-bone)" }}>{protocol.id}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: "4rem",
              alignItems: "start",
            }}
            className="protocols-detail-grid"
          >
            {/* Left Column: Details */}
            <div className="reveal-up">
              <span
                className="data-annotation"
                style={{ color: "var(--rm-champagne)" }}
              >
                {protocol.id} — {protocol.category}
              </span>
              <h1
                className="font-display"
                style={{
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  margin: "0.5rem 0 1.5rem",
                }}
              >
                {protocol.title}
              </h1>

              <p
                style={{
                  fontSize: "1.15rem",
                  color: "var(--rm-bone)",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                }}
              >
                {protocol.fullDescription}
              </p>

              {/* Compounded Formulations Breakdown */}
              <div style={{ marginBottom: "3rem" }}>
                <span
                  className="data-annotation"
                  style={{ display: "block", marginBottom: "1rem" }}
                >
                  Compounded Bio-Active Formulations
                </span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {protocol.compounds.map((c, i) => (
                    <div
                      key={i}
                      style={{
                        background: "var(--rm-charcoal)",
                        padding: "1.25rem 1.5rem",
                        borderRadius: "3px",
                        border: "1px solid rgba(220,218,212,0.08)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "0.4rem",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                        }}
                      >
                        <span
                          className="font-display"
                          style={{ fontSize: "1.2rem", color: "var(--rm-bone)" }}
                        >
                          {c.name}
                        </span>
                        <span
                          className="data-annotation"
                          style={{ fontSize: "0.7rem", color: "var(--rm-champagne)" }}
                        >
                          {c.type}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--rm-platinum)",
                          lineHeight: 1.5,
                        }}
                      >
                        {c.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Targeted Diagnostic Biomarkers */}
              <div style={{ marginBottom: "3rem" }}>
                <span
                  className="data-annotation"
                  style={{ display: "block", marginBottom: "1rem" }}
                >
                  Targeted Diagnostic Biomarkers
                </span>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}
                >
                  {protocol.targetedBiomarkers.map((bm, i) => (
                    <span
                      key={i}
                      style={{
                        background: "var(--rm-charcoal)",
                        border: "1px solid rgba(194,161,95,0.3)",
                        color: "var(--rm-bone)",
                        padding: "0.5rem 1rem",
                        borderRadius: "3px",
                        fontSize: "0.85rem",
                      }}
                    >
                      {bm}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual & Specs Card */}
            <div className="reveal-up">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "320px",
                  borderRadius: "4px",
                  overflow: "hidden",
                  marginBottom: "2rem",
                  border: "1px solid rgba(194,161,95,0.2)",
                  background: "var(--rm-obsidian)",
                }}
              >
                <Image
                  src={protocol.image}
                  alt={protocol.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent 50%, rgba(11,11,13,0.95) 100%)",
                  }}
                />
              </div>

              <div
                style={{
                  background: "var(--rm-charcoal)",
                  padding: "2rem",
                  borderRadius: "4px",
                  border: "1px solid rgba(220,218,212,0.08)",
                }}
              >
                <span
                  className="data-annotation"
                  style={{ display: "block", marginBottom: "1rem" }}
                >
                  Protocol Specifications
                </span>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.85rem",
                    marginBottom: "2rem",
                  }}
                >
                  {Object.entries(protocol.specs).map(([k, v]) => (
                    <div
                      key={k}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingBottom: "0.5rem",
                        borderBottom: "1px solid rgba(220,218,212,0.05)",
                        fontSize: "0.875rem",
                      }}
                    >
                      <span className="spec-key">
                        {k.charAt(0).toUpperCase() + k.slice(1)}
                      </span>
                      <span
                        className="spec-val"
                        style={{ color: "var(--rm-bone)", fontWeight: 500 }}
                      >
                        {v}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className="btn-primary"
                  style={{ width: "100%" }}
                  onClick={() => setIntakeOpen(true)}
                >
                  Request Patient Intake
                </button>
              </div>
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
        initialProtocol={protocol}
        onClose={() => setIntakeOpen(false)}
        onComplete={(msg) => alert(msg)}
      />
    </>
  );
}
