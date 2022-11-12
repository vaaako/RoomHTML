var showingText = false;
var instructionsShowed = false;
var skip = false

async function showText(message, time=10) {
	let textarea = document.getElementById("contentTextArea");
	showingText = true;

	// textarea.value += message;
	// textarea.scrollTop = textarea.scrollHeight; // Scrol down

	for(let i=0; i<message.length; i++) {
		textarea.value += message[i];

		if(skip) {
			let msg = message.slice(i+1, message.length);
			textarea.value += msg;
			skip = false;
			showingText = false;
			return;
		}

		textarea.scrollTop = textarea.scrollHeight; // Scrol down
		await new Promise(r => setTimeout(r, time)); // >time<
	}

	showingText = false;
}


// In case page is reloaded
function resetAll() {
	let textarea = document.getElementById("contentTextArea");
	textarea.style="font-family: monospace; font-size: 75%;";
	textarea.value=roomASCII;
}


function clearConsole() {
	let textarea = document.getElementById("contentTextArea");
	textarea.value = "";
}

const anythingToContinue = async () =>	await showText("\n\n[Press enter to continue]");

async function impossibleAction() {
	await showText("[Impossible Action]\n\n")
}

async function printSeparator() {
	let separator = "";
	for(let i=0; i<30; i++)
		separator += '-';

	await showText("\n\n");
	await showText(separator);
	await showText("\n\n\n\n");

}

async function showInstructions() {
	// Remove title
	instructionsShowed = true;
	let textarea = document.getElementById("contentTextArea");
	textarea.value = "";
	textarea.style = "font-family: 'Amiga Forever Pro2', sans-serif; font-size: 16px;";


	await showText(
		"Welcome to Room\n"
		+ "I will briefly explain the rules of the game.\n"
		+ "Room is a text adventure, this means that all actions will be by text, use your imagination.\n"
		+ "This is how it will work: I, the narrator, will explain your situation and at the end you will decide what action you want to take.\n"
		+ "Enter words like: \"Go to\", \"Check door\" etc.\n\n"
		+ "Example: \"You are facing a creature that has just made you question its existence, what do you wish to do?\n"
		+ "[ > ] I want to crush the ant\n\n"
		+ "In short: Be objective so that your actions are well interpreted, try to use \"verb\" + \"noun\".\n"
		+ "Tip: Check/look at the object before interacting with it.\n"
		+ "I recommend playing the game in one go, since it has no progress saving function.\n"
		+ "Remember to write only ONE action at a time and that you can and should always look around. Have a good game."
	,5);
}


function stringContains(inputStr, items) {
	inputStr = inputStr.toLowerCase();
	if(items.some(v => inputStr.includes(v))) return true;
	return false;
}


// [[[], [], []], [[], [], []]]
function checkAction(toCheck) {
	const allTypesArray = [
		// Action Types
		[
			/* Check */  [ "check", "walk", "approach", "arrive", "examine", "go to", "observe", "look", "see" ],
			/* Touch */  [ "touch", "discover", "determine", "examine", "touch" ],
			/* Attack */ [ "attack", "finish", "hit", "kick", "destroy", "crush", "kill", "multiply", "stomp", "punch", "smash" ],
			/* Use */    [ "use", "open", "throw", "cross", "put", "enter", "catch", "hold", "pass", "leave" ],
			/* Eat */    [ "eat", "put in mouth"]
		],

		[
			/* Eye */    [ "eye", "right" ],
			/* Cube */   [ "cube", "asbism", "back", "dark", "square", "void" ],
			/* Snail */  [ "snail", "animal", "creature", "left", "me" ],
			/* Door */   [ "door", "entrance", "front", "passage", "exit" ],
			/* Up */     [ "up", "lamp", "light" ],
			/* Around */ [ "around", "room", "all", "everything" ],
			/* Key */    [ "key", "door-opening object" ],
			/* Down */   [ "down", "floor", "low"]
		]
	];

	toCheck = toCheck.toLowerCase();
	var actionType = "";
	for (let i=0; i<allTypesArray[0].length; i++) { // Check each array of types
		if(stringContains(toCheck, allTypesArray[0][i])) { // If is a match
			actionType = allTypesArray[0][i][0]; // Return first item of matched array (First item is the array type)
			break;
		}
	}

	var toWhat = "";
	for (let i=0; i<allTypesArray[1].length; i++) {
		if(stringContains(toCheck, allTypesArray[1][i])) {
			toWhat = allTypesArray[1][i][0];
			break;
		}
	}

	if(toWhat.length>0) // String is not empty
		toWhat = toWhat.charAt(0).toUpperCase() + toWhat.toLowerCase().slice(1); // First letter to upper case

	// return actionType + "-" + toWhat;
	return actionType + toWhat;
}
