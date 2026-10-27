import './globals.css';

export const metadata = {
  title: "Maison d’Or // The Solitaire — Haute Joaillerie Atelier",
  description: "Hand-sculpted in our private Paris atelier at candlelight. A singular 3.50-carat internally flawless diamond cradled in warm 18-karat champagne gold.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        {/* Grain Texture Overlay at 4% opacity (MANDATORY SPEC) */}
        <div className="grain-overlay" aria-hidden="true" />
        
        {/* Ambient Candlelight Glow for Atelier Atmosphere */}
        <div className="candlelight-ambient" aria-hidden="true" />

        {children}
      </body>
    </html>
  );
}
