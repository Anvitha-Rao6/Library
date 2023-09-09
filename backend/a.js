const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4500;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/abctest', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a Mongoose schema and model
const bookSchema = new mongoose.Schema({
  title: String,
});

const Book = mongoose.model('Book', bookSchema);

// Middleware to parse JSON data
app.use(cors());
app.use(express.json());

// Route to handle form submissions
app.post('/add-book', async (req, res) => {
  try {
    const { title } = req.body;

    // Create a new book document and save it to the database
    const newBook = new Book({ title });
    await newBook.save();

    res.status(200).json({ message: 'Book saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error saving book' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
