import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Header from './header/Header';

export const metadata: Metadata = {
  title: 'Joshua Keith Pearson',
  description: 'My personal portfolio page.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} flex flex-col gap-4 bg-slate-950 text-slate-300 font-extralight w-full h-screen`}
      >
        <header className="w-full flex justify-center">
          <Header />
        </header>
        <main className="flex justify-center items-center flex-col w-full place-self-center">
          {children}
        </main>
      </body>
    </html>
  );
}
