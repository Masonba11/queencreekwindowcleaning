/** Google Ads click-to-call conversion (defined in app/layout.tsx) */
declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

export {};
