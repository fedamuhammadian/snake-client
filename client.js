const net = require("net");
const {
	IP,
	PORT
} = require("./constant.js");

const connect = function() {
	const conn = net.createConnection({
		host: IP,
		port: PORT,
	});

	conn.setEncoding("utf8");

	conn.on("connect", () => {
		console.log("Successfully connected to game server");
		conn.write("Name: fed");
	});

	return conn;
};

module.exports = {
	connect
};