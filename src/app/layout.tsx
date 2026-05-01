import { RootProvider } from 'fumadocs-ui/provider/next';
import { Instrument_Sans, JetBrains_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import './global.css';

const sans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: {
    default: 'Intentry Docs',
    template: '%s - Intentry',
  },
  description:
    'Documentation and open protocol specification for Intentry - prompt version control.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider theme={{ defaultTheme: 'dark', disableTransitionOnChange: true }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
