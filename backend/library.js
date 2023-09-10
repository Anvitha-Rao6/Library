const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000; 

app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/Library', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

const Book = mongoose.model('Book', {
  Book_Name: String,
  Author_Name: String,
});

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.post('/addBook', async (req, res) => {
  try {
    const { Book_Name, Author_Name } = req.body;
    const book = new Book({ Book_Name, Author_Name });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Unable to save the book' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
