function main () {
	if (app.documents.length == 0) {
		app.documents.add(DocumentColorSpace.CMYK, 800, 1000);
	}
	const uiResult = uiWindow();
	
	if (uiResult) {
		/*
		// This example shows an ability to transpile the spread operator syntax.
		const copyWithSpreaderExample = { ...uiResult };
		alert(JSON.stringify(copyWithSpreaderExample, null, 2))
		*/
		initializeDocument();

		const { action } = uiResult;
		if (action == "Make Shapes") {
			makeShapes(app.activeDocument);
		} else if (action == "Make Other Shapes") {
			makeOtherShapes(app.activeDocument);
		}
	}
}