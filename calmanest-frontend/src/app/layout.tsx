import type { Metadata } from 'next';
import './globals.css';
import ConditionalNavBar from '@/components/Layouts/ConditionalNavBar'; 
import ConditionalFooter from '@/components/Layouts/ConditionalFooter';

export const metadata: Metadata = {
  title: 'CalmNest',
  description: 'Generated by CalmNest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ConditionalNavBar /> 
        <main>{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  );
}