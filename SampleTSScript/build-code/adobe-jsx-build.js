const path = require("path");
const fs = require("fs");
const { watchFile } = fs;

function build (dir, scriptName) {
	buildTimeout = setTimeout(() => {
		clearTimeout(buildTimeout);
		buildTimeout = null;
	}, 500);
	const contentPath = path.resolve(dir, `./${scriptName}_CONTENTS.js`);
	const templatePath = path.resolve(dir, `./${scriptName}.template.js`);
	const contentContents = fs.readFileSync(contentPath, "utf8");
	const templateContents = fs.readFileSync(templatePath, "utf8");
	const orderedContents = contentContents.split(/^var _polyfillSep.+$/m).reverse().join("\n"); // Ensure the polyfill code is at the top of the file.
	const newContents = templateContents.replace("// [INCLUDE]", orderedContents.split(/[\r\n]+/g).map(m => `\t${m}`).join("\n"));
	console.log("Build Script ran.");
	const outputPath = path.resolve(dir, `../${scriptName}.jsx`);
	fs.writeFileSync(outputPath, newContents);
}

let buildTimeout = null;

/**
 * Starts a watch on the contents file which is written-to by the TSC procedure.
 * After changes it performs the post-processing.
 * @param {string} dir - The folder path.
 * @param {string} scriptName
 */
function init (dir, scriptName) {
	const fileToWatch = path.resolve(dir + `/${scriptName}_CONTENTS.js`);
	console.log(`Build script activated.\n Watching file '${fileToWatch}'`);
	watchFile(fileToWatch, (eventType, filename) => {
		if (filename) {
			if (buildTimeout == null) {
				build(dir, scriptName);
			}
		} else {
			console.log('filename not provided');
		}
	});
}

module.exports = { build, init }