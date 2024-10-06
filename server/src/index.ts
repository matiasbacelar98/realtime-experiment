import { createServer } from 'http';

import express from 'express';

import 'dotenv/config';

import { Server, Socket } from 'socket.io';
import { faker } from '@faker-js/faker';

const PORT = process.env.PORT || '5000';

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
    origin: process.env.ALLOWED_DOMAIN || 'http://localhost:5173',
  },
});

let interval: ReturnType<typeof setInterval>;

io.on('connection', socket => {
  console.log('New client connected');

  if (interval) clearInterval(interval);

  interval = setInterval(() => emitPost(socket, 'server'), 2500);

  socket.on('POST MSG', msg => {
    emitPost(socket, 'client', msg);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});

function emitPost(socket: Socket, type: 'server' | 'client', postMsg?: string) {
  const msg = postMsg || faker.lorem.lines(1);
  const id = faker.string.uuid();
  socket.emit('POSTS', { id, msg: msg, type });
}

/** Run server */
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
