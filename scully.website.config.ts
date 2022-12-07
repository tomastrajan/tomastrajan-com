import '@scullyio/scully-plugin-puppeteer';
import { ScullyConfig } from '@scullyio/scully';
import { getFlashPreventionPlugin } from '@scullyio/scully-plugin-flash-prevention';

const { LOCALE = 'en' } = process.env;

console.log(`[scully config] building for locale: ${LOCALE}`);

const defaultPostRenderers = [
  getFlashPreventionPlugin({ appRootSelector: 'tt-root' }),
];

export const config: ScullyConfig = {
  defaultPostRenderers,
  appPort: 4500,
  staticPort: 4400,
  projectRoot: './projects/website',
  projectName: 'website',
  outDir: `./dist/static`,
  distFolder: `./dist/website`,
  /* Only used for M1 macbook
  puppeteerLaunchOptions: {
    executablePath: '/opt/homebrew/bin/chromium',
  },
   */
  routes: {},
  // add spsModulePath when using de Scully Platform Server,
};
