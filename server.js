const path = require("path");
const data = require("./data.json")
const fastify = require("fastify")({
  logger: true,
});
fastify.get("/versions", function (request, reply) {
 return data.versions
});
fastify.get("/current", function (request, reply) {
   return data.current
});
fastify.get("/",() => {return `https://${process.env.PROJECT_DOMAIN}.glitch.me`})
fastify.listen(
  { port: process.env.PORT, host: "0.0.0.0" },
  function (err, address) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Your app is listening on ${address}`);
  }
);
