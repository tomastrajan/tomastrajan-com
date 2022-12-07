import '@scullyio/scully-plugin-puppeteer';
import { ScullyConfig } from '@scullyio/scully';

const { LOCALE = 'en' } = process.env;

console.log(`[scully config] building for locale: ${LOCALE}`);

const defaultPostRenderers = [];

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
