import React, { useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [form, setForm] = useState({ title: '', description: '', url: '', type: 'project', githubLink: '', backgroundImage: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const endpoint = form.type === 'project' ? 'http://localhost:5000/api/projects' : 'http://localhost:5000/api/photos';
    axios.post(endpoint, form)
      .then(response => alert('Content added successfully'))
      .catch(error => console.error('Error adding content:', error));
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={form.title} onChange={handleChange} required />
        </label>
        {form.type === 'project' && (
          <div>
            <label>
              Description:
              <textarea name="description" value={form.description} onChange={handleChange} required></textarea>
            </label>
            <label>
              GitHub Link:
              <input type="text" name="githubLink" value={form.githubLink} onChange={handleChange} required />
            </label>
            <label>
              Background Image URL:
              <input type="text" name="backgroundImage" value={form.backgroundImage} onChange={handleChange} required />
            </label>
          </div>
        )}
        {form.type === 'photo' && (
          <label>
            URL:
            <input type="text" name="url" value={form.url} onChange={handleChange} required />
          </label>
        )}
        <label>
          Type:
          <select name="type" value={form.type} onChange={handleChange}>
            <option value="project">Project</option>
            <option value="photo">Photo</option>
          </select>
        </label>
        <button type="submit">Add Content</button>
      </form>
    </div>
  );
};

export default AdminPanel;
