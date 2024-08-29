import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const token = localStorage.getItem("authToken");
  const currentUser = localStorage.getItem("currentUser");

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/blogpost/view', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts(response.data);
    } catch (err) {
      console.error('Failed to fetch posts', err);
    }
  };

  const navigate = useNavigate();

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:3000/blogpost/delete/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Swal.fire('Deleted!', 'Your post has been deleted.', 'success');
      fetchPosts();
    } catch (err) {
      console.error('Failed to delete post', err);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '1200px', margin: 'auto' }}>
      <h2 className="text-center" style={{ color: '#007bff', fontSize: '2.5rem', fontWeight: 'bold' }}>All Blog Posts</h2>
      <div className="row mt-4">
        {posts.map((post) => (
          <div key={post._id} className="col-md-4">
            <div className="card mb-4" style={{ border: 'none', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
              <div className="card-body" style={{ padding: '20px' }}>
                <h5 className="card-title" style={{ color: '#343a40', fontSize: '1.5rem', fontWeight: 'bold' }}>{post.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted" style={{ marginBottom: '15px' }}>by {post.author ? post.author.name : "Unknown"}</h6>
                <p className="card-text" style={{ color: '#6c757d', marginBottom: '20px' }}>
                  {post.content.substring(0, 100)}...
                </p>

                <button className="btn btn-primary" onClick={() => navigate('/post', { state: { post } })} style={{
                  backgroundColor: '#007bff',
                  borderColor: '#007bff',
                  borderRadius: '5px',
                  padding: '10px 20px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: 'white',
                  textAlign: 'center',
                  marginRight: '10px',
                }}>
                  Read More
                </button>

                {post.author && currentUser === post.author.email && (
                  <button className="btn btn-danger" onClick={() => handleDeletePost(post._id)} style={{
                    borderRadius: '5px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                  }}>
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
