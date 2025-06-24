import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Add weights as needed
  variable: '--font-montserrat', // optional custom CSS variable
});
import '@fortawesome/fontawesome-free/css/all.min.css';

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
