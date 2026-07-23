export interface Biomarker {
  name: string;
  category: string;
  unit: string;
  baselineTypical: string;
  rsrvTarget: string;
  description: string;
}

export interface ProtocolCompound {
  name: string;
  type: string;
  role: string;
}

export interface Protocol {
  id: string;
  title: string;
  category: string;
  summary: string;
  fullDescription: string;
  image: string;
  compounds: ProtocolCompound[];
  targetedBiomarkers: string[];
  specs: {
    formulation: string;
    administration: string;
    supervision: string;
    testing: string;
  };
  verificationLevel: string;
  allocationPeriod: string;
}

export interface VerificationStep {
  step: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const BIOMARKER_CATEGORIES = [
  { id: "metabolic", name: "Metabolic & Cardiovascular", count: "14 Markers" },
  { id: "neuro", name: "Neuro-Executive & Cognitive", count: "11 Markers" },
  { id: "cellular", name: "Cellular & Mitochondrial", count: "10 Markers" },
  { id: "endocrine", name: "Endocrine & Vitality", count: "12 Markers" },
] as const;

export const RSRV_BIOMARKERS: Biomarker[] = [
  // Metabolic
  {
    name: "Fasting Insulin",
    category: "metabolic",
    unit: "µIU/mL",
    baselineTypical: "6.0 - 12.0",
    rsrvTarget: "2.0 - 4.5",
    description: "Primary biological indicator of cellular insulin sensitivity and systemic metabolic efficiency.",
  },
  {
    name: "Apolipoprotein B (ApoB)",
    category: "metabolic",
    unit: "mg/dL",
    baselineTypical: "90 - 120",
    rsrvTarget: "< 60",
    description: "Direct quantification of all atherogenic particle counts for cardiovascular longevity protection.",
  },
  {
    name: "High-Sensitivity CRP (hs-CRP)",
    category: "metabolic",
    unit: "mg/L",
    baselineTypical: "1.5 - 3.0",
    rsrvTarget: "< 0.5",
    description: "Systemic vascular and tissue micro-inflammation diagnostic marker.",
  },
  {
    name: "HbA1c",
    category: "metabolic",
    unit: "%",
    baselineTypical: "5.4 - 5.7",
    rsrvTarget: "4.8 - 5.1",
    description: "90-day average blood glucose glycation level indicating metabolic trajectory.",
  },

  // Neuro-Executive
  {
    name: "Brain-Derived Neurotrophic Factor (BDNF)",
    category: "neuro",
    unit: "pg/mL",
    baselineTypical: "15,000 - 22,000",
    rsrvTarget: "> 28,000",
    description: "Essential neuro-signaling protein governing synaptic plasticity and neurogenesis.",
  },
  {
    name: "Homocysteine",
    category: "neuro",
    unit: "µmol/L",
    baselineTypical: "10.0 - 14.0",
    rsrvTarget: "6.0 - 8.0",
    description: "Neurovascular amino acid diagnostic marker linked to cerebrovascular clearance.",
  },
  {
    name: "Diurnal Cortisol Curve",
    category: "neuro",
    unit: "µg/dL",
    baselineTypical: "Flattish Curve",
    rsrvTarget: "Optimal Awakening Rise",
    description: "HPA axis resilience metric measuring stress recovery and cognitive stamina.",
  },

  // Cellular
  {
    name: "Intracellular NAD+ / NADH Ratio",
    category: "cellular",
    unit: "Ratio Index",
    baselineTypical: "2.5 - 4.0",
    rsrvTarget: "> 8.5",
    description: "Mitochondrial bioenergetic capacity driving sirtuin activation and DNA repair mechanisms.",
  },
  {
    name: "Glutathione (Reduced / GSH)",
    category: "cellular",
    unit: "µmol/L",
    baselineTypical: "450 - 650",
    rsrvTarget: "> 900",
    description: "Master intracellular antioxidant buffering oxidative stress and cellular damage.",
  },
  {
    name: "Coenzyme Q10 (CoQ10)",
    category: "cellular",
    unit: "µg/mL",
    baselineTypical: "0.8 - 1.2",
    rsrvTarget: "> 2.5",
    description: "Mitochondrial electron transport chain cofactor for cellular ATP synthesis.",
  },

  // Endocrine
  {
    name: "Free Testosterone Index",
    category: "endocrine",
    unit: "pg/mL",
    baselineTypical: "45 - 75",
    rsrvTarget: "120 - 160",
    description: "Bioavailable hormonal signaling for lean muscle retention, energy, and bone density.",
  },
  {
    name: "Dehydroepiandrosterone Sulfate (DHEA-S)",
    category: "endocrine",
    unit: "µg/dL",
    baselineTypical: "150 - 240",
    rsrvTarget: "350 - 450",
    description: "Adrenal steroid precursor key for stress buffering and anabolic homeostasis.",
  },
  {
    name: "Insulin-Like Growth Factor 1 (IGF-1)",
    category: "endocrine",
    unit: "ng/mL",
    baselineTypical: "110 - 160",
    rsrvTarget: "200 - 250",
    description: "Anabolic growth mediator driving systemic tissue repair and cellular regeneration.",
  },
];

export const RSRV_PROTOCOLS: Protocol[] = [
  {
    id: "RSRV-MET-01",
    title: "Metabolic Reserve Protocol",
    category: "Systemic Metabolic Optimization",
    summary:
      "Clinician-directed protocol engineered to sustain cellular energy expenditure, insulin sensitivity, and visceral body composition.",
    fullDescription:
      "Engineered for high-performing executives seeking sustained metabolic output without energy troughs. Combines GLP-1/GIP receptor agonist signaling with targeted mitochondrial co-factors to optimize nutrient partitioning, lower visceral adiposity, and stabilize fasting insulin levels under monthly laboratory diagnostic verification.",
    image: "/images/metabolic_protocol.png",
    compounds: [
      { name: "Semaglutide / Tirzepatide Matrix", type: "Incretin Receptor Agonist", role: "Nutrient Partitioning & Glycemic Control" },
      { name: "L-Carnitine Compounded Buffer", type: "Mitochondrial Shuttle", role: "Long-Chain Fatty Acid Oxidation" },
      { name: "Metformin ER Ultra-Low Dosed", type: "AMPK Activator", role: "Hepatic Gluconeogenesis Suppression" },
    ],
    targetedBiomarkers: ["Fasting Insulin", "Apolipoprotein B (ApoB)", "High-Sensitivity CRP", "HbA1c"],
    specs: {
      formulation: "US 503A Pharmacy Compounded",
      administration: "Weekly Subcutaneous Allocation",
      supervision: "Licensed Medical Clinician",
      testing: "Quarterly Comprehensive Biomarker Verification",
    },
    verificationLevel: "Tier 1 Comprehensive",
    allocationPeriod: "Standing Reserve (90-Day Cadence)",
  },
  {
    id: "RSRV-COG-02",
    title: "Cognitive Capacity Protocol",
    category: "Neuro-Endocrine Optimization",
    summary:
      "Targeted neuro-supportive protocol formulated to promote executive endurance, focus clarity, and neural pathway resilience.",
    fullDescription:
      "Designed specifically for intense cognitive workloads, executive decision-making, and neuro-protection. Utilizing high-affinity neuro-active peptides combined with cholinergic precursors, this protocol accelerates synaptogenesis, optimizes BDNF expression, and buffers brain micro-inflammation.",
    image: "/images/cognitive_protocol.png",
    compounds: [
      { name: "Semax / Selank Bio-Peptide Matrix", type: "Neuro-Active Peptide", role: "BDNF Upregulation & Focus Stamina" },
      { name: "Alpha-GPC Bio-Available Complex", type: "Cholinergic Precursor", role: "Acetylcholine Neurotransmitter Synthesis" },
      { name: "Sublingual B12 Adenosylcobalamin", type: "Cerebrovascular Co-Factor", role: "Myelin Sheath & Homocysteine Control" },
    ],
    targetedBiomarkers: ["Brain-Derived Neurotrophic Factor (BDNF)", "Homocysteine", "Diurnal Cortisol Curve"],
    specs: {
      formulation: "Targeted Bio-Active Peptide Blend",
      administration: "Daily Micro-Dose Allocation",
      supervision: "Licensed Specialist Clinician",
      testing: "Bi-Annual Executive Health Verification",
    },
    verificationLevel: "Tier 1 Specialist",
    allocationPeriod: "Standing Reserve (60-Day Cadence)",
  },
  {
    id: "RSRV-CEL-03",
    title: "Cellular Longevity Protocol",
    category: "Mitochondrial & NAD+ Restoration",
    summary:
      "High-concentration cellular energy protocol designed to restore NAD+ availability and enhance mitochondrial bioenergetics.",
    fullDescription:
      "Replete mitochondrial electron transport and sirtuin enzymatic activity at the cellular level. Delivers sterile, high-purity NAD+ alongside SIRT-activating compounds to repair DNA damage, improve cellular ATP output, and mitigate mitochondrial decay.",
    image: "/images/cellular_protocol.svg",
    compounds: [
      { name: "Sterile Lyophilized NAD+", type: "Coenzyme Matrix", role: "Sirtuin Activation & Mitochondrial ATP Production" },
      { name: "Glutathione Compounded Infusion", type: "Master Antioxidant", role: "Intracellular Reactive Oxygen Species Clearance" },
      { name: "CoQ10 Solubilized Complex", type: "Electron Transport Factor", role: "Mitochondrial Membrane Stabilization" },
    ],
    targetedBiomarkers: ["Intracellular NAD+ / NADH Ratio", "Glutathione (GSH)", "Coenzyme Q10"],
    specs: {
      formulation: "Pure NAD+ & Precursor Matrix",
      administration: "Twice-Weekly Precision Protocol",
      supervision: "Clinician-Directed",
      testing: "Baseline & Periodic Metabolic Panel",
    },
    verificationLevel: "Tier 2 Molecular",
    allocationPeriod: "Standing Reserve (90-Day Cadence)",
  },
  {
    id: "RSRV-END-04",
    title: "Endocrine Balance Protocol",
    category: "Hormonal Rhythm & Vitality",
    summary:
      "Custom compounded endocrine alignment protocol tailored specifically to restore natural hormonal dynamics and biological vigor.",
    fullDescription:
      "Clinician-directed hormonal optimization for high-stress executives experiencing age-related endocrine decline. Tailored individually based on baseline blood diagnostics to restore free testosterone, DHEA-S, and growth hormone secretagogue output while balancing estrogen and SHBG dynamics.",
    image: "/images/endocrine_protocol.svg",
    compounds: [
      { name: "Bio-Identical Hormone Matrix", type: "Compounded Hormone Vector", role: "Anabolic & Metabolic Signaling" },
      { name: "Sermorelin / Ipamorelin Secretagogue", type: "GH Releasing Peptide", role: "Endogenous HGH Pulse Restoration" },
      { name: "Anastrozole Ultra-Micro Dosed", type: "Aromatase Regulator", role: "Estrogen Dynamics Optimization" },
    ],
    targetedBiomarkers: ["Free Testosterone Index", "DHEA-S", "IGF-1"],
    specs: {
      formulation: "Individualized Compounded Hormonal Matrix",
      administration: "Prescription Allocation",
      supervision: "Dedicated Board-Certified Clinician",
      testing: "Monthly Biomarker & Hormone Assessment",
    },
    verificationLevel: "Tier 1 Board-Directed",
    allocationPeriod: "Standing Reserve (30-Day Cadence)",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: "Governance & Compounding",
    question: "How does US 503A compounding differ from commercial retail pharmacies?",
    answer:
      "503A pharmacies operate under strict state board of pharmacy regulations and USP <795>/<797>/<800> standards. Every allocation is custom compounded specifically for an individual patient under a direct US clinician's prescription, utilizing analytical-grade active pharmaceutical ingredients (API) verified by Certificate of Analysis (CoA).",
  },
  {
    category: "Governance & Compounding",
    question: "What supervision is provided by licensed clinicians?",
    answer:
      "Every patient is assigned a board-certified US physician who reviews comprehensive diagnostic biomarker panels before authorizing any protocol. Clinicians monitor your biomarker trajectory at scheduled intervals (30, 60, or 90 days) and adjust formulations to maintain target ranges.",
  },
  {
    category: "Allocations & Fulfillment",
    question: "What does 'Standing Reserve' mean?",
    answer:
      "Standing Reserve refers to your personalized allocation relationship. Rather than automated auto-shipping, your replenishment cadence is synchronized with required biomarker tracking and physician re-evaluations to ensure ongoing biological alignment.",
  },
  {
    category: "Diagnostics & Testing",
    question: "How are diagnostic biomarker panels conducted?",
    answer:
      "Diagnostic panels are conducted via convenient phlebotomy services at over 2,000 accredited partner laboratory locations nationwide or via clinician-arranged mobile phlebotomy at your location.",
  },
];

export const BRAND_TAGLINES = {
  flagship: "The standard, extended.",
  compact: "Reserve, deepened.",
} as const;

export const CLINICAL_VERIFICATION_STEPS: VerificationStep[] = [
  {
    step: "01",
    title: "Biomarker & Clinical Assessment",
    description:
      "In-depth laboratory diagnostics analyze over 45 biological markers under licensed clinician review.",
  },
  {
    step: "02",
    title: "Clinician Protocol Direction",
    description:
      "A dedicated US physician evaluates diagnostic data to prescribe your tailored optimization protocol.",
  },
  {
    step: "03",
    title: "US 503A Compounded Allocation",
    description:
      "Prescriptions are individually compounded by licensed 503A pharmacies and verified prior to allocation.",
  },
  {
    step: "04",
    title: "Continuous Verification & Adjustment",
    description:
      "Ongoing biomarker tracking ensures protocol precision and physiological alignment over time.",
  },
];
