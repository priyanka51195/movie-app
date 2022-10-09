import React, { useState } from 'react';
import Rating from './Rating';
import Modal from 'react-bootstrap/Modal';
import AddReview from './AddReview';

const MovieList = (props) => {
  // console.log(props,'Amol')
 

  const [modalOpen , setModalOpen] = useState()
  const FavouiteComponent = props.FavouiteComponent
  const mainUrl='https://demo.tech2edge.co/samples/';

  const handleModalOpen =() => {
    setModalOpen(true)
  }

  const handleClose = () => setModalOpen(false);


  return (
    <>
      {props.movies.map( (movie) => 
      <div className='image-container m-3'>
        <img src={mainUrl + movie.img} alt="movies" key={movie.id} ></img>
        <div className='movie-info'>
            <h4>Name : {movie.name}</h4>
            <span>profession: {movie.profession}</span> <br/>
            <span>Age: {movie.age}</span> <br/>
            <button className='button' onClick = {handleModalOpen}>Review</button>
        </div>
        <div className='mb-4 '>
        <Rating />
        </div>
        
        <div  onClick={() => props.handleFavouiteClick(movie)} className='overlay d-flex align-items-center justify-content-center mt-2'>
        <FavouiteComponent />
        </div>
      </div>)}

      <Modal show={modalOpen} onHide={handleClose} className='modal'>
         {/* <button >x</button> */}
        <AddReview show={modalOpen} onHide={handleClose} />

      </Modal>
    </>
  )
}

export default MovieList
