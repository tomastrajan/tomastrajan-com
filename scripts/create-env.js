const fs = require('fs');
fs.writeFileSync('./.env', `NG_APP_API_KEY=${process.env.API_KEY}\n`);
