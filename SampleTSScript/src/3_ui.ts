type UIActionOptions = "Make Shapes" | "Make Other Shapes";
type UIWindowResult = {
	action: UIActionOptions;
	enteredText: string;
}

function uiWindow () {
	const w = new Window("dialog", GlobalScriptInfo.scriptName);

  if (typeof(memoryUILocation) != "undefined") {
    w.location = [memoryUILocation[0], memoryUILocation[1]];
  }
	let action: UIActionOptions;
	const greeting = w.add("statictext", undefined, "A UI Window for testing.");
	const textEntryGroup = w.add("group");
	const lbl_textEntry = textEntryGroup.add("statictext", undefined, "Text Input");
	const textEntryField = textEntryGroup.add("edittext", undefined, "");
	textEntryField.characters = 10;
	const g_btn = w.add("group");
	const btn_ccl = g_btn.add("button", undefined, "Cancel");
	const btn_test = g_btn.add("button", undefined, "Make Shapes" as UIActionOptions);
	const btn_test2 = g_btn.add("button", undefined, "Make Other Shapes" as UIActionOptions);
	btn_test2.onClick = btn_test.onClick = function (this: Button) {
		action = this.text as UIActionOptions;
		w.close();
	};

	w.onClose = function () {
		/**
		 * Set the global persistent variable. This is possible via the `#targetengine` directive.
		 */
		memoryUILocation = [this.location[0], this.location[1]];
		return true;
	};

	if (w.show() == 2) {
		return null; // Cancelled
	} else {
		return {
			action,
			enteredText : textEntryField.text
		};
	}
}