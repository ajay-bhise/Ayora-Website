import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "generative-ai",
    title: "Generative AI Solutions",
    description:
      "We design and build production-grade generative AI applications — from conversational assistants and content generation platforms to domain-specific LLM solutions grounded in your enterprise data.",
    capabilities: [
      "LLM selection and fine-tuning",
      "Prompt engineering and guardrails",
      "RAG pipeline design",
      "AI gateway and integration architecture",
    ],
    href: "/services#generative-ai",
  },
  {
    id: "ai-agents-automation",
    title: "AI Agents & Automation",
    description:
      "We build autonomous AI agents and agentic workflows that reason over enterprise data, take multi-step actions, and integrate with your existing systems to eliminate manual effort at scale.",
    capabilities: [
      "Agentic workflow design",
      "Multi-agent orchestration",
      "Tool-use and API integration",
      "Enterprise process automation",
    ],
    href: "/services#ai-agents",
  },
  {
    id: "microsoft-ai",
    title: "Microsoft AI & Copilot",
    description:
      "As a Microsoft-aligned delivery partner, we extend and customize Copilot across Microsoft 365, Power Platform, and Azure AI to embed intelligence into the tools your teams already use.",
    capabilities: [
      "Copilot Studio development",
      "Power Platform AI solutions",
      "Azure OpenAI integration",
      "Microsoft Fabric and AI analytics",
    ],
    href: "/services#microsoft-ai",
  },
  {
    id: "data-analytics",
    title: "AI-powered Data & Analytics",
    description:
      "We integrate AI into your data strategy — building intelligent pipelines, AI-augmented dashboards, and predictive models that turn your data estate into a competitive advantage.",
    capabilities: [
      "Data platform modernization",
      "Predictive and prescriptive analytics",
      "AI-augmented reporting",
      "Knowledge graph construction",
    ],
    href: "/services#data-analytics",
  },
  {
    id: "custom-ai-dev",
    title: "Custom AI Application Development",
    description:
      "We engineer bespoke AI applications from the ground up — combining the right models, APIs, and architectures with a rigorous delivery process to ship production-ready software.",
    capabilities: [
      "Full-stack AI engineering",
      "Model evaluation and selection",
      "MLOps and AI observability",
      "Security and compliance review",
    ],
    href: "/services#custom-ai",
  },
];
