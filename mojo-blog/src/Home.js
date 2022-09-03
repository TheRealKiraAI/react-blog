import { useState } from 'react';

const Home = () => {
  // let name = 'mojo';
  const [name, setName] = useState('mojo');
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName('jojo');
    setAge(30);
  }

  const clickAgain = (name, e) => {
    console.log('hello ' + name, e.target);
  }
  
  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => clickAgain('mojo')}>Click again</button>
    </div>
   );
}
 
export default Home;