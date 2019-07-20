import { promises } from 'fs';

var networkData = require('@data/network.json');

var getSchema = () => new Promise((resolve) => resolve(networkData.schema));
var getDomain = () => new Promise((resolve) => resolve(networkData.domain));
var getNetwork = () => new Promise((resolve) => resolve(networkData.network));

export default { getSchema, getDomain, getNetwork };
