import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Home/HomePage'; 
import ShopPage from './Components/Shop/ShopPage';
import AddProduct from './Components/Shop/AddProduct';
import EditProduct from './Components/Shop/EditProduct';
import AboutUs from './Components/AboutUs/AboutUs';
import BlogPage from './Components/Blog/BlogPage';
import BlogDetails from './Components/Blog/BlogDetails';
import AddPost from './Components/Blog/AddPost';
import EditPost from './Components/Blog/EditPost';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage user={user} setUser={setUser}/>} />
        <Route path="/shop" element={<ShopPage user={user} setUser={setUser} />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/edit-product/:id" element={<EditProduct />} />
        <Route path="/about" element={<AboutUs user={user} setUser={setUser}/>} />
        <Route path="/blog" element={<BlogPage user={user} setUser={setUser}/>} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/admin/add-post" element={<AddPost user={user} />} />
        <Route path="/edit-post/:id" element={<EditPost user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;