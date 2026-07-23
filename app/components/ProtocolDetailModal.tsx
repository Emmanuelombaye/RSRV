"use client";

import Image from "next/image";
import type { Protocol } from "@/app/lib/protocols";

interface ProtocolDetailModalProps {
  protocol: Protocol | null;
  onClose: () => void;
  onRequestAllocation: (p: Protocol) => void;
}

export default function ProtocolDetailModal({
  protocol,
  onClose,
  onRequestAllocation,
}: ProtocolDetailModalProps) {
  if (!protocol) return null;

  return (
    <div
      className="modal-overlay open"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-container" style={{ maxWidth: 750 }}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>

        {/* Hero Visual Image Banner */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "200px",
            borderRadius: "3px",
            overflow: "hidden",
            marginBottom: "1.5rem",
            border: "1px solid rgba(194,161,95,0.2)",
            background: "var(--rm-obsidian)",
          }}
        >
          <Image
            src={protocol.image}
            alt={protocol.title}
            fill
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, transparent 40%, rgba(11,11,13,0.95) 100%)",
            }}
          />
        </div>

        <span
          className="data-annotation"
          style={{ color: "var(--rm-champagne)" }}
        >
          {protocol.id} — {protocol.category}
        </span>
        <h2
          className="font-display"
          style={{ fontSize: "2.25rem", margin: "0.5rem 0 1rem" }}
        >
          {protocol.title}
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "var(--rm-platinum)",
            lineHeight: 1.7,
            marginBottom: "2rem",
          }}
        >
          {protocol.fullDescription}
        </p>

        {/* Active Molecular Compounds */}
        <div style={{ marginBottom: "2rem" }}>
          <span
            className="data-annotation"
            style={{ display: "block", marginBottom: "0.75rem" }}
          >
            Active Compounded Formulations
          </span>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {protocol.compounds.map((c, i) => (
              <div
                key={i}
                style={{
                  background: "var(--rm-charcoal)",
                  padding: "1rem 1.25rem",
                  borderRadius: 3,
                  border: "1px solid rgba(220,218,212,0.06)",
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
                    {c.name}
                  </span>
                  <span
                    className="data-annotation"
                    style={{ fontSize: "0.65rem" }}
                  >
                    {c.type}
                  </span>
                </div>
                <p style={{ fontSize: "0.825rem", color: "var(--rm-platinum)" }}>
                  {c.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Targeted Biomarkers */}
        <div style={{ marginBottom: "2rem" }}>
          <span
            className="data-annotation"
            style={{ display: "block", marginBottom: "0.75rem" }}
          >
            Targeted Diagnostic Biomarkers
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {protocol.targetedBiomarkers.map((bm, i) => (
              <span
                key={i}
                style={{
                  background: "var(--rm-obsidian)",
                  border: "1px solid rgba(194,161,95,0.25)",
                  color: "var(--rm-bone)",
                  padding: "0.4rem 0.85rem",
                  borderRadius: 2,
                  fontSize: "0.8rem",
                }}
              >
                {bm}
              </span>
            ))}
          </div>
        </div>

        {/* Specifications */}
        <div
          style={{
            background: "var(--rm-charcoal)",
            padding: "1.5rem",
            borderRadius: 3,
            marginBottom: "2rem",
            border: "1px solid rgba(220,218,212,0.06)",
          }}
        >
          {Object.entries(protocol.specs).map(([k, v]) => (
            <div
              key={k}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0.4rem 0",
                fontSize: "0.85rem",
                borderBottom: "1px solid rgba(220,218,212,0.04)",
              }}
            >
              <span className="spec-key">
                {k.charAt(0).toUpperCase() + k.slice(1)}
              </span>
              <span className="spec-val" style={{ color: "var(--rm-bone)" }}>
                {v}
              </span>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <button className="btn-secondary" style={{ flex: 1 }} onClick={onClose}>
            Close Specifications
          </button>
          <button
            className="btn-primary"
            style={{ flex: 2 }}
            onClick={() => {
              onClose();
              onRequestAllocation(protocol);
            }}
          >
            Request Clinician Intake
          </button>
        </div>
      </div>
    </div>
  );
}
