import type { Metadata } from 'next';
import { Inconsolata } from 'next/font/google';
import '../../public/globals.css';
import StoreProvider from '@/app/StoreProvider';

const inconsolata = Inconsolata({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'kbj la meujie',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr'>
      <head title='kbj la meujie'>
        <meta name='viewport' content='width=device-width' />
      </head>
      <body className={inconsolata.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
