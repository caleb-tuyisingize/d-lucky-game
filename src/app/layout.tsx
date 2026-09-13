import type { Metadata } from 'next';
import { Montserrat_Alternates } from 'next/font/google';
import './globals.css';

const montserratAlternates = Montserrat_Alternates({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat-alternates',
});

export const metadata: Metadata = {
  title: 'D-Lucky-Game',
  description: 'Fast-paced sports break game',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bgUrl = "./Gemini_Generated_Image_c3ntpgc3ntpgc3nt.jpg"
  return (
    <html lang="en" className={montserratAlternates.variable}>
      <link rel="icon" href="./title-logo.jpg" />
      <body className={`font-sans bg-[url(${bgUrl})] bg-cover bg-fixed antialiased text-white min-h-screen`} style={{ backgroundImage: `url(${bgUrl})` }}>
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="relative">
        {children}
        </div>
      </body>
    </html>
  );
}