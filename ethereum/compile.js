// Import our dependancies
const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

// Create a path to the build folder 
// where __direname is the name of the directory
// this current script is running in.
const buildPath = path.resolve(__dirname, 'build');

// Delete the /ethereum/build folder so we can start fresh.
fs.removeSync(buildPath);

// Create a path to the Campaign.sol file.
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');

// Create a variable to the campaign source
const source = fs.readFileSync(campaignPath, 'utf8');

// Compile the .sol file and create the contracts object.
const output = solc.compile(source, 1).contracts;

// Create anchor for the Campaign and CampaignFactory object.
const Campaign = output.Campaign;
const CampaignFactory = output.CampaignFactory;

// Create the Build folder.
fs.ensureDirSync(buildPath);

console.log(output);
// Video 132: Loop through the keys in the contract output file, convert to JSON and put in build folder.
for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    );
}






