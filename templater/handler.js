'use strict';

// Your first function handler
module.exports.compileTemplate = (event, context, cb) => {
	console.log('###############', event);
	console.log('###############', context);
	console.log('compileTemplate Complete');
	cb(new Error['[451] Media Type Not Supported']);
}

// You can add more handlers here, and reference them in serverless.yml
