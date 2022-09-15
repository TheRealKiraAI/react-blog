import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'New site', body: 'lorem ipsum...', author: 'mario', id: 1},
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
    { title: 'Mario kart', body: 'lorem ipsum...', author: 'toad', id: 3}
  ]);

  // use props: (1) reusable component, (2) can be used in Home if needed, (3) practice with props
  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs"/>
    </div>
   );
}
 
export default Home;