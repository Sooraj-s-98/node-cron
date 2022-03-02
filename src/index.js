var http = require("http");
var cron = require("node-cron");
//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response

    // https://www.npmjs.com/package/node-cron
    // schedule tasks to be run on the server
    cron.schedule("* * * * * *", function () {
      console.log("running a task every minute");
    });
  })
  .listen(8080); //the server object listens on port 8080
