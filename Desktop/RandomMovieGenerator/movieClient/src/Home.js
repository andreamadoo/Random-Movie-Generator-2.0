import { useState, useEffect} from 'react';
import MovieCard from './MovieCard';

const Home = ({data,setData}) => {

    const [random, setRandom] = useState({});

    const getRandom = (dataArray) => {
        setRandom(dataArray[Math.floor(Math.random()*dataArray.length)])
    }
    const hasCard = Object.keys(random).length;
    return (
        <div className='add-container'>
            <h1>Random Movie Generator</h1>
            <button className="glow-on-hover" onClick={() => getRandom(data)}>Generate Random Movie</button>
            {hasCard ? <MovieCard name={random.name} genre={random.genre} url={random.imageUrl}/> : null}
       </div>        
    )
}

export default Home;