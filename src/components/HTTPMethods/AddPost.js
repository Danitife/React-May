import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { addPostt } from '../../services/allProd'
import { useDispatch, useSelector } from 'react-redux'

const AddPost = () => {
    const boldd = ()=>{
        document.execCommand("bold")
    }
    const italy = ()=>{
        document.execCommand("italic")
    }
    const underLL = ()=>{
        document.execCommand("underline")
    }
    const {isPosting,postingSuccess,postingError} = useSelector((state)=> state.allProdSlice)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [author, setauthor] = useState("")
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")

    const addPost = (e)=>{
        
        e.preventDefault()
        let data = {author, title, body:content}
        console.log(data);
        addPostt(dispatch, data)
        if(postingSuccess){
            alert(postingSuccess)
             navigate("/http")
     }
        // fetch("http://localhost:1234/posts", {
        //     headers: {
        //         "Content-Type": "application/json" 
        //     },
        //     method: "POST",
        //     body: JSON.stringify(data)
        // }).then((res)=> res.json())
        // .then((info)=>{
        //     console.log(info)
        //     navigate("/http")
        // })
        // .catch((err)=>{
        //     console.log(err);
        // })
    }
    
  return (
    <>
       <form className='w-50 p-3 rounded shadow border' action="">
        {postingError && <h1>{postingError}</h1>}
        <div className="form-group">
            <label className='text-sm text-primary' htmlFor="">Author</label>
            <input onChange={(e)=>setauthor(e.target.value)} type="text" className="form-control" />    
        </div> 
        <div className="form-group">
            <label className='text-sm text-primary' htmlFor="">Title</label>
            <input onChange={(e)=>settitle(e.target.value)} type="text" className="form-control" />    
        </div> 
        <div className="form-group">
            <label className='text-sm text-primary' htmlFor="">Content</label>
            <textarea onChange={(e)=>setcontent(e.target.value)} className='form-control' name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="text-center">
            <button onClick={addPost} className='btn btn-primary'>
                {isPosting? "Posting" : "Add Post"}
            </button>
        </div>
       </form> 
       <div contentEditable="true" style={{width: "200px", height: "200px", border: "2px solid black"}}></div>
       <button onClick={boldd}>B</button>
       <button onClick={italy}>I</button>
       <button onClick={underLL}>U</button>
    </>
  )
}

export default AddPost