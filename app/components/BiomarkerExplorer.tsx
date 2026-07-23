"use client";

import { useState } from "react";
import { BIOMARKER_CATEGORIES, RSRV_BIOMARKERS } from "@/app/lib/protocols";

export default function BiomarkerExplorer() {
  const [activeCategory, setActiveCategory] = useState<string>("metabolic");

  const filteredBiomarkers = RSRV_BIOMARKERS.filter(
    (b) => b.category === activeCategory
  );

  return (
    <section id="biomarkers" className="section">
      <div style={{ maxWidth: 850 }}>
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
      <div className="biomarker-nav">
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

      {/* Biomarker Grid */}
      <div className="biomarker-grid">
        {filteredBiomarkers.map((bm) => (
          <div key={bm.name} className="biomarker-card">
            <div>
              <div
                className="data-annotation"
                style={{ fontSize: "0.65rem", marginBottom: "0.4rem" }}
              >
                Diagnostic Parameter
              </div>
              <h3 className="bm-name font-display">{bm.name}</h3>
              <p className="bm-desc">{bm.description}</p>
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
        ))}
      </div>
    </section>
  );
}
