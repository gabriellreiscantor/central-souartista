import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SmartAppBanner } from './SmartAppBanner';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <SmartAppBanner onVisibilityChange={setIsBannerVisible} />
      <Header bannerVisible={isBannerVisible} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
