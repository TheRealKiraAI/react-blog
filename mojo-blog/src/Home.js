const Home = () => {
  
  const handleClick = (e) => {
    console.log('hello, world', e);
  }

  const clickAgain = (name, e) => {
    console.log('hello ' + name, e.target);
  }
  
  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => clickAgain('mojo')}>Click again</button>
    </div>
   );
}
 
export default Home;