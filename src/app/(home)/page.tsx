import Link from 'next/link';

const cards = [
  {
    title: 'Quick Start',
    href: '/docs',
    desc: 'From `intr init` to your first versioned prompt in five minutes.',
    tag: 'guide',
  },
  {
    title: 'CLI Reference',
    href: '/docs',
    desc: 'Every command, flag, and config option the `intr` binary understands.',
    tag: 'reference',
  },
  {
    title: 'API Reference',
    href: '/docs',
    desc: 'REST and GraphQL. Same contract, two protocols. OpenAPI-generated.',
    tag: 'reference',
  },
  {
    title: '.prompt Spec',
    href: '/spec',
    desc: 'The open file format. Implement it in any tool, no Intentry account required.',
    tag: 'spec',
  },
];

const tagColors: Record<string, string> = {
  guide:     'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  reference: 'text-sky-400 bg-sky-400/10 border-sky-400/20',
  spec:      'text-[var(--color-fd-primary)] bg-[var(--color-fd-primary)]/10 border-[var(--color-fd-primary)]/20',
};

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[var(--color-fd-border)] px-6 py-20 md:px-12 md:py-28">
        {/* Subtle dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle, var(--color-fd-foreground) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Amber glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[var(--color-fd-primary)]/5 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-fd-border)] bg-[var(--color-fd-muted)] px-3 py-1">
            <span className="size-1.5 rounded-full bg-[var(--color-fd-primary)]" />
            <span className="font-mono text-xs text-[var(--color-fd-muted-foreground)]">
              v1 · in development
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-fd-foreground)] md:text-5xl leading-[1.1]">
            Docs &amp;{' '}
            <span className="text-[var(--color-fd-primary)]">Specification</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--color-fd-muted-foreground)]">
            Everything you need to version, diff, run, and collaborate on prompts —
            from the <code className="font-mono text-sm px-1.5 py-0.5 rounded bg-[var(--color-fd-accent)] border border-[var(--color-fd-border)]">intr</code> CLI
            reference to the open{' '}
            <code className="font-mono text-sm px-1.5 py-0.5 rounded bg-[var(--color-fd-accent)] border border-[var(--color-fd-border)]">.prompt</code> spec.
          </p>
        </div>
      </section>

      {/* ── Cards ──────────────────────────────────────────────── */}
      <section className="px-6 py-14 md:px-12">
        <div className="mx-auto grid max-w-2xl gap-3 sm:grid-cols-2">
          {cards.map((card) => (
            <Link
              key={card.href + card.title}
              href={card.href}
              className="group flex flex-col gap-3 rounded-xl border border-[var(--color-fd-border)] bg-[var(--color-fd-card)] p-5 transition-colors duration-150 hover:border-[var(--color-fd-primary)]/50 hover:bg-[var(--color-fd-accent)]"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-sm font-semibold text-[var(--color-fd-foreground)] group-hover:text-[var(--color-fd-primary)] transition-colors">
                  {card.title}
                </span>
                <span
                  className={`shrink-0 rounded-full border px-2 py-0.5 font-mono text-[11px] ${tagColors[card.tag]}`}
                >
                  {card.tag}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[var(--color-fd-muted-foreground)]">
                {card.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
