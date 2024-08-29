import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const PostDetails = () => {
  const { state } = useLocation();
  // const { post, setisUpdated, isUpdated } = state;
  const { post } = state;

  const [showModal, setShowModal] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedContent, setEditedContent] = useState(post.content);

  const currentUser = localStorage.getItem("currentUser");

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSaveChanges = () => {
    const data = { content: editedContent, title: editedTitle }
    axios.put(`http://localhost:3000/blogpost/update/${post._id}`, data, {
      headers: {
        Authorization: `Berear ${localStorage.getItem("authToken")}`
      }
    })
      .then(response => {
        console.log(response);
        // setisUpdated(!isUpdated);
      })
      .catch(error => {
        console.log(error);
      })

    handleCloseModal();
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="text-center" style={{ fontWeight: 'bold', color: '#343a40' }}>{post.title}</h2>
              <h6 className="text-center text-muted mb-4">by {post.author ? post.author.name : "Unknown"}</h6>

              <div className="mt-4">
                <p className="lead" style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#555' }}>
                  {post.content}
                </p>
              </div>

              {post.author && currentUser === post.author.email && (
                <div className="text-center mt-4">
                  <Button variant="warning" onClick={handleShowModal} style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#212529',
                  }}>
                    Edit Post
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Edit Post Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formContent" className="mt-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PostDetails;
