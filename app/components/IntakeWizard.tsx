"use client";

import { useState } from "react";
import { RSRV_PROTOCOLS, type Protocol } from "@/app/lib/protocols";

interface IntakeWizardProps {
  open: boolean;
  initialProtocol?: Protocol | null;
  onClose: () => void;
  onComplete: (summary: string) => void;
}

export default function IntakeWizard({
  open,
  initialProtocol,
  onClose,
  onComplete,
}: IntakeWizardProps) {
  const [step, setStep] = useState<number>(1);
  const [selectedProtocolId, setSelectedProtocolId] = useState<string>(
    initialProtocol?.id || "RSRV-MET-01"
  );
  const [cadence, setCadence] = useState<string>("90-Day Cadence");
  const [patientState, setPatientState] = useState<string>("NY");
  const [hasRecentLabs, setHasRecentLabs] = useState<string>("yes");

  if (!open) return null;

  const currentProtocol =
    RSRV_PROTOCOLS.find((p) => p.id === selectedProtocolId) ||
    RSRV_PROTOCOLS[0];

  const handleFinish = () => {
    onComplete(
      `Intake Confirmed: ${currentProtocol.title} (${cadence}). Clinician assigned for ${patientState} review.`
    );
    onClose();
    setStep(1);
  };

  return (
    <div
      className={`modal-overlay ${open ? "open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-container">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>

        {/* Progress Bar */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "0.5rem",
            }}
          >
            <span
              className="data-annotation"
              style={{ color: "var(--rm-champagne)" }}
            >
              Clinician Intake — Step 0{step} of 04
            </span>
            <span className="data-annotation">RSRV Governance</span>
          </div>

          <div
            style={{
              height: 2,
              background: "rgba(220,218,212,0.1)",
              width: "100%",
              borderRadius: 1,
            }}
          >
            <div
              style={{
                height: "100%",
                background: "var(--rm-champagne)",
                width: `${(step / 4) * 100}%`,
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>

        {/* Step 1: Protocol Selection */}
        {step === 1 && (
          <div>
            <h3
              className="font-display"
              style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}
            >
              Select Target Protocol
            </h3>
            <p
              style={{
                color: "var(--rm-platinum)",
                fontSize: "0.9rem",
                marginBottom: "1.5rem",
              }}
            >
              Choose your primary optimization objective for licensed US physician evaluation.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
              }}
            >
              {RSRV_PROTOCOLS.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setSelectedProtocolId(p.id)}
                  style={{
                    padding: "1.15rem 1.25rem",
                    borderRadius: 3,
                    border: `1px solid ${
                      selectedProtocolId === p.id
                        ? "var(--rm-champagne)"
                        : "rgba(220,218,212,0.08)"
                    }`,
                    background:
                      selectedProtocolId === p.id
                        ? "rgba(58,46,40,0.3)"
                        : "var(--rm-charcoal)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.25rem",
                    }}
                  >
                    <span className="font-display" style={{ fontSize: "1.1rem" }}>
                      {p.title}
                    </span>
                    <span
                      className="data-annotation"
                      style={{ fontSize: "0.65rem" }}
                    >
                      {p.id}
                    </span>
                  </div>
                  <p
                    style={{
                      color: "var(--rm-platinum)",
                      fontSize: "0.825rem",
                    }}
                  >
                    {p.summary}
                  </p>
                </div>
              ))}
            </div>

            <button
              className="btn-primary"
              style={{ width: "100%", marginTop: "2rem" }}
              onClick={() => setStep(2)}
            >
              Proceed to Diagnostic History
            </button>
          </div>
        )}

        {/* Step 2: Diagnostic History */}
        {step === 2 && (
          <div>
            <h3
              className="font-display"
              style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}
            >
              Diagnostic Baseline Assessment
            </h3>
            <p
              style={{
                color: "var(--rm-platinum)",
                fontSize: "0.9rem",
                marginBottom: "1.5rem",
              }}
            >
              RSRV requires accredited biomarker verification prior to any pharmacy compounding allocation.
            </p>

            <div style={{ marginBottom: "1.5rem" }}>
              <label
                className="data-annotation"
                style={{ display: "block", marginBottom: "0.5rem" }}
              >
                State of Residence (US Medical Jurisdiction)
              </label>
              <select
                value={patientState}
                onChange={(e) => setPatientState(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.85rem",
                  background: "var(--rm-charcoal)",
                  border: "1px solid rgba(220,218,212,0.12)",
                  color: "var(--rm-bone)",
                  borderRadius: 2,
                  fontFamily: "inherit",
                }}
              >
                <option value="NY">New York</option>
                <option value="CA">California</option>
                <option value="FL">Florida</option>
                <option value="TX">Texas</option>
                <option value="IL">Illinois</option>
                <option value="OTHER">Other US State</option>
              </select>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label
                className="data-annotation"
                style={{ display: "block", marginBottom: "0.5rem" }}
              >
                Do you have comprehensive biomarker lab data from the last 90 days?
              </label>
              <div style={{ display: "flex", gap: "1rem" }}>
                <button
                  type="button"
                  className={`btn-secondary ${
                    hasRecentLabs === "yes" ? "active" : ""
                  }`}
                  style={{
                    flex: 1,
                    borderColor:
                      hasRecentLabs === "yes" ? "var(--rm-champagne)" : undefined,
                  }}
                  onClick={() => setHasRecentLabs("yes")}
                >
                  Yes — Upload / Transfer
                </button>
                <button
                  type="button"
                  className={`btn-secondary ${
                    hasRecentLabs === "no" ? "active" : ""
                  }`}
                  style={{
                    flex: 1,
                    borderColor:
                      hasRecentLabs === "no" ? "var(--rm-champagne)" : undefined,
                  }}
                  onClick={() => setHasRecentLabs("no")}
                >
                  No — Schedule Phlebotomy
                </button>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
              <button
                className="btn-secondary"
                style={{ flex: 1 }}
                onClick={() => setStep(1)}
              >
                Back
              </button>
              <button
                className="btn-primary"
                style={{ flex: 2 }}
                onClick={() => setStep(3)}
              >
                Continue to Allocation Setup
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Allocation Cadence */}
        {step === 3 && (
          <div>
            <h3
              className="font-display"
              style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}
            >
              Standing Reserve Cadence
            </h3>
            <p
              style={{
                color: "var(--rm-platinum)",
                fontSize: "0.9rem",
                marginBottom: "1.5rem",
              }}
            >
              Select your standing reserve replenishment schedule with dedicated US 503A pharmacy dispatch.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                {
                  id: "90-Day Cadence",
                  title: "Quarterly Standing Reserve (90-Day)",
                  desc: "Includes quarterly comprehensive lab panel & continuous clinician tracking.",
                },
                {
                  id: "60-Day Cadence",
                  title: "Bi-Monthly Standing Reserve (60-Day)",
                  desc: "Includes bi-monthly diagnostic review & temperature-controlled delivery.",
                },
                {
                  id: "30-Day Cadence",
                  title: "Monthly Executive Reserve (30-Day)",
                  desc: "Includes monthly hormone & metabolic adjustment consultations.",
                },
              ].map((c) => (
                <div
                  key={c.id}
                  onClick={() => setCadence(c.id)}
                  style={{
                    padding: "1.25rem",
                    background: "var(--rm-charcoal)",
                    border: `1px solid ${
                      cadence === c.id
                        ? "var(--rm-champagne)"
                        : "rgba(220,218,212,0.08)"
                    }`,
                    borderRadius: 3,
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.25rem",
                    }}
                  >
                    <span className="font-display" style={{ fontSize: "1.05rem" }}>
                      {c.title}
                    </span>
                  </div>
                  <p style={{ color: "var(--rm-platinum)", fontSize: "0.825rem" }}>
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
              <button
                className="btn-secondary"
                style={{ flex: 1 }}
                onClick={() => setStep(2)}
              >
                Back
              </button>
              <button
                className="btn-primary"
                style={{ flex: 2 }}
                onClick={() => setStep(4)}
              >
                Review & Submit Request
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Summary & Confirmation */}
        {step === 4 && (
          <div>
            <h3
              className="font-display"
              style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}
            >
              Review Clinician Intake Request
            </h3>
            <p
              style={{
                color: "var(--rm-platinum)",
                fontSize: "0.9rem",
                marginBottom: "1.5rem",
              }}
            >
              Your request will be submitted directly to a licensed US physician for medical review and prescription authorization.
            </p>

            <div
              style={{
                background: "var(--rm-charcoal)",
                border: "1px solid rgba(194,161,95,0.25)",
                padding: "1.5rem",
                borderRadius: 3,
                marginBottom: "1.75rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid rgba(220,218,212,0.06)",
                  marginBottom: "0.75rem",
                }}
              >
                <span className="data-annotation">Target Protocol</span>
                <span className="font-display" style={{ color: "var(--rm-bone)" }}>
                  {currentProtocol.title}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid rgba(220,218,212,0.06)",
                  marginBottom: "0.75rem",
                }}
              >
                <span className="data-annotation">Standing Cadence</span>
                <span style={{ color: "var(--rm-platinum)", fontSize: "0.9rem" }}>
                  {cadence}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid rgba(220,218,212,0.06)",
                  marginBottom: "0.75rem",
                }}
              >
                <span className="data-annotation">Medical Jurisdiction</span>
                <span style={{ color: "var(--rm-platinum)", fontSize: "0.9rem" }}>
                  State of {patientState}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span className="data-annotation">Compounding Pharmacy</span>
                <span
                  style={{ color: "var(--rm-champagne)", fontSize: "0.9rem" }}
                >
                  US 503A Licensed Pharmacy
                </span>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <button
                className="btn-secondary"
                style={{ flex: 1 }}
                onClick={() => setStep(3)}
              >
                Back
              </button>
              <button
                className="btn-primary"
                style={{ flex: 2, padding: "1rem" }}
                onClick={handleFinish}
              >
                Authorize Clinician Review
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
