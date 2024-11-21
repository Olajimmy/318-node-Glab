const http = require("http");
const PORT = 3000;
console.log("hello");
http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.write("hello world");
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write("<p>I wonder what else we can send...</p>");
    res.end();
  })
  .listen(PORT, () => {
    console.log(`server runing on port ${PORT}`);
  });

//console.log(http.METHODS);
