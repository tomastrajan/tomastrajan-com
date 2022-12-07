'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.example = void 0;
/**
 * Banner needs to be removed during build time because then we get another one during runtime
 */
const scully_1 = require('@scullyio/scully');
exports.example = 'example';
const examplePlugin = async (html) => {
  return html;
};
const validator = async () => [];
(0, scully_1.registerPlugin)(
  'postProcessByHtml',
  exports.example,
  examplePlugin,
  validator
);
//# sourceMappingURL=example-plugin.js.map
