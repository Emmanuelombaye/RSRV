import Image from "next/image";

export default function ProcessFlow() {
  const steps = [
    {
      num: "01",
      title: "Biomarker Diagnostic Intake",
      desc: "45+ biological markers analyzed via accredited labs under dedicated physician review.",
      annotation: "Diagnostic Baseline",
      image: "/images/bm_hscrp.png",
    },
    {
      num: "02",
      title: "Clinician Protocol Direction",
      desc: "A licensed US physician prescribes and customizes your targeted molecular protocol.",
      annotation: "Physician Authorization",
      image: "/images/cognitive_protocol.png",
    },
    {
      num: "03",
      title: "US 503A Compounded Dispatch",
      desc: "Formulations leave licensed US 503A compounding pharmacies under cold-chain dispatch.",
      annotation: "Sterile Compounding",
      image: "/images/cellular_protocol.png",
    },
    {
      num: "04",
      title: "Ongoing Verification & Adjustment",
      desc: "Scheduled biomarker re-testing verifies physiological alignment and optimizes dosages over time.",
      annotation: "Continuous Oversight",
      image: "/images/bm_nad_ratio.png",
    },
  ];

  return (
    <section id="governance" className="section" style={{ borderTop: "1px solid rgba(220,218,212,0.06)" }}>
      <div style={{ maxWidth: 850 }} className="reveal-up">
        <span className="data-annotation section-label">
          Pharmacy & Clinical Governance
        </span>
        <h2 className="section-title font-display">
          The 503A Compounding Pipeline
        </h2>
        <p className="section-desc">
          RSRV connects physician oversight directly with US 503A compounding pharmacy infrastructure.
          Every allocation is individually compounded, verified, and continuously monitored.
        </p>
      </div>

      <div className="process-pipeline reveal-stagger">
        {steps.map((s) => (
          <div key={s.num} className="process-step-card">
            {/* Step Image Header */}
            <div
              style={{
                position: "relative",
                width: "calc(100% + 3.5rem)",
                height: "120px",
                margin: "-1.75rem -1.75rem 1.25rem -1.75rem",
                overflow: "hidden",
                borderBottom: "1px solid rgba(194,161,95,0.2)",
                background: "var(--rm-obsidian)",
              }}
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                style={{ objectFit: "cover", opacity: 0.85 }}
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
                    background: "rgba(8,8,10,0.75)",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "2px",
                    border: "1px solid rgba(194,161,95,0.3)",
                  }}
                >
                  STEP {s.num}
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
                  {s.annotation.toUpperCase()}
                </span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
              <div>
                <div className="process-step-num">{s.num}</div>
                <h3
                  className="font-display"
                  style={{ fontSize: "1.2rem", marginBottom: "0.65rem", lineHeight: 1.3 }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--rm-platinum)",
                    lineHeight: 1.6,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
