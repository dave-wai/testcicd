import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects } from './data/projects.js'
import ProjectCard from './ProjectCard.jsx'

export default function ProjectsPage() {
  useEffect(() => {
    document.title = 'Projects — Dave Wai'
    return () => {
      document.title = 'Dave Wai — AI Consultant & Engineer'
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            'radial-gradient(600px circle at 15% -5%, rgba(99,102,241,0.16), transparent 60%), radial-gradient(500px circle at 85% 10%, rgba(52,211,153,0.14), transparent 60%)',
        }}
      />

      <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/70 backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-950/70">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-[1.05rem] font-bold tracking-tight">
            Dave Wai
          </Link>
          <Link
            to="/"
            className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600"
          >
            ← Back home
          </Link>
        </div>
      </header>

      <main className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <div className="mb-2 text-[0.8rem] font-bold tracking-widest text-indigo-500 uppercase">Portfolio</div>
            <h1 className="mb-3 text-[1.9rem] font-bold tracking-tight sm:text-4xl">All projects</h1>
            <p className="text-neutral-500 dark:text-neutral-400">
              {projects.length} examples of the kind of workflow automation and AI integration work I do.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <p className="mt-10 text-center text-[0.82rem] text-neutral-500 dark:text-neutral-400">
            These are illustrative examples — swap in real case studies as they become available.
          </p>
        </div>
      </main>
    </div>
  )
}
