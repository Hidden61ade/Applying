import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type ProjectMeta = {
  slug: string;
  title: string;
  year: string;
  role: string;
  summary: string;
  hook?: string;
  depth: "deep" | "light";
  tags: string[];
  award?: string;
  cover?: string;
  links: { label: string; href: string }[];
};

const ROLE_FILTERS = [
  "All",
  "Designer",
  "Programmer",
  "Writer",
  "Director",
  "Interaction",
] as const;

type Filter = (typeof ROLE_FILTERS)[number];

interface Props {
  projects: ProjectMeta[];
}

export default function ProjectGrid({ projects }: Props) {
  const [filter, setFilter] = useState<Filter>("All");
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.tags.includes(filter));
  }, [filter, projects]);

  const open = openSlug ? projects.find((p) => p.slug === openSlug) : null;

  return (
    <div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-12 border-b border-[color:var(--color-rule)]">
        {ROLE_FILTERS.map((r) => (
          <button
            key={r}
            className="chip min-h-11"
            data-active={filter === r}
            aria-pressed={filter === r}
            onClick={() => setFilter(r)}
            type="button"
          >
            {r === "All" ? "All Work" : `As a ${r}`}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.article
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
              className="group relative overflow-hidden border-t border-[color:var(--color-rule)] bg-[color:var(--color-bg-2)] hover:border-[color:var(--color-accent)] transition-colors"
            >
              <Card project={p} onOpen={() => setOpenSlug(p.slug)} />
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-[color:var(--color-bg)]/85 backdrop-blur-sm flex items-center justify-center p-6"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenSlug(null)}
          >
            <motion.div
              className="max-w-2xl max-h-[88vh] overflow-y-auto w-full bg-[color:var(--color-bg-2)] border border-[color:var(--color-rule)] p-6 md:p-8"
              role="dialog"
              aria-modal="true"
              aria-labelledby={`quick-view-${open.slug}`}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {open.cover && (
                <img
                  src={open.cover}
                  alt={`Cover art for ${open.title}`}
                  className="aspect-video w-full object-cover mb-7"
                />
              )}
              <p className="eyebrow">{open.year} · {open.role}</p>
              <h3 id={`quick-view-${open.slug}`} className="display-lg mt-2 mb-4">{open.title}</h3>
              {open.award && (
                <p className="text-[color:var(--color-accent-2)] mb-3 text-sm">{open.award}</p>
              )}
              <p className="text-[color:var(--color-ink-dim)] leading-relaxed">{open.summary}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {open.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              <div className="flex gap-4 mt-6">
                {open.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-[color:var(--color-accent)]"
                  >
                    {l.label} ↗
                  </a>
                ))}
                <button
                  onClick={() => setOpenSlug(null)}
                  className="ml-auto text-[color:var(--color-ink-dim)] hover:text-[color:var(--color-ink)]"
                  type="button"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Card({
  project,
  onOpen,
}: {
  project: ProjectMeta;
  onOpen: () => void;
}) {
  const isDeep = project.depth === "deep";
  const inner = (
    <div className="flex flex-col h-full">
      {project.cover && (
        <div className="aspect-video overflow-hidden bg-[color:var(--color-bg)]">
          <img
            src={project.cover}
            alt={`Cover art for ${project.title}`}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
          />
        </div>
      )}
      <div className="p-5 md:p-6 flex flex-col flex-1 min-h-[250px]">
      <div className="flex items-start justify-between gap-3">
        <p className="eyebrow">{project.year}</p>
        <span
          className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border"
          style={{
            borderColor: isDeep ? "var(--color-accent)" : "var(--color-rule)",
            color: isDeep ? "var(--color-accent)" : "var(--color-ink-dim)",
          }}
        >
          {isDeep ? "Case study" : "Quick view"}
        </span>
      </div>
      <h3 className="text-2xl font-[var(--font-display)] mt-3 group-hover:text-[color:var(--color-accent)] transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-[color:var(--color-ink-dim)] mt-1">{project.role}</p>
      {project.hook && (
        <p className="mt-4 italic text-[color:var(--color-ink)] leading-snug">
          “{project.hook}”
        </p>
      )}
      {project.award && (
        <p className="text-xs text-[color:var(--color-accent-2)] mt-3">{project.award}</p>
      )}
      <div className="mt-auto pt-6 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>
      </div>
    </div>
  );

  if (isDeep) {
    return (
      <a href={`/projects/${project.slug}`} className="block h-full">
        {inner}
      </a>
    );
  }
  return (
    <button onClick={onOpen} className="block w-full h-full text-left" type="button">
      {inner}
    </button>
  );
}
