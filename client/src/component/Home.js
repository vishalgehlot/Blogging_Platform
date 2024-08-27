import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import './Home.css';
import Header from './Header';
import About from './About';
import BlogPost from './BlogPost';

function Home() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleCreatePost = () => {
    if (isLoggedIn === "true") {
      navigate("/create-post");
    } else {
      navigate("/signup");
    }
  };

  return (
    <>
      <div className='position-fixed w-100' style={{ zIndex: 5 }}>
        <Header />
      </div>

      <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                    <div className="row">
                      <div className="col-lg-12">
                        <h2 className='fw-bold m-0' id='logo' style={{ color: 'white' }}>
                          <span style={{ color: '#FFA500' }}>B</span>logging<span style={{ color: "orange" }}>&nbsp;P</span>latform
                        </h2>
                        <h3 style={{ marginTop: '15px', color: 'white' }}>
                          Your ultimate destination for sharing and discovering incredible content.
                        </h3>
                        <p className='mt-4' style={{ color: 'white' }}>
                          With Blogging Platform, you can effortlessly connect with fellow writers, explore diverse topics, and showcase your creativity. Start your blogging journey today and be part of a vibrant community!
                        </p>
                      </div>

                      <div className="col-lg-12">
                        <div className="white-button scroll-to-section">
                          <button className='btn btn-primary' onClick={handleCreatePost}>
                            Create Blog Post
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                    <img src={require('./image/home.png')} className="img-fluid" alt="Home" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <BlogPost />
      <Footer />
    </>
  );
}

export default Home;
