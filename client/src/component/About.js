import React from 'react';
const About = () => {
  return (
    <section className="py-3 py-md-5 bg-dark text-white" id="about">
      <h2 className="container text-center">About <span className="text-primary">Us</span></h2>
      <div className="container mt-5">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <img class="img-fluid rounded" loading="lazy" src="https://www.id123.io/wp-content/uploads/2021/01/professional-id-header-2021-600x546.jpg" alt="About 1" />
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11">
                <h2 className="mb-3">Who Are We?</h2>
                <p className="lead fs-4 text-secondary mb-3">
                  Blogging Platform is your go-to destination for discovering, sharing, and creating compelling content.
                </p>
                <p className="mb-5">
                  We provide a vibrant community where bloggers from around the globe can connect, share ideas, and inspire one another. Whether you're an aspiring writer or a seasoned blogger, our platform offers the tools you need to bring your content to life.
                </p>
                <div className="row gy-4 gy-md-0 gx-xxl-5X">
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                          <path d="M12.854.146a.5.5 0 0 1 .11.63l-.046.073-9 10a.5.5 0 0 1-.593.093l-.07-.057-4-3a.5.5 0 0 1 .63-.775l.073.047L3.5 10.792V2.5a.5.5 0 0 1 .41-.492l.09-.008h8a.5.5 0 0 1 .396.14zM4.146 11.854l-3 3L1.293 16H14.5a.5.5 0 0 1 .09 1H1.707a1 1 0 0 1-.707-.293l-1-1a1 1 0 0 1-.293-.707V10.5a.5.5 0 0 1 .793-.4l.063.06L4.146 11.854z" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="h4 mb-3">Creative Freedom</h2>
                        <p className="text-secondary mb-0">
                          Empower your voice with our versatile tools for content creation and management.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                          <path d="M13 7c1.657 0 3-1.343 3-3S14.657 1 13 1s-3 1.343-3 3 1.343 3 3 3zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM3 7c1.657 0 3-1.343 3-3S4.657 1 3 1 0 2.343 0 4s1.343 3 3 3zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm10 8a5 5 0 0 1-4-2.064c-.5-.61-1.27-.936-2.156-.936-.886 0-1.656.326-2.156.936A5 5 0 0 1 1 14v1h12v-1zM8 11c-1.653 0-3 1.343-3 3h6c0-1.657-1.347-3-3-3zM4.684 13a4.956 4.956 0 0 1 2.316-.59c.888 0 1.657.326 2.156.936A5 5 0 0 1 13 14v1H3v-1c0-.802.211-1.554.684-2.064z" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="h4 mb-3">Community Driven</h2>
                        <p className="text-secondary mb-0">
                          Join a dynamic community of bloggers, share ideas, and grow together.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
