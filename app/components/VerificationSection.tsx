import Image from "next/image";

export default function VerificationSection() {
  const standards = [
    {
      num: "01",
      title: "Licensed Clinician Direction",
      copy: "Every protocol is evaluated, prescribed, and adjusted by board-certified physicians dedicated to personalized care.",
    },
    {
      num: "02",
      title: "US 503A Compounding",
      copy: "All formulations leave licensed US 503A compounding pharmacies, prepared specifically for your verified allocation.",
    },
    {
      num: "03",
      title: "Biomarker Tracking",
      copy: "Objective diagnostic laboratory measurements substantiate physiological optimization, closing arguments with concrete data.",
    },
  ];

  return (
    <section id="verification" className="section" style={{ textAlign: "center" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
          <Image
            src="/logos/rm-micro-dark.svg"
            alt="RM Clinical Seal"
            width={24}
            height={24}
          />
        </div>
        <span className="data-annotation section-label">
          Proof & Governance
        </span>
        <h2 className="section-title font-display">The Verification Layer</h2>
        <p className="section-desc" style={{ margin: "0 auto" }}>
          Verification — rigorous testing and complete documentation — is the
          quiet proof layer beneath clinician direction and US 503A compounding.
        </p>
      </div>

      <div className="standards-grid">
        {standards.map((s) => (
          <div key={s.num} className="standard-card" style={{ textAlign: "left" }}>
            <span className="data-annotation standard-num">Standard {s.num}</span>
            <h3 className="standard-title font-display">{s.title}</h3>
            <p className="standard-copy">{s.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
