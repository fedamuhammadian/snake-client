let moveCommand = "";
let connection ;
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
  
  module.exports = { setupInput };