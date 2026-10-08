import type { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-001",
    slug: "intelligent-document-processing-financial-services",
    title: "Reducing Document Processing Time by 80% with AI",
    client: null, // Disclosed upon request
    industry: "Financial Services",
    summary:
      "A leading financial services firm needed to process thousands of loan applications and compliance documents daily. AYORA deployed an intelligent document processing solution powered by Azure AI and custom classification models.",
    challenge:
      "Manual review of thousands of monthly documents was creating bottlenecks, compliance risk, and significant operational cost.",
    result:
      "80% reduction in manual document review time, with accuracy rates exceeding previous human-review benchmarks.",
    tags: ["Intelligent Document Processing", "Azure AI", "Financial Services"],
  },
  {
    id: "cs-002",
    slug: "enterprise-copilot-professional-services",
    title: "Enterprise-wide Copilot Deployment for a Professional Services Firm",
    client: null,
    industry: "Professional Services",
    summary:
      "AYORA designed and deployed a customized Microsoft Copilot solution integrated with the client's internal knowledge base, project management systems, and reporting tools - enabling AI-assisted delivery at scale.",
    challenge:
      "Teams were spending excessive time on knowledge retrieval, report drafting, and administrative tasks that limited billable capacity.",
    result:
      "Significant uplift in per-consultant productivity, with measurable reduction in non-billable administrative hours.",
    tags: ["Microsoft Copilot", "Copilot Studio", "Professional Services"],
  },
  {
    id: "cs-003",
    slug: "agentic-workflow-automation-operations",
    title: "Autonomous Operations Workflow with AI Agents",
    client: null,
    industry: "Operations & Logistics",
    summary:
      "AYORA architected a multi-agent AI system to automate complex, multi-step operational workflows - combining LLM reasoning with real-time system integrations and human-in-the-loop checkpoints.",
    challenge:
      "High-volume operational processes required coordination across multiple systems with inconsistent data formats and minimal automation tooling.",
    result:
      "End-to-end process automation for previously manual workflows, with full auditability and exception handling built in.",
    tags: ["AI Agents", "Process Automation", "Operations"],
  },
];
