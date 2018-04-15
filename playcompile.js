const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

/*

const campaignPath = path.resolve(__dirname, 'ethereum', 'contracts', 'Campaign.sol')

const source = fs.readFileSync(campaignPath, 'utf8');

const output = solc.compile(source, 1);

const Campaign = output.contracts.Campaign


console.log(Campaign);







*/
