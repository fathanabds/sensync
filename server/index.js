const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');
const BookController = require('./controllers/BookController');

const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

app.get('/books', BookController.findAll);
app.post('/books', BookController.create);
app.get('/books/:id', BookController.findByPk);
app.put('/books/:id', BookController.update);
app.delete('/books/:id', BookController.destroy);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
});
