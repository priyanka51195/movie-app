import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavouite from './components/AddFavouite';
import RemoveFav from './components/RemoveFav';
import './App.css'

const App = () => {
  const [movies, setMovies] = useState([])
  const [favouite, setFavouite] =useState([])
    const [searchValue, setSearchValue] =useState('')

    const getMovieRequest = async() => {
      try{
      const url= 'https://demo.tech2edge.co/samples/data-sg'
      const response = await fetch(url)
      const responseJson = await response.json();
       if(responseJson.characters){
        setMovies(responseJson.characters)
       }
      }catch(error){
        console.log("error", error);
      }
    }

    useEffect ( () => {
      getMovieRequest();
    }, [searchValue])

    useEffect(() => {
      const movieFavourites = JSON.parse(
        localStorage.getItem('react-movie-app-favourites')
      );
  
      if (movieFavourites) {
        setFavouite(movieFavourites);
      }
    }, []);

    const saveToLocalStorage = (items) => {
      localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    };
  

    const addFavouiteMovie =(movie) => {
       const newList = [...favouite , movie]
       setFavouite(newList )
       saveToLocalStorage(newList)
    }

    const removeFavouiteMovie =(movie) => {
      const newList= favouite.filter( (favouite) => favouite.id !== movie.id )
      setFavouite(newList)
      saveToLocalStorage(newList)
    }

  return (
    <div className='container-fluid movie-app'>
      <div className='row align-items-center mt-2 mb-2'>
      
        <MovieListHeading  heading='Movies' />
        <SearchBox  searchValue={searchValue}  setSearchValue={setSearchValue}/>
      </div>
      <div className='row'>
         <MovieList movies= {movies} handleFavouiteClick={addFavouiteMovie} FavouiteComponent={AddFavouite}/>
      </div>

      <div className='row d-flex align-items-center mt-2 mb-2'>
        <MovieListHeading  heading='Favourites'/>
      </div>

      <div className='row'>
         <MovieList movies= {favouite} handleFavouiteClick={removeFavouiteMovie} FavouiteComponent={RemoveFav}/>
      </div>
    </div>
  )
}

export default App
