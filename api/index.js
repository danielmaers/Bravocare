
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { BASE_URL } = require("./constants");
const axios = require("axios");





conn.sync({ force: false }).then(() => {
  // server.listen(3000, async () => {
  server.listen(process.env.PORT, async () => {
    console.log(`listening at PORT ${process.env.PORT}`);
  });
});
