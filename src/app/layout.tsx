import './globals.css';

import { Poppins } from '@next/font/google';

import StyledComponentsRegistry from '../lib/registry';
import GlobalStyles from './globalStyles';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'optional',
  weight: ['300', '400', '500', '600', '700', '800'], // I want this font-weight has 400,500,600,700,800,900
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <GlobalStyles />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
