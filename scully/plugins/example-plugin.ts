/**
 * Banner needs to be removed during build time because then we get another one during runtime
 */
import { registerPlugin, getPluginConfig } from '@scullyio/scully';

export const example = 'example';

const examplePlugin = async (html: string): Promise<string> => {
  return html;
};

const validator = async () => [];

registerPlugin('postProcessByHtml', example, examplePlugin, validator);
