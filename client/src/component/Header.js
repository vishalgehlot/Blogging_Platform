import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Header() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const signOut = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <header className='header bg-primary text-white'>
      <div className='container mt-3'>
        <div className='row align-items-center'>
          <div className='col-md-4 d-flex align-items-center'>
            <h1
              className='logo mb-1'
              style={{
                color: '#FFA500',
                fontSize: '24px',
                fontWeight: 'bold',
              }}>
              BLOGGING <span style={{ color: '#FFD700' }}>&nbsp;PLATFORM</span>{' '}
            </h1>
          </div>
          <div
            className='col-md-8 text-md-right'
            style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
            <nav className='nav'>
              <a
                className='nav-link'
                onClick={() => navigate('/')}
                style={{ fontSize: '1.25rem', padding: '10px 20px' }}>
                Home
              </a>
              <a
                className='nav-link'
                onClick={() => navigate('/about')}
                style={{ fontSize: '1.25rem', padding: '10px 20px' }}>
                About Us
              </a>
              <a
                className='nav-link'
                onClick={() => navigate('/blogpost')}
                style={{ fontSize: '1.25rem', padding: '10px 20px' }}>
                Blog Post
              </a>
              {localStorage.getItem('isLoggedIn') === 'true' ? (
                <a className='nav-link border rounded btn btn-outline-secondary ml-12' onClick={signOut} style={{ fontSize: '1.2rem', padding: '10px 20px' }}>
                  Sign Out
                </a>
              ) : (
                <div className='text-white float-end m-2'>
                  <span
                    className='border rounded btn btn-outline-secondary ml-2'
                    onClick={() => navigate('/signin')}>
                    Sign in
                  </span>
                  <span
                    className='border rounded ms-2 btn btn-secondary ml-3'
                    onClick={() => navigate('/signup')}>
                    Sign up
                  </span>
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
