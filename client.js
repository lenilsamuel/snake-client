const net = require("net");
const {IP, PORT} = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(`Message from server - ${data}`);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write('Name: LS');
    // conn.write("Say: Mama Mia!");
    // conn.write('Move: up');
    // setInterval(() => {
    //   conn.write('Move: right');
    // }, 100);
  });
  return conn;
};

module.exports = { connect };
