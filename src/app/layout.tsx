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
        className={`${GeistSans.className} relative flex flex-col gap-4 bg-slate-950 text-slate-300 font-extralight w-full h-screen`}
      >
        <header className="w-full flex justify-center">
          <Header />
        </header>
        <main className="flex justify-center items-center flex-col w-full place-self-center py-12">
          {children}
        </main>
        <section
          style={{ zIndex: -20 }}
          className="absolute w-full h-2/3 left-0 bottom-0 md:top-1/4  bg-gradient-to-tr from-pink-950 via-slate-950 to-slate-950 blur-3xl"
        ></section>
        <section
          style={{ zIndex: -20 }}
          className="absolute w-1/2 h-2/3 right-0 bottom-0 md:top-1/4  bg-gradient-to-tl from-indigo-950 via-slate-950 to-slate-950 blur-3xl"
        ></section>
      </body>
    </html>
  );
}
