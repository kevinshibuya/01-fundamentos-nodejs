import http from "node:http";

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res.end("lista");
  }

  if (method === "POST" && url === "/users") {
    return res.end("criação");
  }

  return res.end("hello");
});

server.listen(3333);
