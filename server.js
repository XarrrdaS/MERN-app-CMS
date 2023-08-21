const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET, POST',
  allowedHeaders: 'Content-Type',
}));
app.use(express.json());

mongoose.connect('mongodb+srv://Content-user:FFACkzejjqcQqkl7@content.fg8uifg.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Content = mongoose.model('Content', {
  content1: String,
  content2: String,
  content3: String,
  content4: String,
});

app.get('/api/data', async (req, res) => {
  try {
    const data = await Content.findOne();
    if (!data) {
      return res.status(404).json({ error: 'Content not found' });
    }
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/update', async (req, res) => {
  try {
    const newContent = req.body.content;

    const contentToUpdate = await Content.findOne();
    if (!contentToUpdate) {
      return res.status(404).json({ error: 'Content not found' });
    }

    contentToUpdate.content1 = newContent.content1;
    contentToUpdate.content2 = newContent.content2;
    contentToUpdate.content3 = newContent.content3;
    contentToUpdate.content4 = newContent.content4;

    await contentToUpdate.save();

    res.json({ message: 'Content updated successfully' });
  } catch (error) {
    console.error('Error updating content:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
