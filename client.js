const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(`Message from server - ${data}`);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: LVS");
    // conn.write('Move: up');
    // setInterval(() => {
    //   conn.write('Move: right');
    // }, 100);
  });
  return conn;
};

module.exports = { connect };
