import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Um presente especial',
  description: 'Uma surpresa feita com amor, só para você.',
  metadataBase: new URL('https://gabriellaxy.github.io/aniversario/'),
  openGraph: {
    title: 'Um presente especial',
    description: 'Uma surpresa feita com amor, só para você.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Um presente especial',
    description: 'Uma surpresa feita com amor, só para você.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
