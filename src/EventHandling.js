import {useState} from 'react'

const EventHandling = () => {
    const [title, settitle] = useState("");
    const [author, setauthor] = useState("");
    const [myValue, setmyValue] = useState(['Value1', 'Value2', 'Value3'])
    const [allValue, setallValue] = useState([])
    const addContent = ()=>{
        console.log(title);
        setallValue([...allValue, title])
        console.log(allValue);
    }
  return (
    <>
        <div className='w-25 mx-auto text-center my-5'>
            <input onChange={(e)=>settitle(e.target.value)} type="text" placeholder='Title' /> <br /><br />
            <input type="text" placeholder='Author' /> <br /><br />
            <textarea cols="30" rows="10" placeholder='content'></textarea> <br />
            <button onClick={addContent}>Add Content</button>

            {myValue.map((el, i)=>(
                <>
                    <h1>{i+1}.{el}</h1>
                </>
            ))}
        </div>
    </>
  )
}

export default EventHandling