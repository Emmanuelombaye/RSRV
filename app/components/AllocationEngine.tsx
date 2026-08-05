"use client";

import { useState } from "react";
import Image from "next/image";

const CADENCE_OPTIONS = [
  {
    name: "Quarterly Standing Reserve",
    desc: "90-day protocol allocation & continuous clinical review",
    tag: "Primary",
    image: "/images/cellular_protocol.png",
  },
  {
    name: "Bi-Monthly Standing Reserve",
    desc: "60-day allocation with bi-monthly laboratory diagnostic check",
    tag: "60-Day",
    image: "/images/cognitive_protocol.png",
  },
  {
    name: "Monthly Executive Reserve",
    desc: "30-day precision allocation for high-cadence monitoring",
    tag: "30-Day",
    image: "/images/bm_nad_ratio.png",
  },
];

interface AllocationEngineProps {
  onOpenIntake: () => void;
}

export default function AllocationEngine({ onOpenIntake }: AllocationEngineProps) {
  const [active, setActive] = useState(0);

  return (
    <section id="allocation" className="allocation-band">
      <div className="allocation-grid">
        {/* Left: copy & small image card */}
        <div>
          <span className="data-annotation section-label">
            Allocation Management
          </span>
          <h2
            className="section-title font-display"
            style={{ marginBottom: "1.5rem" }}
          >
            Standing Reserve Allocation
          </h2>
          <p className="section-desc" style={{ marginBottom: "2rem" }}>
            Establish your ongoing replenishment relationship. Your dedicated
            medical team coordinates continuous lab tracking and direct pharmacy
            fulfillment for seamless protocol delivery.
          </p>

          <ul className="benefit-list" style={{ marginBottom: "2.5rem" }}>
            <li className="benefit-item">
              <span style={{ width: 12, height: 1, background: "var(--rm-champagne)", marginTop: 11, flexShrink: 0 }} />
              Direct clinician consultation & protocol adjustment
            </li>
            <li className="benefit-item">
              <span style={{ width: 12, height: 1, background: "var(--rm-champagne)", marginTop: 11, flexShrink: 0 }} />
              US 503A temperature-controlled compounding dispatch
            </li>
            <li className="benefit-item">
              <span style={{ width: 12, height: 1, background: "var(--rm-champagne)", marginTop: 11, flexShrink: 0 }} />
              Quarterly lab diagnostic panel integration
            </li>
          </ul>

          {/* Good Small Card with Image */}
          <div
            style={{
              background: "var(--rm-obsidian)",
              border: "1px solid rgba(194,161,95,0.25)",
              borderRadius: "4px",
              overflow: "hidden",
              boxShadow: "0 16px 36px rgba(0,0,0,0.5)",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "130px",
                overflow: "hidden",
                borderBottom: "1px solid rgba(194,161,95,0.2)",
              }}
            >
              <Image
                src="/images/cellular_protocol.png"
                alt="503A Cold-Chain Vault Dispatch"
                fill
                style={{ objectFit: "cover", opacity: 0.9 }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(8,8,10,0.15) 0%, rgba(18,18,22,0.85) 75%, rgba(18,18,22,1) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "0.75rem",
                  left: "1rem",
                  right: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  zIndex: 2,
                }}
              >
                <span
                  className="data-annotation"
                  style={{
                    fontSize: "0.6rem",
                    color: "var(--rm-champagne)",
                    background: "rgba(8,8,10,0.8)",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "2px",
                    border: "1px solid rgba(194,161,95,0.3)",
                  }}
                >
                  503A DIRECT COLD-CHAIN VAULT
                </span>
                <span
                  className="data-annotation"
                  style={{
                    fontSize: "0.6rem",
                    color: "#A0A0A0",
                    background: "rgba(8,8,10,0.8)",
                    padding: "0.2rem 0.4rem",
                    borderRadius: "2px",
                  }}
                >
                  ISO 5 CLEANROOM
                </span>
              </div>
            </div>
            <div style={{ padding: "1.25rem 1.5rem" }}>
              <h4
                className="font-display"
                style={{ fontSize: "1.1rem", margin: "0 0 0.4rem", color: "#FFFFFF" }}
              >
                Sterile Pharmacy Infrastructure
              </h4>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--rm-platinum)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Formulations are custom compounded individually in licensed US 503A pharmacies and shipped in thermal cold-chain packaging with batch CoA verification.
              </p>
            </div>
          </div>
        </div>

        {/* Right: selector box */}
        <div className="alloc-box">
          <div className="alloc-inset" />
          <span className="data-annotation" style={{ color: "var(--rm-champagne)" }}>
            Select Cadence
          </span>
          <h3
            className="font-display"
            style={{ fontSize: "1.5rem", marginTop: "0.5rem" }}
          >
            Standing Allocation Setup
          </h3>

          <div className="cadence-options">
            {CADENCE_OPTIONS.map((opt, i) => (
              <div
                key={i}
                className={`cadence-item ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
                style={{ gap: "1rem" }}
              >
                {/* Micro Thumbnail Image */}
                <div
                  style={{
                    position: "relative",
                    width: "52px",
                    height: "52px",
                    flexShrink: 0,
                    borderRadius: "3px",
                    overflow: "hidden",
                    border: active === i ? "1px solid var(--rm-champagne)" : "1px solid rgba(220,218,212,0.15)",
                  }}
                >
                  <Image
                    src={opt.image}
                    alt={opt.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div style={{ flexGrow: 1 }}>
                  <div className="cadence-name">{opt.name}</div>
                  <div className="cadence-desc">{opt.desc}</div>
                </div>
                <span
                  className="data-annotation"
                  style={{
                    color:
                      active === i ? "var(--rm-champagne)" : "var(--rm-silver)",
                    flexShrink: 0,
                  }}
                >
                  {opt.tag}
                </span>
              </div>
            ))}
          </div>

          <button
            className="btn-primary"
            style={{ width: "100%", marginTop: "2rem", padding: "1rem" }}
            onClick={onOpenIntake}
          >
            Initiate Clinician Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
