import { promises } from 'fs';

var networkData = require('@data/network.json');

var getData = () => new Promise((resolve) => resolve(networkData));

export default { getData };
