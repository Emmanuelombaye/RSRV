"use client";

import { useState } from "react";
import Image from "next/image";
import { BIOMARKER_CATEGORIES, RSRV_BIOMARKERS } from "@/app/lib/protocols";

export default function BiomarkerExplorer() {
  const [activeCategory, setActiveCategory] = useState<string>("metabolic");

  const currentCategory =
    BIOMARKER_CATEGORIES.find((c) => c.id === activeCategory) ||
    BIOMARKER_CATEGORIES[0];

  const filteredBiomarkers = RSRV_BIOMARKERS.filter(
    (b) => b.category === activeCategory
  );

  return (
    <section id="biomarkers" className="section">
      <div style={{ maxWidth: 850 }} className="reveal-up">
        <span className="data-annotation section-label">
          Diagnostic Foundation
        </span>
        <h2 className="section-title font-display">
          Biomarker Verification Standard
        </h2>
        <p className="section-desc">
          RSRV protocols are directed strictly by empirical diagnostic data.
          Over 45 biological markers are measured to establish baseline metrics,
          target physiological ranges, and verify ongoing optimization trajectory.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="biomarker-nav reveal-up">
        {BIOMARKER_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`biomarker-tab ${
              activeCategory === cat.id ? "active" : ""
            }`}
            onClick={() => setActiveCategory(cat.id)}
          >
            <span>{cat.name}</span>
            <span className="biomarker-badge">{cat.count}</span>
          </button>
        ))}
      </div>

      {/* Dynamic Category Visual Card */}
      <div
        className="reveal-up"
        style={{
          position: "relative",
          width: "100%",
          height: "220px",
          borderRadius: "6px",
          overflow: "hidden",
          margin: "1.5rem 0 2rem",
          border: "1px solid rgba(194,161,95,0.25)",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Image
          key={currentCategory.id}
          src={currentCategory.image}
          alt={currentCategory.name}
          fill
          style={{ objectFit: "cover", transition: "all 0.5s ease" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(8,8,10,0.1) 0%, rgba(8,8,10,0.75) 60%, rgba(8,8,10,0.95) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "1.5rem 2rem",
            width: "100%",
          }}
        >
          <div
            className="data-annotation"
            style={{ color: "var(--rm-champagne)", marginBottom: "0.2rem" }}
          >
            {currentCategory.subtitle} • {currentCategory.count}
          </div>
          <h3
            className="font-display"
            style={{
              fontSize: "1.5rem",
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            {currentCategory.name}
          </h3>
        </div>
      </div>

      {/* Biomarker Grid */}
      <div className="biomarker-grid reveal-stagger">
        {filteredBiomarkers.map((bm) => (
          <div key={bm.name} className="biomarker-card">
            {/* Section Micro Visual Header */}
            <div
              style={{
                position: "relative",
                width: "calc(100% + 3.5rem)",
                height: "100px",
                margin: "-1.75rem -1.75rem 1.25rem -1.75rem",
                overflow: "hidden",
                borderBottom: "1px solid rgba(194,161,95,0.2)",
                background: "var(--rm-obsidian)",
              }}
            >
              <Image
                src={currentCategory.image}
                alt={bm.name}
                fill
                style={{ objectFit: "cover", opacity: 0.85 }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(8,8,10,0.1) 0%, rgba(18,18,22,0.85) 75%, rgba(18,18,22,1) 100%)",
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
                    background: "rgba(8,8,10,0.75)",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "2px",
                    border: "1px solid rgba(194,161,95,0.3)",
                  }}
                >
                  {currentCategory.name.toUpperCase()}
                </span>
                <span
                  className="data-annotation"
                  style={{
                    fontSize: "0.6rem",
                    color: "var(--rm-silver)",
                    background: "rgba(8,8,10,0.75)",
                    padding: "0.2rem 0.4rem",
                    borderRadius: "2px",
                  }}
                >
                  PARAM
                </span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
              <div>
                <h3 className="bm-name font-display">{bm.name}</h3>
                <p className="bm-desc">{bm.description}</p>
              </div>

            {/* Visual Biomarker Telemetry Range Bar */}
            <div
              style={{
                margin: "1rem 0",
                background: "var(--rm-obsidian)",
                padding: "0.75rem 1rem",
                borderRadius: "3px",
                border: "1px solid rgba(220,218,212,0.06)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.7rem",
                  marginBottom: "0.4rem",
                }}
              >
                <span className="data-annotation" style={{ fontSize: "0.65rem" }}>
                  Range Optimization Indicator
                </span>
                <span style={{ color: "var(--rm-champagne)", fontWeight: 500 }}>
                  Target: {bm.rsrvTarget}
                </span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "4px",
                  background: "rgba(220,218,212,0.12)",
                  borderRadius: "2px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "30%",
                    width: "45%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, var(--rm-platinum) 0%, var(--rm-champagne) 100%)",
                    borderRadius: "2px",
                    boxShadow: "0 0 8px rgba(194, 161, 95, 0.6)",
                  }}
                />
              </div>
            </div>

            <div className="bm-metrics">
              <div>
                <span className="data-annotation" style={{ fontSize: "0.65rem" }}>
                  Standard Range
                </span>
                <div className="bm-metric-val" style={{ opacity: 0.6 }}>
                  {bm.baselineTypical} {bm.unit}
                </div>
              </div>

              <div>
                <span
                  className="data-annotation"
                  style={{ fontSize: "0.65rem", color: "var(--rm-champagne)" }}
                >
                  RSRV Target
                </span>
                  <div
                    className="bm-metric-val"
                    style={{ color: "var(--rm-champagne)" }}
                  >
                    {bm.rsrvTarget} {bm.unit}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
