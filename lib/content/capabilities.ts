import type { Capability } from "@/lib/types";

export const capabilities: Capability[] = [
  {
    id: "gen-ai",
    label: "Generative AI",
    description:
      "Design and deploy LLM-powered solutions tailored to your enterprise data, workflows, and compliance requirements.",
    icon: "M12 3l1.5 4.5H18l-3.75 2.7 1.5 4.5L12 12l-3.75 2.7 1.5-4.5L6 7.5h4.5L12 3z",
  },
  {
    id: "ai-agents",
    label: "AI Agents & Agentic AI",
    description:
      "Build autonomous, multi-step AI agents that reason, plan, and execute complex business processes end-to-end.",
    icon: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18",
  },
  {
    id: "rag",
    label: "RAG & GraphRAG",
    description:
      "Retrieval-Augmented Generation and graph-based retrieval pipelines that ground AI answers in your enterprise knowledge.",
    icon: "M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7zm8 3v6m-3-3h6",
  },
  {
    id: "copilot",
    label: "Microsoft Copilot Solutions",
    description:
      "Extend and customize Microsoft Copilot across Microsoft 365, Power Platform, and Azure to accelerate enterprise productivity.",
    icon: "M4 5h16M4 12h16M4 19h16",
  },
  {
    id: "idp",
    label: "Intelligent Document Processing",
    description:
      "Automate extraction, classification, and processing of structured and unstructured documents at enterprise scale.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    id: "automation",
    label: "Enterprise Automation",
    description:
      "Intelligent process automation combining RPA, workflow orchestration, and AI to eliminate manual effort at scale.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    id: "data-analytics",
    label: "AI-powered Data & Analytics",
    description:
      "Integrate AI into your data pipelines and analytics platforms to surface predictive insights and intelligent recommendations.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    id: "custom-ai",
    label: "Custom AI Application Development",
    description:
      "Full-stack AI application engineering — from model integration and API design to production-grade deployment and monitoring.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
];
