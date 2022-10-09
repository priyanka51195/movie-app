import React, {useState} from 'react'

const AddReview = (props) => {
    const [name, setName] = useState("");
    const [review, setReview] = useState("");
    const [info, setInfo]= useState([])

    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
      };

    const handleSubmit = (event) => {
        event.preventDefault();  
        // console.log(name, review, "data")

        const data={name, review}
        if(name&&review) {
            setInfo( (ls)=>[...ls, data])
            setName("")
            setReview("")
            saveToLocalStorage(data)
        }
      }


  return (
    <div className='reviewmodal'>
            <h3>Add Review</h3> 

    <form onSubmit={handleSubmit} className="form-control">
        <label>Enter your name:  </label>
        <input 
          type="text" 
          value={name}
         onChange={(e) => setName(e.target.value)}
         /> <br/>

       <label>Add Review:  </label>
        <input 
          type="text" 
          value={review}
          onChange={(e) => setReview(e.target.value)}
         />

        <div className='d-flex justify-content-end m-4 gap-3'>
        <button type="submit">Save</button>  
        </div> 
       
        </form>    

        <div>
          { info.map( (a)=>
           <div>
             <label>Name:{a.name} </label><br></br>
            <label>Review: {a.review} </label>
            <hr></hr>
            </div>
            
           )
          
          }
           
        </div> 



    </div>
  )
}

export default AddReview;