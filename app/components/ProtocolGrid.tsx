"use client";

import { useState } from "react";
import Image from "next/image";
import { RSRV_PROTOCOLS, type Protocol } from "@/app/lib/protocols";
import ProtocolDetailModal from "./ProtocolDetailModal";

interface ProtocolGridProps {
  onSelect: (p: Protocol) => void;
  onVerify: () => void;
}

export default function ProtocolGrid({ onSelect, onVerify }: ProtocolGridProps) {
  const [activeModalProtocol, setActiveModalProtocol] =
    useState<Protocol | null>(null);

  return (
    <section id="protocols" className="section">
      <div style={{ maxWidth: 800 }} className="reveal-up">
        <span className="data-annotation section-label">Protocol Lineup</span>
        <h2 className="section-title font-display">
          Targeted Optimization Protocols
        </h2>
        <p className="section-desc">
          Formulated to build reserve, restore capacity, and maintain
          performance over time. Directed strictly by licensed clinicians under
          comprehensive diagnostic verification.
        </p>
      </div>

      <div className="protocols-grid reveal-stagger">
        {RSRV_PROTOCOLS.map((p) => (
          <article key={p.id} className="protocol-card">
            <div>
              {/* Protocol Visual Hero Banner */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "180px",
                  borderRadius: "2px",
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
                      "linear-gradient(180deg, transparent 50%, rgba(23,23,26,0.9) 100%)",
                  }}
                />
              </div>

              <div className="card-top">
                <span className="card-id">{p.id}</span>
                <span className="data-annotation">{p.verificationLevel}</span>
              </div>

              <h3 className="card-title font-display">{p.title}</h3>
              <p className="card-summary">{p.summary}</p>

              {/* Biomarkers pill summary */}
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

            <div className="card-actions">
              <button
                className="btn-primary"
                style={{ flex: 1.2 }}
                onClick={() => onSelect(p)}
              >
                Request Allocation
              </button>
              <button
                className="btn-secondary"
                style={{ flex: 0.8 }}
                onClick={() => setActiveModalProtocol(p)}
              >
                View Specs
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Protocol Detail Modal */}
      <ProtocolDetailModal
        protocol={activeModalProtocol}
        onClose={() => setActiveModalProtocol(null)}
        onRequestAllocation={(p) => onSelect(p)}
      />
    </section>
  );
}
