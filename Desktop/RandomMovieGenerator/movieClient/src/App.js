import './App.css';
import { useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import { Link, Routes, Route } from "react-router-dom"; 
import Add from './Add';
import Catalog from './Catalog';
import Home from './Home';


function App() {
  const [data, setData] = useState([]);


  const getMovies = async () => {
    const response = await fetch("https://localhost:7265/Movie");
    const deserializedJSON = await response.json();
    setData(deserializedJSON);
  }

  useEffect(() => {
    getMovies();
  },[])

  return (
    <div className="App">
       <nav className='topnav'> 
          <Link className='nav-item' to="/">Home</Link> 
        
          <Link className='nav-item' to="/add">Add</Link> 
         
          <Link className='nav-item' to="/catalog">Catalog</Link>
        </nav>  
       
      <Routes> 
          <Route path="/" element={<Home data={data}/>}></Route> 
          <Route path="/add" element={<Add setData={setData}/>}></Route>
          <Route path="/catalog" element={<Catalog data={data} />}></Route> 
        </Routes>  
    
    </div>
  );
}

export default App;
