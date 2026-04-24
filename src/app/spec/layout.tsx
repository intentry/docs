import { specSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/spec'>) {
  return (
    <DocsLayout tree={specSource.getPageTree()} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}