const fs = require('fs');
const version = require('./package.json').version;

const TOKEN_START = '// version:start';
const TOKEN_END = '// version:end';
const PATTERN = new RegExp(`${TOKEN_START}[\\s\\S]*${TOKEN_END}`, 'gim');
const TARGETS = [
  './projects/elements-demo/src/environments/environment.ts',
  './projects/elements-demo/src/environments/environment.prod.ts'
];

// environment files
TARGETS.forEach(target => {
  const content = fs.readFileSync(target, 'utf8');
  const replacement = `${TOKEN_START}\n  version: '${version}',\n  ${TOKEN_END}`;
  const adjustedContent = content.replace(PATTERN, replacement);

  fs.writeFileSync(target, adjustedContent);
});
