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
import PostDetail from './component/Blog/PostDetail';
import PosList from './component/Blog/PostList';


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
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/edit/:id' element={<EditPost />} />
        <Route path="/post" element={<PostDetail />} />
        <Route path='/postlist' element={<PosList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
