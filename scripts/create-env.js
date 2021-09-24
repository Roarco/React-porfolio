
const fs = require('fs');

fs.writeFileSync('./.env', `API=${process.env.REACT_APP_API_URL}\n`);
