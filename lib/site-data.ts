import {
  ArrowLeftRight,
  FileArchive,
  FileImage,
  FileOutput,
  FilePlus2,
  FileText,
  ScanSearch,
  Scissors,
  ShieldCheck,
  Smartphone,
  WifiOff,
  Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const appDownloadHref = "/#android-app";

export type ToolDefinition = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  actionLabel: string;
  icon: LucideIcon;
  accepts: string;
  output: string;
  accent: string;
  stats: string[];
};

export const toolDefinitions: ToolDefinition[] = [
  {
    slug: "merge",
    title: "Merge PDF",
    shortTitle: "Merge",
    description: "Combine multiple PDFs into one clean file without sending documents to a remote server.",
    actionLabel: "Merge files",
    icon: FilePlus2,
    accepts: ".pdf",
    output: "Single merged PDF",
    accent: "from-[#6EE7C8]/18 via-[#112437] to-[#6EE7C8]/6",
    stats: ["Keep page order", "Works with large reports", "Preview before export"]
  },
  {
    slug: "split",
    title: "Split PDF",
    shortTitle: "Split",
    description: "Pull specific pages into a lighter document for sharing, signing, or archiving.",
    actionLabel: "Split document",
    icon: Scissors,
    accepts: ".pdf",
    output: "Selected page range PDF",
    accent: "from-[#FFB86B]/16 via-[#112437] to-[#FFB86B]/6",
    stats: ["Page range picker", "Extract chapter sections", "Perfect for mobile cleanup"]
  },
  {
    slug: "compress",
    title: "Compress PDF",
    shortTitle: "Compress",
    description: "Reduce file size for faster sharing while keeping the document readable on-device.",
    actionLabel: "Compress file",
    icon: FileArchive,
    accepts: ".pdf",
    output: "Compressed PDF",
    accent: "from-[#8FBCFF]/16 via-[#112437] to-[#6EE7C8]/6",
    stats: ["Basic and strong modes", "Great for email attachments", "No cloud queue"]
  },
  {
    slug: "pdf-to-word",
    title: "PDF to Word",
    shortTitle: "PDF to Word",
    description: "Convert PDFs into editable Word drafts with a workflow designed for quick mobile edits.",
    actionLabel: "Convert to Word",
    icon: FileText,
    accepts: ".pdf",
    output: ".docx file",
    accent: "from-[#8FBCFF]/18 via-[#0E1F31] to-[#FFB86B]/6",
    stats: ["Editable text export", "Good for forms and reports", "Fast handoff to Office apps"]
  },
  {
    slug: "word-to-pdf",
    title: "Word to PDF",
    shortTitle: "Word to PDF",
    description: "Turn DOCX files into polished PDFs before sending contracts, resumes, or invoices.",
    actionLabel: "Convert to PDF",
    icon: FileOutput,
    accepts: ".doc,.docx",
    output: "PDF file",
    accent: "from-[#6EE7C8]/14 via-[#0E1F31] to-[#8FBCFF]/8",
    stats: ["Consistent layout export", "Ready for sharing", "Built for phone-based workflows"]
  },
  {
    slug: "image-to-pdf",
    title: "Image to PDF",
    shortTitle: "Image to PDF",
    description: "Bundle photos, scans, and screenshots into one PDF for documents that start in your camera roll.",
    actionLabel: "Create PDF",
    icon: FileImage,
    accepts: ".png,.jpg,.jpeg,.webp",
    output: "Image-based PDF",
    accent: "from-[#FFB86B]/14 via-[#0E1F31] to-[#8FBCFF]/8",
    stats: ["Ideal for receipts", "Merge multiple images", "Clean export for sharing"]
  }
];

export const toolMap = Object.fromEntries(toolDefinitions.map((tool) => [tool.slug, tool]));

export const differentiationPoints = [
  {
    icon: WifiOff,
    title: "No upload step",
    description: "Your files stay on your device instead of bouncing through a browser tab and a server queue."
  },
  {
    icon: ShieldCheck,
    title: "Privacy-first by default",
    description: "Sensitive contracts, IDs, and invoices never need a cloud handoff just to be compressed or merged."
  },
  {
    icon: Smartphone,
    title: "Offline mobile workflow",
    description: "Built for Android use in the real world, including bad connections, travel, and quick one-hand edits."
  },
  {
    icon: Zap,
    title: "Fast without subscriptions",
    description: "No login wall, no recurring paywall, and no waiting on a desktop-style tool chain."
  }
];

export const comparisonRows = [
  {
    label: "Uploads required",
    filevia: "No. Processing stays on-device.",
    adobe: "Common in browser and cloud workflows.",
    ilovepdf: "Usually yes for web tools."
  },
  {
    label: "Subscription pressure",
    filevia: "One app, no subscription trap.",
    adobe: "Premium workflows tied to plans.",
    ilovepdf: "Limits push users toward paid tiers."
  },
  {
    label: "Offline use",
    filevia: "Designed for offline mobile use.",
    adobe: "Best when connected to account services.",
    ilovepdf: "Mostly web-first usage."
  },
  {
    label: "Device fit",
    filevia: "Made for Android-first document handling.",
    adobe: "Desktop ecosystem adapted to mobile.",
    ilovepdf: "Generic web utility model."
  }
];

export const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    cadence: "start now",
    description: "A generous entry point for quick edits and everyday document fixes.",
    features: ["3 operations per day", "Basic processing speed", "Access to core PDF tools", "Android app download"],
    cta: "Start Free",
    href: "/tools",
    featured: false
  },
  {
    name: "Pro",
    price: "$12",
    cadence: "one-time upgrade",
    description: "For people who want Filevia as their everyday PDF workspace without limits.",
    features: ["Unlimited operations", "Faster processing priority", "Full conversion workflow", "Best for heavy document use"],
    cta: "Get the App",
    href: appDownloadHref,
    featured: true
  }
];

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools" },
  { label: "Pricing", href: "/pricing" }
];

export const heroToolLabels = ["Merge", "Compress", "PDF to Word", "Word to PDF", "Image to PDF", "Split"];

export const toolHighlights = [
  {
    icon: ArrowLeftRight,
    title: "Real web experience, mobile-first DNA",
    description: "Explore the product on the web, then finish the heavy lifting in the Android app where files stay private."
  },
  {
    icon: ScanSearch,
    title: "Tool flows that feel live now",
    description: "Every page behaves like a usable workflow so Filevia feels like a product, not a teaser."
  }
];
