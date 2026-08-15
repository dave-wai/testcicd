import { Link } from 'react-router-dom'

export default function ProjectCard({ project, className = '' }) {
  return (
    <Link
      to="/projects"
      className={`group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 ${className}`}
    >
      <div className={`relative h-30 bg-gradient-to-br ${project.gradient}`}>
        <span className="absolute top-3.5 left-3.5 rounded-full bg-white/90 px-2.5 py-1 text-[0.72rem] font-bold tracking-wide text-neutral-900 uppercase">
          Case Study
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-[1.05rem] font-semibold tracking-tight transition-colors group-hover:text-indigo-500">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm text-neutral-500 dark:text-neutral-400">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[0.72rem] font-semibold text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
