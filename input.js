let connection;
const {MOVE_UP, MOVE_LEFT, MOVE_DOWN, MOVE_RIGHT, MESSAGES, KEYS} = require('./constants');
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  
  return stdin;
}

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === MOVE_UP) {
    connection.write("Move: up");
  }
  if (key === MOVE_LEFT) {
    connection.write("Move: left");
  }
  if (key === MOVE_DOWN) {
    connection.write("Move: down");
  }
  if (key === MOVE_RIGHT) {
    connection.write("Move: right");
  }
  if (KEYS.includes(key)) {
    connection.write(MESSAGES[key]);
  }
  // if (key === 'm') {
  //   connection.write(MESSAGES[key]);
  // }
}
module.exports = { setupInput };
