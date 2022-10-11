import { useState, useEffect } from 'react';
import BlogList from './BlogList';

// npx json-server --watch data/db.json --port 8000
/* Endpoints for fake data in JSON
    /blogs      |   GET   | Fetch all blogs
    /blogs/{id} |   GET   | Fetch single blog
    /blogs      |   POST  | Add a new blog
    /blogs/{id} | DELETE  | Delete a blog
*/

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const [name, setName] = useState('mario');

  // useEffect re-renders code whenever name state changes
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      setBlogs(data)
      setIsPending(false);
    });
  }, []);

  return ( 
    <div className="home">
      { isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
      {/* <button onClick={() => setName('luigi')}> change name </button>
      <p>{name}</p> */}
    </div>
   );
}
 
export default Home;