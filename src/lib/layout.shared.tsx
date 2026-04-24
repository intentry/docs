import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-1.5 font-semibold tracking-tight">
          <span className="font-mono text-[var(--color-fd-primary)]">intr</span>
          <span className="text-[var(--color-fd-muted-foreground)] font-normal">/</span>
          <span>docs</span>
        </span>
      ),
    },
    links: [
      { text: 'Docs', url: '/docs', active: 'nested-url' },
      { text: 'Spec', url: '/spec', active: 'nested-url' },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
