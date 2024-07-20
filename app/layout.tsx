import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MijuLayout from './provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mijubnb로 캠핑가기',
  description: 'Mijubnb로 캠핑을 계획해보세요',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MijuLayout>{children}</MijuLayout>
      </body>
    </html>
  );
}
