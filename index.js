// Get the version number from package.json in Node.js code

import packageJSON from './package.json' assert {type: 'json'};

console.log(packageJSON);

console.log(packageJSON.version); // 👉️ 1.2.3
