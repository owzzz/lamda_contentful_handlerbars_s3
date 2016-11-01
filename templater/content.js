import Contentful from 'contentful';
import Config from './config';

export default class {
	constructor () {
		const env = process.env;

		this.client = contentful.createClient({
		  // This is the space ID. A space is like a project folder in Contentful terms 
		  space: Config.Contentful[env].space,
		  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app 
		  accessToken: Config.Contentful[env].accessToken
		});
	}

	getContent () {
		return this.client.getEntries();
	}

	getContentById (id) {
		return this.client.getEntry(id);
	}

	getContentByType (type) {
		return this.client.getContentType(type)
	}
}
