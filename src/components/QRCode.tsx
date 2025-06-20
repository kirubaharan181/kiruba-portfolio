
import React, { useState } from 'react';
import { QrCode, X, ExternalLink } from 'lucide-react';

const QRCodeComponent = () => {
  const [showQR, setShowQR] = useState(false);

  // Updated to use your deployed GitHub Pages URL
  const portfolioURL = 'https://kirubaharan181.github.io/kiruba-portfolio/';
  const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(portfolioURL)}`;

  return (
    <>
      {/* QR Code Button */}
      <button
        onClick={() => setShowQR(true)}
        className="fixed bottom-20 right-8 w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-green-500/25 z-40"
        aria-label="Show QR Code"
      >
        <QrCode size={24} />
      </button>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 rounded-xl border border-gray-700 p-6 max-w-sm w-full relative animate-scale-in">
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <X size={20} />
            </button>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">Scan to View Portfolio</h3>
              <div className="bg-white p-4 rounded-lg mb-4 inline-block">
                <img 
                  src={qrCodeURL} 
                  alt="Portfolio QR Code" 
                  className="w-48 h-48 mx-auto"
                />
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Scan with your phone camera to open the portfolio
              </p>
              <a
                href={portfolioURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                <ExternalLink size={16} />
                Open in Browser
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QRCodeComponent;
