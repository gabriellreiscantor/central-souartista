declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Pushes a custom GTM event for download clicks.
 * Usado nas campanhas de conversão (Google Tag Manager).
 */
export function trackDownloadClick(
  platform: 'app_store' | 'google_play' | 'web_app' | 'banner' | 'cta_pricing' | 'cta_features' | 'cta_header' | 'cta_footer',
  location?: string
) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'click_download',
    download_platform: platform,
    download_location: location ?? document.location?.pathname,
  });
}
