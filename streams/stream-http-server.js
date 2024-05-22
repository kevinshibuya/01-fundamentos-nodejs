import http from "node:http";
import { Transform } from "node:stream";

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const inverted = Number(chunk.toString()) * -1;

    console.log(inverted);

    callback(null, Buffer.from(String(inverted)));
  }
}

const server = http.createServer(async (req, res) => {
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  const fullStreamContent = Buffer.concat(buffers).toString();

  console.log(fullStreamContent);
  return res.end(fullStreamContent);
});

server.listen(3334);
