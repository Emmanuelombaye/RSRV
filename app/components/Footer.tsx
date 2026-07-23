import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Image
              src="/logos/rm-house-dark.svg"
              alt="Reserve Molecular"
              width={160}
              height={28}
              className="footer-mark"
            />
            <p className="footer-copy">
              RSRV by Reserve Molecular. Clinician-directed protocol
              optimization for established professionals.
            </p>
          </div>

          <div className="footer-cols">
            <div>
              <span className="data-annotation footer-col-title">
                Protocols
              </span>
              <ul className="footer-col-list">
                <li>Metabolic Reserve</li>
                <li>Cognitive Capacity</li>
                <li>Cellular Longevity</li>
                <li>Endocrine Balance</li>
              </ul>
            </div>
            <div>
              <span className="data-annotation footer-col-title">
                Governance
              </span>
              <ul className="footer-col-list">
                <li>Clinician Intake</li>
                <li>US 503A Pharmacies</li>
                <li>Biomarker Standards</li>
                <li>Compliance</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; 2026 RSRV / Reserve Molecular. All rights reserved.</span>
          <span>Reserve, deepened.</span>
        </div>
      </div>
    </footer>
  );
}
