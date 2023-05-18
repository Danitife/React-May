import React, {useState} from 'react'
import Card from './components/Card'

const Information = () => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [myclass, setclass] = useState("")
    const [allUser, setallUser] = useState([])

    const addUser = (e)=>{
        e.preventDefault();
        let details = {username, email, myclass}
        setallUser([...allUser, details]);
        setusername("")
        setemail("")
        setclass("")
    }
    const del = (i)=>{
        console.log(i);
        let currUsers = allUser;
        currUsers.splice(i, 1)
        console.log(currUsers);
        setallUser([...currUsers])
    }
  return (
    <>
        <Card myClass="card shadow rounded w-25 p-1 bg-warning" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, suscipit?" />
        <Card myClass="card shadow rounded w-25 p-1 bg-secondary" text="This is DanielThis is DanielThis is DanielThis is DanielThis is Daniel" />
        <Card myClass="card shadow rounded w-25 p-1 bg-warning" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, suscipit?" />

        <form action="" className='w-50 p-3 mt3 rounded shadow mx-auto'>
            <div className="form-group my-2">
                <input value={username} onChange={(event)=>setusername(event.target.value)} type="text" className="form-control" placeholder='Username' />
            </div>
            <div className="form-group my-2">
                <input onChange={(event)=>setemail(event.target.value)} type="text" className="form-control" placeholder='Email' />
            </div>
            <div className="form-group my-2">
                <input onChange={(event)=>setclass(event.target.value)} type="text" className="form-control" placeholder='Class' />
            </div>
            <div>
                <button onClick={addUser} className='btn btn-success'>Add User</button>
            </div>
        </form>

        {allUser == "" ? "There are no user currently":
            <table>
                <thead>
                    <th>S/N</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Class</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {allUser.map((el, i)=>(
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{el.username}</td>
                            <td>{el.email}</td>
                            <td>{el.myclass}</td>
                            <td>
                                <button onClick={()=>del(i)} className='btn btn-sm btn-danger'>&times;</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        }
    </>
  )
}

export default Information