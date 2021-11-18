const net = require("net");
const {IP, PORT} = require('./constants');

const connect =  () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write('Name: LS');
  });

  conn.on("data", (data) => {
    console.log(`Message from server - ${data}`);
  });

  return conn;
};

module.exports = { connect };
