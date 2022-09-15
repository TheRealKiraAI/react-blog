import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'New site', body: 'lorem ipsum...', author: 'mario', id: 1},
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 1},
    { title: 'Mario kart', body: 'lorem ipsum...', author: 'toad', id: 1}
  ]);
  
  return ( 
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by: { blog.author }</p>
        </div>
      ))}
    </div>
   );
}
 
export default Home;