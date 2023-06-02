import unCamelCase from './un-camel-case.js';
import slugify from './slugify.js';

/**
* Replaces spaces with hyphens, split camelCase text, removes non-word chars, removes accents and converts to lower case.
* @param {string} input
* @returns hyphenatedString
*/
export default input => slugify(unCamelCase(input), "-");
