import  { useEffect, useState } from 'react'

const API = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {

    fetch("https://api.themoviedb.org/3/movie/popular?api_key=d75848771df232ce858b0942465a7d47")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMovies(data.results)
      })

  }, [])

  return (
    <>
      <h1>Netflix Clone</h1>

      {/* {
        movies.map((movie) => (
          <div key={movie.id}>

            <h2>{movie.title}</h2>

            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt=""
            />

          </div>
        ))
      } */}


      <div>

  <h2>{movies[0]?.title}</h2>

  <img
    src={`https://image.tmdb.org/t/p/w200${movies[0]?.poster_path}`}
    alt=""
  />

</div>
    </>
  )
}

export default API