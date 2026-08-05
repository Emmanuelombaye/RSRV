import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />

      {/* Hero Ambient Backdrop Image Graphic */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.35,
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <Image
          src="/images/hero_ambient.svg"
          alt="RSRV Ambient Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="hero-content" style={{ zIndex: 2 }}>
        <span className="endorsement-line">
          By Reserve Molecular — Clinician-Directed
        </span>

        <Image
          src="/logos/rsrv-primary-dark.svg"
          alt="RSRV"
          width={340}
          height={96}
          className="hero-mark"
          priority
        />

        <h1 className="hero-h1 font-display">The standard, extended.</h1>

        <p className="hero-sub">
          Clinician-directed optimization protocols engineered for established
          professionals. Licensed US clinicians direct every protocol;
          prescriptions are custom compounded one patient at a time by licensed US 503A
          pharmacies under analytical diagnostic verification.
        </p>

        <div className="proof-bar">
          <span className="data-annotation">Clinician-Directed</span>
          <span className="proof-dot" />
          <span className="data-annotation">US 503A Compounded</span>
          <span className="proof-dot" />
          <span className="data-annotation">Biomarker Verified</span>
        </div>

        <div className="hero-ctas">
          <a href="/protocols" className="btn-primary">
            Explore Protocols
          </a>
          <a href="/governance" className="btn-secondary">
            View 503A Governance
          </a>
        </div>
      </div>
    </section>
  );
}
