import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('authToken');
    console.log(token);

    try {
      const response = await axios.post(
        'http://localhost:3000/blogpost/create',
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response)
      if (response.status === 201) {
        toast.success('Blog post created successfully!');
        alert("chala re bhai")
        navigate('/');
      } else {
        toast.error('Failed to create blog post');
      }
    } catch (err) {
      toast.error('Failed to create blog post');
      console.error('Error creating post:', err);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div
        className="signin-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '50px',
          marginLeft: '30%',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          background: 'linear-gradient(to bottom, #6f42c1 0%, #007bff 100%)',
          color: 'white',
          maxWidth: '580px',
          width: '90%',
          textAlign: 'center',
        }}
      >
        <h2
          className="mb-4 text-center"
          style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}
        >
          Create New Blog Post
        </h2>

        <div
          className="form-container"
          style={{
            background: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '500px',
            marginTop: '20px',
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                style={{
                  borderColor: '#007BFF',
                  borderRadius: '5px',
                  padding: '10px',
                  width: '100%',
                  boxSizing: 'border-box',
                  marginBottom: '15px',
                }}
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                style={{
                  borderColor: '#007BFF',
                  borderRadius: '5px',
                  padding: '10px',
                  width: '100%',
                  boxSizing: 'border-box',
                  marginBottom: '15px',
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-3"
              style={{
                backgroundColor: '#007BFF',
                borderColor: '#007BFF',
                borderRadius: '5px',
                padding: '10px 20px',
                fontSize: '16px',
                fontWeight: 'bold',
                color: 'white',
                border: 'none',
                marginTop: '20px',
              }}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
