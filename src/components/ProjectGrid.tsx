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

const ARC_FILTERS = [
  "All",
  "Gameplay Joy",
  "Mechanic Narrative",
  "Game Boundaries",
  "Player Boundaries",
] as const;

type Filter = (typeof ROLE_FILTERS)[number];
type ArcFilter = (typeof ARC_FILTERS)[number];

const PROJECT_ARC_BY_SLUG: Record<string, Exclude<ArcFilter, "All">> = {
  "heart-keys": "Gameplay Joy",
  "devil-cops-androids": "Gameplay Joy",
  "space-bar-porter": "Gameplay Joy",
  "right-click-to-activate-translator": "Mechanic Narrative",
  "the-birthday-party": "Mechanic Narrative",
  "hashmon": "Game Boundaries",
  "gugugaga-penguin": "Game Boundaries",
  "herder-and-hunter": "Player Boundaries",
};

interface Props {
  projects: ProjectMeta[];
}

export default function ProjectGrid({ projects }: Props) {
  const [filter, setFilter] = useState<Filter>("All");
  const [arcFilter, setArcFilter] = useState<ArcFilter>("All");
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const roleMatch = filter === "All" ? true : p.tags.includes(filter);
      const projectArc = PROJECT_ARC_BY_SLUG[p.slug];
      const arcMatch = arcFilter === "All" ? true : projectArc === arcFilter;
      return roleMatch && arcMatch;
    });
  }, [arcFilter, filter, projects]);

  const open = openSlug ? projects.find((p) => p.slug === openSlug) : null;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {ROLE_FILTERS.map((r) => (
          <button
            key={r}
            className="chip"
            data-active={filter === r}
            onClick={() => setFilter(r)}
            type="button"
          >
            {r === "All" ? "All Work" : `As a ${r}`}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {ARC_FILTERS.map((a) => (
          <button
            key={a}
            className="chip"
            data-active={arcFilter === a}
            onClick={() => setArcFilter(a)}
            type="button"
          >
            {a === "All" ? "All Arcs" : a}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
              className="group relative rounded-2xl overflow-hidden border border-[color:var(--color-rule)] bg-[color:var(--color-bg-2)] hover:border-[color:var(--color-ink-dim)] transition-colors"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenSlug(null)}
          >
            <motion.div
              className="max-w-2xl w-full bg-[color:var(--color-bg-2)] border border-[color:var(--color-rule)] rounded-2xl p-8"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="eyebrow">{open.year} · {open.role}</p>
              <h3 className="display-lg mt-2 mb-4">{open.title}</h3>
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
    <div className="p-6 flex flex-col h-full min-h-[260px]">
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
