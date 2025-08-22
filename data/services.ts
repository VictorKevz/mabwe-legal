import {
  Gavel,
  Business,
  Home,
  AccountBalance,
  Security,
  FamilyRestroom,
  LocalHospital,
  Work,
} from "@mui/icons-material";

export const serviceInfo = {
  title: "Our Legal Services",
  description:
    "Comprehensive legal solutions tailored to protect your rights and interests across various practice areas with experienced representation.",
};

export const services = [
  {
    title: "Criminal Defense",
    summary:
      "Protecting your rights and freedom through expert criminal law representation.",
    icon: Gavel,
    characteristics: [
      "24/7 emergency consultation",
      "All court representation",
      "Evidence investigation review",
      "Plea bargaining strategies",
      "Constitutional rights protection",
    ],
  },
  {
    title: "Corporate Law",
    summary:
      "Strategic business legal solutions for growth, compliance, and corporate success.",
    icon: Business,
    characteristics: [
      "Business formation services",
      "Contract drafting expertise",
      "Merger acquisition support",
      "Corporate governance guidance",
      "Intellectual property protection",
    ],
  },
  {
    title: "Real Estate Law",
    summary:
      "Comprehensive property legal services for transactions, disputes, and development matters.",
    icon: Home,
    characteristics: [
      "Property sale transactions",
      "Title examination services",
      "Tenant dispute resolution",
      "Zoning legal advice",
      "Real estate litigation",
    ],
  },
  {
    title: "Banking & Finance",
    summary:
      "Expert financial legal guidance for lending, compliance, and investment matters.",
    icon: AccountBalance,
    characteristics: [
      "Loan documentation review",
      "Regulatory compliance assistance",
      "Debt restructuring solutions",
      "Securities investment guidance",
      "Banking dispute resolution",
    ],
  },
  {
    title: "Insurance Law",
    summary:
      "Maximizing insurance coverage and fighting unfair claim denials for clients.",
    icon: Security,
    characteristics: [
      "Claim denial representation",
      "Policy coverage analysis",
      "Bad faith litigation",
      "Subrogation recovery services",
      "Risk management consulting",
    ],
  },
  {
    title: "Family Law",
    summary:
      "Compassionate legal support for family matters, divorce, and custody issues.",
    icon: FamilyRestroom,
    characteristics: [
      "Divorce separation proceedings",
      "Child custody arrangements",
      "Adoption guardianship services",
      "Domestic violence protection",
      "Prenuptial agreement drafting",
    ],
  },
  {
    title: "Medical Malpractice",
    summary:
      "Seeking justice and compensation for medical negligence and healthcare errors.",
    icon: LocalHospital,
    characteristics: [
      "Medical negligence evaluation",
      "Expert witness coordination",
      "Healthcare provider litigation",
      "Pharmaceutical liability claims",
      "Wrongful death cases",
    ],
  },
  {
    title: "Employment Law",
    summary:
      "Defending workplace rights and resolving employment disputes for fair treatment.",
    icon: Work,
    characteristics: [
      "Wrongful termination claims",
      "Workplace harassment cases",
      "Contract negotiation review",
      "Wage dispute resolution",
      "Executive compensation agreements",
    ],
  },
];
