import React from 'react';
import './BlogPost.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function BlogPost() {
  const navigate = useNavigate();
  const isLoggedIn = false;

  const handleCreateBlog = () => {
    if (isLoggedIn) {
      navigate('/createt');
    } else {
      navigate('/signup');
    }
  };

  return (
    <>
      <div id="service">
        <h2 className="container text-center p-4 mt-5 text-white">
          Our<span className="text-primary">&nbsp;Blog</span>
        </h2>
        <div className="container align-content-center">
          <p className="p-2 text-center text-white">
            Managing your blog has never been easier! With our intuitive platform, you can effortlessly create new blog posts, keeping your content fresh and engaging. Update existing posts with just a few clicks to keep your information current. Deleting posts is equally simple, helping you maintain a clutter-free blog. Plus, view all your posts in one place, making it easy to keep track of your content and monitor your blog’s growth. Get started today and take full control of your blogging journey!
          </p>
          <center>
            <hr className="w-25" />
          </center>
        </div>
        <div className="profile mt-3" style={{ margin: '0', padding: '0', top: "0" }}>
          <div className="card m-1 m-lg-3">
            <div className="content">
              <div className="first">
                <div className="imgBx">
                  <img src="https://firmbee.com/wp-content/uploads/foto_1200x900-kopia-7-900x675.png" alt="JavaScript BlogPost Image" />
                </div>
                <div className="contentBx">
                  <h4>JavaScript ES6</h4>
                  <p>Create your Blog</p>
                  <div>
                    <FaLinkedin className="icon linkedin-icon fs-2 m-1" />
                    <FaInstagram className="icon instagram-icon fs-2 m-1" />
                    <FaFacebook className="icon facebook-icon fs-2 m-1" />
                  </div>
                </div>
              </div>
              <div className="second">
                <h3>JavaScript ES6</h3>
                <p>
                  JavaScript is a versatile, high-level programming language primarily used for creating dynamic and interactive elements on websites. It enables developers to build web applications form validation, interactive maps, and real-time updates. JavaScript runs in the browser.
                </p>
                <button onClick={handleCreateBlog} style={{ width: '120px', height: '35px', color: 'black', background: 'none', backgroundColor: 'white', borderRadius: '5%', padding: 0, cursor: 'pointer' }}>Create Blog</button>
              </div>
            </div>
          </div>

          <div className="card m-1 m-lg-3">
            <div className="content">
              <div className="first">
                <div className="imgBx">
                  <img src="https://www.hindustantimes.com/ht-img/img/2024/04/11/550x309/gc308d801ffb4b08e939_1712857798644_1712857798930.jpg" alt="HTML" />
                </div>
                <div className="contentBx">
                  <h4>Meditation</h4>
                  <p>Create your Blog</p>
                  <div>
                    <FaLinkedin className="icon linkedin-icon fs-2 m-1" />
                    <FaInstagram className="icon instagram-icon fs-2 m-1" />
                    <FaFacebook className="icon facebook-icon fs-2 m-1" />
                  </div>
                </div>
              </div>
              <div className="second">
                <h3>Meditation</h3>
                <p>
                  Meditation is a practice designed to cultivate mindfulness, concentration, and tranquility. It involves focusing the mind, often through techniques such as deep breathing, visualization, or mantra repetition, to achieve a state of mental clarity and relaxation.
                </p>
                <button onClick={handleCreateBlog} style={{ width: '120px', height: '35px', color: 'black', background: 'none', backgroundColor: 'white', borderRadius: '5%', padding: 0, cursor: 'pointer' }}>Create Blog</button>
              </div>
            </div>
          </div>

          <div className="card m-1 m-lg-3">
            <div className="content">
              <div className="first">
                <div className="imgBx">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN8AieTiQ9AzfTDsyism1fuV9dSZVfSlKGyg&s" alt="HTML" />
                </div>
                <div className="contentBx">
                  <h4>Travel</h4>
                  <p>Create your Blog</p>
                  <div>
                    <FaLinkedin className="icon linkedin-icon fs-2 m-1" />
                    <FaInstagram className="icon instagram-icon fs-2 m-1" />
                    <FaFacebook className="icon facebook-icon fs-2 m-1" />
                  </div>
                </div>
              </div>
              <div className="second">
                <h3>Travelling Other City</h3>
                <p>
                  Kyoto, Japan's ancient capital, is a city steeped in history, tradition, and breathtaking beauty. Nestled in the heart of the Kansai region, Kyoto is famous for its temples, shrines, and traditional wooden houses <br />
                  <button onClick={handleCreateBlog} style={{ width: '120px', height: '35px', color: 'black', background: 'none', backgroundColor: 'white', borderRadius: '5%', padding: 0, cursor: 'pointer' }}>Create Blog</button>
                </p>
              </div>
            </div>
          </div>

          <div className="card m-1 m-lg-3">
            <div className="content">
              <div className="first">
                <div className="imgBx">
                  <img src="https://www.sonicseo.com/wp-content/uploads/2020/07/surgeon.jpg" alt="HTML" />
                </div>
                <div className="contentBx">
                  <h4>Trading</h4>
                  <p>Create your Blog</p>
                  <div>
                    <FaLinkedin className="icon linkedin-icon fs-2 m-1" />
                    <FaInstagram className="icon instagram-icon fs-2 m-1" />
                    <FaFacebook className="icon facebook-icon fs-2 m-1" />
                  </div>
                </div>
              </div>
              <div className="second">
                <h3>Trading</h3>
                <p>
                  Learning trading involves understanding market dynamics, mastering both technical and fundamental analysis, and practicing risk management. Stay disciplined, avoid emotional decisions, and always follow a well-defined trading strategy. Continuously educate yourself through courses, books, and real-time practice to keep up with market trends.
                </p>
                <button onClick={handleCreateBlog} style={{ width: '120px', height: '35px', color: 'black', background: 'none', backgroundColor: 'white', borderRadius: '5%', padding: 0, cursor: 'pointer' }}>Create Blog</button>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-5">
          <button onClick={handleCreateBlog}
            className="btn btn-primary text-white"
            style={{
              fontSize: '1.1rem',
              padding: '10px 20px',
              borderRadius: '5px'
            }}>Create Blog Post</button>
        </div>

      </div>
    </>
  );
}

export default BlogPost;

