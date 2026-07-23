"use client";

import Image from "next/image";
import { CLINICAL_VERIFICATION_STEPS } from "@/app/lib/protocols";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function VerificationDrawer({ open, onClose }: DrawerProps) {
  return (
    <div
      className={`drawer-overlay ${open ? "open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <aside className="drawer-panel">
        <div style={{ flex: 1 }}>
          <button className="drawer-close" onClick={onClose} aria-label="Close">
            &times;
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
            <Image
              src="/logos/rm-micro-dark.svg"
              alt="RM Seal"
              width={18}
              height={18}
            />
            <span
              className="data-annotation"
              style={{ color: "var(--rm-champagne)" }}
            >
              Clinical Governance
            </span>
          </div>

          <h3
            className="font-display"
            style={{
              fontSize: "2rem",
              margin: "0.5rem 0 1.5rem",
            }}
          >
            Verification Protocol
          </h3>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--rm-platinum)",
              marginBottom: "2rem",
              lineHeight: 1.65,
            }}
          >
            How RSRV ensures exact biological alignment and clinical oversight
            for every protocol allocation.
          </p>

          {CLINICAL_VERIFICATION_STEPS.map((step) => (
            <div key={step.step} className="drawer-step">
              <div className="step-head">
                <span className="data-annotation step-num">{step.step}</span>
                <h4 className="step-title font-display">{step.title}</h4>
              </div>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="drawer-bottom">
          <button
            className="btn-primary"
            style={{ width: "100%" }}
            onClick={onClose}
          >
            Close Verification
          </button>
        </div>
      </aside>
    </div>
  );
}
