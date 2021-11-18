let connection;
const {MOVE_UP, MOVE_LEFT, MOVE_DOWN, MOVE_RIGHT, MESSAGES, KEYS} = require('./constants');
const setupInput = (conn) =>  {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  
  return stdin;
}

const handleUserInput = (key) => {
  let keyCaseInsensitive = key.toLowerCase();
  if (keyCaseInsensitive === "\u0003") {
    process.exit();
  }
  if (keyCaseInsensitive === MOVE_UP) {
    connection.write("Move: up");
  }
  if (keyCaseInsensitive === MOVE_LEFT) {
    connection.write("Move: left");
  }
  if (keyCaseInsensitive === MOVE_DOWN) {
    connection.write("Move: down");
  }
  if (keyCaseInsensitive === MOVE_RIGHT) {
    connection.write("Move: right");
  }
  if (KEYS.includes(keyCaseInsensitive)) {
    connection.write(MESSAGES[keyCaseInsensitive]);
  }
}
module.exports = { setupInput };
