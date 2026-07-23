"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/app/lib/protocols";

export default function ClinicalFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="section">
      <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
        <span className="data-annotation section-label">
          Governance & Operations
        </span>
        <h2 className="section-title font-display">Clinical Questions</h2>
        <p className="section-desc" style={{ margin: "0 auto" }}>
          Understanding physician oversight, 503A compounding pharmacy standards, and standing allocation cadences.
        </p>
      </div>

      <div className="faq-grid">
        {FAQ_ITEMS.map((item, i) => (
          <div
            key={i}
            className={`faq-item ${openIdx === i ? "open" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => toggle(i)}
              aria-expanded={openIdx === i}
            >
              <span className="font-display">{item.question}</span>
              <span className="faq-icon">+</span>
            </button>

            {openIdx === i && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
