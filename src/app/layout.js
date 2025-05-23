// src/app/layout.jsx
import './globals.css'; // ✅ ONLY PLACE TO IMPORT GLOBAL CSS

export const metadata = {
  title: 'Turf Booking',
  description: 'One-page booking site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
