const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();  // Load environment variables from .env file

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Atlas connection string
const mongoUri = process.env.MONGODB_URI;

// Connect to MongoDB Atlas
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch(err => {
  console.error('Error connecting to MongoDB Atlas:', err);
  process.exit(1); // Exit process with failure
});

// Define Mongoose models
const Project = mongoose.model('Project', new mongoose.Schema({
  title: String,
  description: String,
  githubLink: String,
  backgroundImage: String // Add this field to store background image URL
}));

const Photo = mongoose.model('Photo', new mongoose.Schema({
  title: String,
  url: String
}));

// Routes
app.get('/api/projects', (req, res) => {
  Project.find().then(projects => res.json(projects));
});

app.get('/api/photos', (req, res) => {
  Photo.find().then(photos => res.json(photos));
});

app.post('/api/projects', (req, res) => {
  const newProject = new Project(req.body);
  newProject.save().then(() => res.status(201).send('Project added'));
});

app.post('/api/photos', (req, res) => {
  const newPhoto = new Photo(req.body);
  newPhoto.save().then(() => res.status(201).send('Photo added'));
});

// Update a project with background image
app.put('/api/projects/:projectId', (req, res) => {
  const { backgroundImage } = req.body;
  Project.findByIdAndUpdate(req.params.projectId, { backgroundImage }, { new: true })
    .then(updatedProject => res.json(updatedProject))
    .catch(error => res.status(400).send('Error updating project'));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
