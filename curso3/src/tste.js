const express = require('express');

const server = express();

server.use(express.json());

server.post('/tste', (request, response) => {
  const { numero1, numero2 } = request.body;

  const resultado = numero1 * numero2;

  return response.json({ resultado });
});
server.listen(3333);
