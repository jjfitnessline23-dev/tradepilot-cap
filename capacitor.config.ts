import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tradepilot.app',
  appName: 'TradePilot',
  webDir: 'www',
  server: {
    // The native shell loads the live TradePilot web app.
    url: 'https://tradepilot-self-sigma.vercel.app',
    cleartext: false,
  },
  ios: {
    contentInset: 'automatic',
  },
  android: {
    allowMixedContent: false,
  },
  // Tells the website it's running inside the native app.
  appendUserAgent: 'TradePilotApp',
  plugins: {
    App: {
      allowNavigation: ['tradepilot-self-sigma.vercel.app', '*.vercel.app'],
    },
  },
};

export default config;
