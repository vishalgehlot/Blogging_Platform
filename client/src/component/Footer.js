import React from 'react';
import { FaLink, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <svg style={{}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#2867E9" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>

      <div className="py-5" style={{
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(to bottom, #2867E9 0%, #007bff 70%)',
      }}>
        <div className="container text-white">
          <div className="row">
            <div className="col-md-6 col-xl-3 col-sm-12">
              <h5 className="pb-3 text-white"><i className="fa-solid fa-pen-nib pe-1"></i> Blogging Platform</h5>
              <span>
                Welcome to our Blogging Platform, where your voice matters. Create, share, and connect with a community passionate about ideas, stories, and creativity. Start your blogging journey today!
              </span>
            </div>

            <div className="col-md-6 col-xl-3 col-sm-12" style={{ marginLeft: '15%' }}>
              <h5 className="pb-3 text-white"><FaMapMarkerAlt /> Our location</h5>
              <span>
                27, Sanvid Nagar Near By <br />
                Bangali Square<br />
                Indore, Pradesh<br />
                India<br />
              </span>
            </div>
            <div className="col-md-6 col-xl-3 col-sm-12" style={{ marginLeft: '10%' }}>
              <h5 className="pb-3 text-white"><i className="fa-solid fa-paper-plane pe-1"></i> Stay updated</h5>
              <form>
                <input type="text" className="w-100 mb-2 form-control" name="" placeholder="Email ID" />
                <button className="w-100 btn btn-dark">Subscribe now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
