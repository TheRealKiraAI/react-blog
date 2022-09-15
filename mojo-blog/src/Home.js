import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'New site', body: 'lorem ipsum...', author: 'mario', id: 1},
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
    { title: 'Mario kart', body: 'lorem ipsum...', author: 'mario', id: 3}
  ]);

  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    // false if id doesn't match array and stays in array else true if there is a match to delete item in array
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  // useEffect re-renders code whenever name state changes
  useEffect(() => {
    console.log('use effect ran');
    console.log(name);
  }, [name]);

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
      <button onClick={() => setName('luigi')}> change name </button>
      <p>{name}</p>
    </div>
   );
}
 
export default Home;