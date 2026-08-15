import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ContactModal from './Contact.jsx'
import ProjectCard from './ProjectCard.jsx'
import ProjectsPage from './ProjectsPage.jsx'
import { projects } from './data/projects.js'

const services = [
  {
    icon: '⚙️',
    title: 'Workflow Automation',
    description: 'Mapping manual, repetitive processes and replacing them with reliable, monitored automation.',
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    description: 'Embedding LLMs and AI tools into existing systems — support, operations, internal knowledge, and more.',
  },
  {
    icon: '☁️',
    title: 'Cloud & CI/CD',
    description: 'Setting up dependable build, test, and deployment pipelines so shipping changes is fast and safe.',
  },
]

const featuredProjects = projects.slice(0, 6)

function Nav({ onContact }) {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/70 backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-950/70">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-[1.05rem] font-bold tracking-tight">
          Dave Wai
        </a>
        <nav className="hidden gap-7 text-sm text-neutral-500 sm:flex dark:text-neutral-400">
          <a href="#about" className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-50">About</a>
          <a href="#services" className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-50">Services</a>
          <a href="#projects" className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-50">Projects</a>
        </nav>
        <button
          type="button"
          onClick={onContact}
          className="whitespace-nowrap rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-neutral-900"
        >
          Get in touch
        </button>
      </div>
    </header>
  )
}

function Hero({ onContact }) {
  return (
    <section className="px-6 pt-24 pb-18 text-center">
      <div className="mx-auto max-w-3xl">
        <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-[0.82rem] font-semibold text-neutral-500 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(52,211,153,0.25)]" />
          Available for new engagements
        </span>
        <h1 className="mx-auto mb-5 max-w-3xl text-[2.4rem] leading-[1.08] font-bold tracking-tight sm:text-5xl lg:text-6xl">
          I help{' '}
          <span className="bg-gradient-to-r from-indigo-500 to-emerald-400 bg-clip-text text-transparent">
            Australian businesses
          </span>{' '}
          automate workflows and integrate AI
        </h1>
        <p className="mx-auto mb-9 max-w-xl text-lg text-neutral-500 dark:text-neutral-400">
          AI Consultant &amp; Engineer based in Melbourne, working with teams across Australia to replace
          manual processes with reliable automation and practical AI.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 px-6 py-3.5 text-[0.95rem] font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:-translate-y-0.5"
          >
            See recent work
          </a>
          <button
            type="button"
            onClick={onContact}
            className="rounded-full border border-neutral-200 bg-white px-6 py-3.5 text-[0.95rem] font-semibold transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600"
          >
            Book a call
          </button>
        </div>
      </div>
    </section>
  )
}

function SectionHead({ kicker, title, subtitle }) {
  return (
    <div className="mx-auto mb-12 max-w-xl text-center">
      <div className="mb-2 text-[0.8rem] font-bold tracking-widest text-indigo-500 uppercase">{kicker}</div>
      <h2 className="mb-3 text-[1.7rem] font-bold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle && <p className="text-neutral-500 dark:text-neutral-400">{subtitle}</p>}
    </div>
  )
}

function About() {
  return (
    <section id="about" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHead kicker="About" title="A bit about me" />
        <div className="mx-auto max-w-2xl rounded-2xl border border-neutral-200 bg-white p-10 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <p className="mb-4 text-[1.02rem] text-neutral-500 dark:text-neutral-400">
            Dave Wai is an AI Consultant &amp; Engineer based in Melbourne, working with businesses across
            Australia to modernise legacy workflows and embed practical AI into everyday operations.{' '}
            <em>(placeholder bio — replace with your own background, experience, and story)</em>
          </p>
          <p className="text-[1.02rem] text-neutral-500 dark:text-neutral-400">
            The focus is pragmatic automation: replacing manual, repetitive processes with reliable systems,
            and helping teams adopt AI tools without unnecessary complexity or vendor lock-in.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Workflow Automation', 'AI Integration', 'Cloud & DevOps', '.NET', 'Melbourne, Australia'].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-indigo-500/10 px-3 py-1.5 text-[0.8rem] font-semibold text-indigo-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHead kicker="Services" title="How I help" subtitle="Focused engagements, not open-ended retainers." />
        <div className="grid gap-5 sm:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-neutral-200 bg-white p-7 transition-transform hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="mb-4.5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-emerald-400/15 text-xl">
                {service.icon}
              </div>
              <h3 className="mb-2 text-[1.08rem] font-semibold tracking-tight">{service.title}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SeeAllCard() {
  return (
    <Link
      to="/projects"
      className="group flex w-56 shrink-0 snap-start flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-neutral-300 bg-white/60 text-center transition-colors hover:border-indigo-400 hover:bg-white dark:border-neutral-700 dark:bg-neutral-900/60 dark:hover:border-indigo-400 dark:hover:bg-neutral-900"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-emerald-400 text-lg text-white transition-transform group-hover:translate-x-1">
        →
      </span>
      <span className="text-sm font-semibold">See all projects</span>
      <span className="text-xs text-neutral-500 dark:text-neutral-400">{projects.length} case studies</span>
    </Link>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHead kicker="Selected Work" title="Recent projects" subtitle="Slide to see more, or view the full portfolio." />
      </div>
      <div className="mx-auto max-w-5xl overflow-x-auto px-6 pb-2 [scrollbar-width:thin]">
        <div className="flex snap-x snap-mandatory gap-5">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} className="w-72 shrink-0 snap-start" />
          ))}
          <SeeAllCard />
        </div>
      </div>
      <p className="mt-7 px-6 text-center text-[0.82rem] text-neutral-500 dark:text-neutral-400">
        These are illustrative examples — swap in real case studies as they become available.
      </p>
    </section>
  )
}

function CtaBand({ onContact }) {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-3xl rounded-3xl border border-neutral-200 bg-white p-14 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="mb-3 text-[1.6rem] font-bold tracking-tight sm:text-3xl">Have a workflow worth automating?</h2>
        <p className="mb-7 text-neutral-500 dark:text-neutral-400">
          Let's talk about what's slowing your team down and where AI can actually help.
        </p>
        <button
          type="button"
          onClick={onContact}
          className="rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 px-6 py-3.5 text-[0.95rem] font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:-translate-y-0.5"
        >
          Get in touch
        </button>
      </div>
    </section>
  )
}

function Footer({ onContact }) {
  return (
    <footer className="border-t border-neutral-200 px-6 py-8 text-center text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
      <p>
        © {new Date().getFullYear()} Dave Wai · Melbourne, Australia ·{' '}
        <button type="button" onClick={onContact} className="hover:text-neutral-900 dark:hover:text-neutral-50">
          dave.wai@outlook.com
        </button>
      </p>
    </footer>
  )
}

function Home({ onContact }) {
  return (
    <div id="top" className="relative min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            'radial-gradient(600px circle at 15% -5%, rgba(99,102,241,0.16), transparent 60%), radial-gradient(500px circle at 85% 10%, rgba(52,211,153,0.14), transparent 60%)',
        }}
      />
      <Nav onContact={onContact} />
      <main>
        <Hero onContact={onContact} />
        <About />
        <Services />
        <Projects />
        <CtaBand onContact={onContact} />
      </main>
      <Footer onContact={onContact} />
    </div>
  )
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home onContact={() => setContactOpen(true)} />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </BrowserRouter>
  )
}
