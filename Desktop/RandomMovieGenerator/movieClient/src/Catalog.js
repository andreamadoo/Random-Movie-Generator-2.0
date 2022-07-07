import MovieCard from "./MovieCard";

const Catalog = ({data}) => {
return (
    <div className="catalog">
        {data.map((item) => {
        return (
          <MovieCard key={item.name} name={item.name} genre={item.genre} url={item.imageUrl}/>)
      })}
    </div>
)
}

export default Catalog;