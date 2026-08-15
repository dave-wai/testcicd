const gradients = [
  'from-indigo-500 to-emerald-400',
  'from-pink-500 to-indigo-500',
  'from-emerald-400 to-sky-500',
  'from-amber-400 to-pink-500',
  'from-sky-500 to-violet-500',
  'from-violet-500 to-emerald-400',
]

export const projects = [
  {
    title: 'Invoice Processing Automation',
    description:
      'Built an AI-powered pipeline that extracts, validates, and routes supplier invoices automatically, cutting manual data entry time significantly.',
    stack: ['OCR', 'Azure Functions', 'Power Automate'],
  },
  {
    title: 'Customer Support Triage Bot',
    description:
      'An LLM-based classifier that reads incoming support tickets, tags intent and urgency, and routes them to the right team automatically.',
    stack: ['LLM', 'Zendesk API', 'Python'],
  },
  {
    title: 'Internal Knowledge Assistant',
    description:
      'A retrieval-augmented chatbot over internal documentation, helping new hires and staff find answers without pinging a colleague.',
    stack: ['RAG', 'Vector DB', '.NET'],
  },
  {
    title: 'Meeting Notes & Action Item Extractor',
    description:
      'Transcribes meetings and automatically extracts action items, owners, and due dates into the team\'s task tracker.',
    stack: ['Speech-to-Text', 'LLM', 'Jira API'],
  },
  {
    title: 'Inventory Demand Forecasting',
    description:
      'A forecasting model that predicts stock demand from historical sales data, reducing overstock and stockouts.',
    stack: ['Python', 'Time Series', 'Power BI'],
  },
  {
    title: 'AI-Powered Resume Screener',
    description:
      'Screens and ranks incoming applications against a role\'s requirements, giving recruiters a shortlist instead of a pile.',
    stack: ['LLM', 'Azure Functions', 'ATS API'],
  },
  {
    title: 'Automated Expense Report Auditor',
    description:
      'Flags policy-violating expense claims automatically before they reach a human approver, cutting review time.',
    stack: ['OCR', 'Rules Engine', '.NET'],
  },
  {
    title: 'Sales Lead Scoring Engine',
    description:
      'Scores inbound leads using firmographic and behavioural signals so sales reps focus on the ones likely to convert.',
    stack: ['Python', 'CRM API', 'ML'],
  },
  {
    title: 'Chatbot for Appointment Scheduling',
    description:
      'A conversational booking assistant embedded on the client\'s site, syncing directly with staff calendars.',
    stack: ['LLM', 'Calendar API', 'React'],
  },
  {
    title: 'Document Classification Pipeline',
    description:
      'Automatically sorts incoming scanned documents into the right category and folder, replacing manual triage.',
    stack: ['OCR', 'Azure Functions', 'Blob Storage'],
  },
  {
    title: 'Social Media Content Scheduler',
    description:
      'Generates and schedules on-brand social posts from a content calendar, with a human approval step before publishing.',
    stack: ['LLM', 'Buffer API', 'Power Automate'],
  },
  {
    title: 'Predictive Maintenance Alerts',
    description:
      'Monitors equipment sensor data and flags anomalies before they become costly failures.',
    stack: ['Python', 'IoT Hub', 'ML'],
  },
  {
    title: 'Voice-to-Text Meeting Transcriber',
    description:
      'Real-time transcription and speaker labelling for client calls, searchable afterwards from a simple dashboard.',
    stack: ['Speech-to-Text', 'Azure', 'React'],
  },
  {
    title: 'Automated QA Testing Suite',
    description:
      'AI-assisted test generation and execution for a legacy web app, catching regressions before release.',
    stack: ['Playwright', 'LLM', 'CI/CD'],
  },
  {
    title: 'Email Auto-Responder & Categorizer',
    description:
      'Reads incoming inbox mail, drafts suggested replies, and files messages into the right queue automatically.',
    stack: ['LLM', 'Graph API', 'Power Automate'],
  },
  {
    title: 'Contract Clause Extraction Tool',
    description:
      'Extracts key clauses and obligations from long contracts, surfacing risk terms for legal review in seconds.',
    stack: ['RAG', 'LLM', '.NET'],
  },
  {
    title: 'Real-Time Fraud Detection System',
    description:
      'Flags suspicious transactions as they happen, using a model trained on historical fraud patterns.',
    stack: ['Python', 'Event Hubs', 'ML'],
  },
  {
    title: 'Employee Onboarding Workflow Bot',
    description:
      'Walks new hires through account setup, training, and paperwork automatically, freeing up HR\'s time.',
    stack: ['Power Automate', 'Teams API', 'LLM'],
  },
  {
    title: 'Supply Chain Anomaly Detector',
    description:
      'Monitors supplier and logistics data for unusual delays or cost spikes, alerting the ops team early.',
    stack: ['Python', 'Azure', 'Power BI'],
  },
  {
    title: 'AI-Assisted Code Review Bot',
    description:
      'Reviews pull requests for common issues and style violations, leaving inline comments before a human reviewer looks.',
    stack: ['LLM', 'GitHub API', 'CI/CD'],
  },
].map((project, index) => ({
  ...project,
  slug: project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, ''),
  gradient: gradients[index % gradients.length],
}))
