import express from 'express';
// import socketIO from 'socket.io';

/** Constants */
const PORT = process.env.PORT || '5000';

/** Server setup */
const app = express();

const router = express.Router();
router.get('/', (req, res) => {
  res.send({ response: 'I am alive' }).status(200);
});

/** Run server */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
