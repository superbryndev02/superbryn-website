// Site configuration and content data

export const siteConfig = {
  name: "SuperBryn",
  description: "Voice AI Reliability Platform - Evaluation and observability that helps you understand why your voice agents fail and how to fix them.",
  url: "https://superbryn.com",
  ogImage: "https://superbryn.com/og-image.png",
  links: {
    linkedin: "https://linkedin.com/company/superbryn",
  },
}

export const announcementBanner = {
  text: "SuperBryn raises 1.2 M USD from Kalaari Capital",
  link: "https://economictimes.indiatimes.com/tech/funding/voice-ai-startup-superbryn-raises-1-2-million-from-kalaari-capital-angels/articleshow/125872445.cms?from=mdr",
}

export const navLinks = [
  { href: "#problem", label: "Problem" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#research", label: "Research" },
  { href: "#faq", label: "FAQ" },
]

export const trustedCompanies = [
  "Mphasis",
  "Docket AI",
  "Kennar Health",
  "Zappy Hire",
  "MyKare Health",
]

export const problemPoints = [
  "Demos work. Real calls don't. You can't reproduce the failures.",
  "Monitoring millions of calls means sampling—and missing edge cases.",
  "Dashboards show metrics. They don't explain what went wrong.",
  "Every fix is a guess. You're not learning from production.",
]

export const solutionPoints = [
  "Generate test scenarios from your data—before you go live",
  "Evaluate every production call, not just a sample",
  "Monitor and trace failures across STT → LLM → TTS",
  "Self-learning loop that improves agents automatically (coming soon)",
]

export const capabilities = [
  {
    icon: "🧪",
    title: "Comprehensive Evals",
    description: "Generate test scenarios from your company's data sources before going live. Then run evals on production traffic to measure what actually happens with real customers.",
    comingSoon: false,
  },
  {
    icon: "📊",
    title: "Real-Time Observability",
    description: "Monitor every call across STT, LLM, and TTS. Track latency, accuracy, sentiment, and task completion with sub-second alerting.",
    comingSoon: false,
  },
  {
    icon: "🔍",
    title: "Root Cause Analysis",
    description: "Trace failures through the entire voice pipeline. Know whether it was the transcription, the reasoning, or the synthesis that broke.",
    comingSoon: false,
  },
  {
    icon: "🏥",
    title: "Enterprise Compliance",
    description: "Purpose-built for regulated industries. Healthcare, financial services, insurance. Full audit trails and compliance reporting.",
    comingSoon: false,
  },
  {
    icon: "🔄",
    title: "Self-Learning Loop",
    description: "Our Observer Agent will feed insights to an Improver Agent that automatically updates your Main Agent. Continuous improvement without human intervention.",
    comingSoon: true,
  },
  {
    icon: "🌐",
    title: "Multi-Model Routing",
    description: "Intelligently route between STT, LLM, and TTS providers based on context, cost, and performance. One integration, infinite flexibility.",
    comingSoon: true,
  },
]

export const researcher = {
  name: "Dr. Neethu Mariam Joy",
  role: "Co-Founder & CTO",
  image: "https://ca.slack-edge.com/T08PQ66NMAM-U08PKCH8X6J-4eebf9de45ac-512",
  quote: "Voice agents fail in production because they weren't built to learn from real-world conditions. We're changing that.",
  bio: "14+ years of research in speech recognition, noise-robust acoustic modeling, and assistive voice technology. PhD from IIT Madras (2011–2018), followed by postdoctoral research at King's College London. Published extensively in IEEE and INTERSPEECH on speaker normalization, low-resource language modeling, and speech recognition for impaired speakers.",
  credentials: ["PhD, IIT Madras", "Post-Doc, King's College London"],
  publications: [
    {
      title: "FMLLR Speaker Normalization With i-Vector",
      venue: "IEEE/ACM Trans. Audio, Speech & Language Processing, 2018",
    },
    {
      title: "Improving Acoustic Models in TORGO Dysarthric Speech Database",
      venue: "IEEE Trans. Neural Systems and Rehabilitation Engineering, 2018",
    },
    {
      title: "DNNs for Unsupervised Extraction of Pseudo Speaker-Normalized Features",
      venue: "Speech Communication, 2017",
    },
    {
      title: "On Improving Acoustic Models for Dysarthric Speech",
      venue: "INTERSPEECH, 2017",
    },
  ],
  scholarLink: "https://scholar.google.com/citations?user=XXXXXXX",
}

export const whyPoints = [
  {
    number: "01",
    title: "Research-First Approach",
    description: "Our team brings 14+ years of speech AI research. We know why voice agents fail—because we've spent our careers studying it.",
  },
  {
    number: "02",
    title: "Production-First Philosophy",
    description: "We evaluate on live traffic, not synthetic scenarios. Because a test that doesn't reflect reality is worse than no test at all.",
  },
  {
    number: "03",
    title: "Full-Stack Observability",
    description: "Trace issues across the entire voice pipeline—STT, LLM, TTS. Know exactly where and why your agent broke.",
  },
  {
    number: "04",
    title: "Built for Regulated Industries",
    description: "Healthcare, financial services, insurance. We understand compliance requirements because our customers depend on them.",
  },
]

export const faqItems = [
  {
    question: "How is this different from existing eval platforms?",
    answer: "Most platforms focus on pre-deployment testing. We focus on production—where the real failures happen. Our research background means we understand why voice AI breaks in ways other tools miss.",
  },
  {
    question: "What voice AI platforms do you integrate with?",
    answer: "We work with all major voice AI providers including Vapi, Retell, Bland.ai, and custom implementations. One SDK, full visibility across your stack.",
  },
  {
    question: "Is SuperBryn compliant for regulated industries?",
    answer: "Yes. We're built specifically for healthcare, financial services, and insurance. Full audit trails, data residency options, and compliance reporting come standard.",
  },
  {
    question: "What's coming with the self-learning capability?",
    answer: "Our roadmap includes an Observer Agent that monitors production calls and an Improver Agent that suggests and implements fixes automatically. The goal: agents that get better without manual prompt tuning.",
  },
  {
    question: "How is your team different from other startups?",
    answer: "Our CTO has a PhD from IIT Madras and postdoctoral research from King's College London—14+ years studying exactly the problems we're solving. This isn't our first rodeo with speech recognition.",
  },
  {
    question: "Do you support real-time monitoring?",
    answer: "Yes. Sub-second alerting on production calls. You'll know when something breaks before your customers complain about it.",
  },
]

export const voiceWidgetQuestions = [
  '"How do you trace failures across the voice stack?"',
  '"What makes SuperBryn different from Cekura?"',
  '"Can I see a demo?"',
]

// Feature flags
export const FEATURE_FLAGS = {
  VOICE_WIDGET: false,
}

