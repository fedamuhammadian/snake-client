let moveCommand = "";
let connection;
let cannedMessages = {
	1: "Say: LOL",
	2: "Say: OMG",
	3: "Say: 😘"
}
const handleUserInput = (key) => {
	if (key === '\u0003') {
		process.exit();
	}
	if (key === 'w') {
		moveCommand = "Move: up";
	} else if (key === 's') {
		moveCommand = "Move: down";
	} else if (key === 'a') {
		moveCommand = "Move: left";
	} else if (key === 'd') {
		moveCommand = "Move: right";
	}
	if (connection && moveCommand) {
		connection.write(moveCommand);
	}

	if (key === '1' && connection) {
		connection.write(cannedMessages['1'])
	} else if (key === '2' && connection) {
		connection.write(cannedMessages['2'])
	} else if (key === '3' && connection) {
		connection.write(cannedMessages['3'])
	};
};


const setupInput = (conn) => {
	connection = conn;
	const stdin = process.stdin;
	stdin.setRawMode(true);
	stdin.setEncoding("utf8");
	stdin.resume();

	stdin.on("data", handleUserInput);

	return stdin;
};

module.exports = {
	setupInput
};