import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "blog",
    image: null,
  });
  const [resources, setResources] = useState([]);

  // Load existing resources
  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    const res = await axios.get("http://localhost:5000/api/resources");
    setResources(res.data);
  };

  // Handle form input
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Submit to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    await axios.post("http://localhost:5000/api/resources", data);
    alert("✅ Uploaded Successfully!");
    setFormData({ title: "", description: "", type: "blog", image: null });
    fetchResources();
  };

  return (
    <section className="admin-panel">
      <h2>Admin Panel</h2>

      <form onSubmit={handleSubmit} className="upload-form">
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Enter Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="blog">Blog</option>
          <option value="infographic">Infographic</option>
        </select>

        <input type="file" name="image" accept="image/*" onChange={handleChange} required />

        <button type="submit">Upload Resource</button>
      </form>

      <div className="resource-preview">
        <h3>Uploaded Resources</h3>
        <div className="admin-grid">
          {resources.map((r) => (
            <div key={r.id} className="admin-card">
              <img src={`http://localhost:5000${r.image_url}`} alt={r.title} />
              <h4>{r.title}</h4>
              <p>{r.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
