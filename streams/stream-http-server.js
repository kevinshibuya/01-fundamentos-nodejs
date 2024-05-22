import http from "node:http";
import { Transform } from "node:stream";

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const inverted = Number(chunk.toString()) * -1;

    console.log(inverted);

    callback(null, Buffer.from(String(inverted)));
  }
}

const server = http.createServer((req, res) => {
  return req.pipe(new InverseNumberStream()).pipe(res);
});

server.listen(3334);
