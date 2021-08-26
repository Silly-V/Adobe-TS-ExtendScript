
/**
 * > An example of template interpolation.
 */
function test (inStr?: string): string {
	let resultStr;
	if (inStr) {
		resultStr = `Your string is: "${inStr}".`;
	} else {
		resultStr = "Hello World!";
	}
	return resultStr;
}

/**
 * > An example of destructuring an array.
 * 
 * > An example of an Arrow function.
 */
function makeShapes (doc: Document): string[] {
	const completedItems = [];
	let [x, y] = [0, 0];
	new Array(10).join(",").split("").forEach(() => {
		const newShape = doc.pathItems.rectangle(y, x, 50, 50);
		x += 10;
		y += 10;
		completedItems.push(newShape.uuid);
	});
	return completedItems;
}

function makeOtherShapes (doc: Document) {
	let [x, y] = [200, 0];
	// Make the shapes with a one-line statement.
	CircleNames.forEach(m => doc.pathItems.ellipse(y += 10, x += 10, 50, 50));
}

/**
 * > An example showing powerful typescript typing: a known-typed object can be used
 * to add several properties to another object expecting those known properties.
 */
function initializeDocument () {
	const doc = app.activeDocument;
	const defaultColorization: Partial<Document> = {
		defaultFilled : false,
		defaultStroked : true,
	};
	Object.assign(doc, defaultColorization);
}