'use strict';

import ContentAPI from './templater/content';

console.log('ContentAPI', ContentAPI);

module.exports.compileTemplate = (event, context, callback) => {
  const response = event;

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
