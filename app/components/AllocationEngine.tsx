"use client";

import { useState } from "react";

const CADENCE_OPTIONS = [
  {
    name: "Quarterly Standing Reserve",
    desc: "90-day protocol allocation & continuous clinical review",
    tag: "Primary",
  },
  {
    name: "Bi-Monthly Standing Reserve",
    desc: "60-day allocation with bi-monthly laboratory diagnostic check",
    tag: "60-Day",
  },
  {
    name: "Monthly Executive Reserve",
    desc: "30-day precision allocation for high-cadence monitoring",
    tag: "30-Day",
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
        {/* Left: copy */}
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
          <p className="section-desc" style={{ marginBottom: "2.5rem" }}>
            Establish your ongoing replenishment relationship. Your dedicated
            medical team coordinates continuous lab tracking and direct pharmacy
            fulfillment for seamless protocol delivery.
          </p>

          <ul className="benefit-list">
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
              >
                <div>
                  <div className="cadence-name">{opt.name}</div>
                  <div className="cadence-desc">{opt.desc}</div>
                </div>
                <span
                  className="data-annotation"
                  style={{
                    color:
                      active === i ? "var(--rm-platinum)" : "var(--rm-silver)",
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
