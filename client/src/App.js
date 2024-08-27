import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import Footer from './component/Footer';
import BlogPost from './component/BlogPost';

import CreatePost from './component/Blog/CreatePost';
import EditPost from './component/Blog/EditPost';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogpost' element={<BlogPost />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/create' element={<CreatePost />} />
        <Route path='/edit/:id' element={<EditPost />} />
      </Routes>
    </div>
  );
}

export default App;
