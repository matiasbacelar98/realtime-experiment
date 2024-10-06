import { createServer } from 'http';

import express from 'express';

import { Server, Socket } from 'socket.io';
import { faker } from '@faker-js/faker';

const PORT = 5000;

/** Server setup */
const app = express();

/** Router */
const router = express.Router();
router.get('/', (req, res) => {
  console.log(faker.lorem.lines(1));
  res.send({ response: 'I am alive' }).status(200);
});
app.use(router);

/** Socket IO */
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
  },
});

let interval: ReturnType<typeof setInterval>;

io.on('connection', socket => {
  console.log('New client connected');

  if (interval) clearInterval(interval);

  interval = setInterval(() => emitPost(socket), 2000);

  socket.on('disconnect', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});

function emitPost(socket: Socket) {
  const post = faker.lorem.lines(1);
  socket.emit('POSTS', post);
}

/** Run server */
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
