import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />

      <div className="hero-content">
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
          Clinician-directed optimization protocols for established
          professionals. Licensed clinicians direct every protocol;
          prescriptions are compounded one patient at a time by licensed US 503A
          pharmacies.
        </p>

        <div className="proof-bar">
          <span className="data-annotation">Clinician-Directed</span>
          <span className="proof-dot" />
          <span className="data-annotation">US 503A Compounded</span>
          <span className="proof-dot" />
          <span className="data-annotation">Biomarker Verified</span>
        </div>

        <div className="hero-ctas">
          <a href="#protocols" className="btn-primary">
            Explore Protocols
          </a>
          <a href="#verification" className="btn-secondary">
            View Verification Standard
          </a>
        </div>
      </div>
    </section>
  );
}
