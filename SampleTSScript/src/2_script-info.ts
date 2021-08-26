const GlobalSessionInfo = {
	os : $.os.match('Windows') ? 'Windows' : 'Mac',
	AIVersion : parseInt(app.version.split(/\./)[0]),
	user : $.getenv($.os.includes("Windows")? "USERNAME" : "USER"),
};

const GlobalScriptInfo = {
	"scriptName" : "SampleTSScript",
	"scriptVersion" : "1.0.0",
	"author" : "Vasily Hall",
	"author_email" : "vasily.hall@gmail.com",
};