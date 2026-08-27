import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  getProjectCoverSrcSet,
  PROJECT_GRID_IMAGE_SIZES,
  PROJECT_QUICK_VIEW_IMAGE_SIZES,
} from "../lib/responsive-image";

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
  coverFit?: "cover" | "contain";
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

const FILTER_LABELS: Record<Filter, string> = {
  All: "All Work",
  Designer: "Design",
  Programmer: "Programming",
  Writer: "Writing",
  Director: "Direction",
  Interaction: "Interaction",
};

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

  useEffect(() => {
    if (!openSlug) return;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenSlug(null);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openSlug]);

  return (
    <div>
      <div className="flex flex-wrap gap-x-5 gap-y-1 mb-12 border-b border-[color:var(--color-rule)]">
        {ROLE_FILTERS.map((r) => (
          <button
            key={r}
            className="chip min-h-11"
            data-active={filter === r}
            aria-pressed={filter === r}
            onClick={() => setFilter(r)}
            type="button"
          >
            {FILTER_LABELS[r]}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12"
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
              className="group relative overflow-hidden border-t border-[color:var(--color-rule)] bg-transparent hover:border-[color:var(--color-accent)] transition-colors"
            >
              <Card project={p} onOpen={() => setOpenSlug(p.slug)} />
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] bg-[color:var(--color-ink)]/55 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenSlug(null)}
          >
            <motion.div
              className="max-w-5xl max-h-[88vh] overflow-y-auto w-full bg-[color:var(--color-bg)] border border-white/40 grid md:grid-cols-[1.08fr_0.92fr]"
              role="dialog"
              aria-modal="true"
              aria-labelledby={`quick-view-${open.slug}`}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[color:var(--color-bg-2)] min-h-[250px] md:min-h-[560px]">
                {open.cover ? (
                  <img
                    src={open.cover}
                    srcSet={getProjectCoverSrcSet(open.cover)}
                    sizes={PROJECT_QUICK_VIEW_IMAGE_SIZES}
                    alt={`Cover art for ${open.title}`}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full min-h-[250px] md:min-h-[560px] ${open.coverFit === "contain" ? "object-contain bg-white" : "object-cover"}`}
                  />
                ) : (
                  <div className="h-full min-h-[250px] md:min-h-[560px] bg-[linear-gradient(145deg,var(--color-ink),var(--color-accent))]" />
                )}
              </div>
              <div className="p-6 md:p-8 flex flex-col">
                <p className="eyebrow">{open.year} · {open.role}</p>
                <h3 id={`quick-view-${open.slug}`} className="display-lg mt-3 mb-5">{open.title}</h3>
                {open.award && (
                  <p className="text-[color:var(--color-accent)] mb-4 text-sm">{open.award}</p>
                )}
                <p className="text-[color:var(--color-ink-dim)] leading-relaxed">{open.summary}</p>
                <div className="flex flex-wrap gap-1 mt-6">
                  {open.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-auto pt-10 border-t border-[color:var(--color-rule)]">
                  {open.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="button-secondary"
                    >
                      {l.label} ↗
                    </a>
                  ))}
                  <button
                    onClick={() => setOpenSlug(null)}
                    className="ml-auto button-primary"
                    type="button"
                  >
                    Close
                  </button>
                </div>
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
        <div className="aspect-[16/10] overflow-hidden bg-[color:var(--color-bg-2)]">
          <img
            src={project.cover}
            srcSet={getProjectCoverSrcSet(project.cover)}
            sizes={PROJECT_GRID_IMAGE_SIZES}
            alt={`Cover art for ${project.title}`}
            loading="lazy"
            decoding="async"
            className={`w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.035] ${project.coverFit === "contain" ? "object-contain bg-white" : "object-cover"}`}
          />
        </div>
      )}
      <div className="pt-4 flex flex-col flex-1 min-h-[220px]">
      <div className="flex items-start justify-between gap-3">
        <p className="eyebrow">{project.year}</p>
        <span
          className="text-[9px] uppercase tracking-widest pb-1 border-b"
          style={{
            borderColor: isDeep ? "var(--color-accent)" : "var(--color-rule)",
            color: isDeep ? "var(--color-accent)" : "var(--color-ink-dim)",
          }}
        >
          {isDeep ? "Case study" : "Quick view"}
        </span>
      </div>
      <h3 className="text-2xl md:text-[1.7rem] leading-[1.05] font-[var(--font-display)] mt-3 group-hover:text-[color:var(--color-accent)] transition-colors">
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
