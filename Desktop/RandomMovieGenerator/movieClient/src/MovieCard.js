


const MovieCard = ({name,genre,url}) => {

    return (
        <div className='movie-card'>
            <img src={url} width="200" height="300"/>
            <p className='name'>{name}</p>
            <p className='genre'>{genre}</p>
        </div>
    )
}

export default MovieCard