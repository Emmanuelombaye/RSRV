export default function ProcessFlow() {
  const steps = [
    {
      num: "01",
      title: "Biomarker Diagnostic Intake",
      desc: "45+ biological markers analyzed via accredited labs under dedicated physician review.",
      annotation: "Diagnostic Baseline",
    },
    {
      num: "02",
      title: "Clinician Protocol Direction",
      desc: "A licensed US physician prescribes and customizes your targeted molecular protocol.",
      annotation: "Physician Authorization",
    },
    {
      num: "03",
      title: "US 503A Compounded Dispatch",
      desc: "Formulations leave licensed US 503A compounding pharmacies under cold-chain dispatch.",
      annotation: "Sterile Compounding",
    },
    {
      num: "04",
      title: "Ongoing Verification & Adjustment",
      desc: "Scheduled biomarker re-testing verifies physiological alignment and optimizes dosages over time.",
      annotation: "Continuous Oversight",
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
            <span className="data-annotation" style={{ display: "block", marginBottom: "0.5rem" }}>
              {s.annotation}
            </span>
            <div className="process-step-num">{s.num}</div>
            <h3
              className="font-display"
              style={{ fontSize: "1.25rem", marginBottom: "0.65rem" }}
            >
              {s.title}
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--rm-platinum)",
                lineHeight: 1.6,
              }}
            >
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
