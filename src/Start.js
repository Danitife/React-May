import {useState} from 'react'
import Something from './Something'
import './Start.css'
const Start = ()=>{
    const [student, setstudent] = useState("")
    const [allStudent, setallStudent] = useState(["Daniel", "Samuel", "Victor", "Micheal"])
    const [check, setcheck] = useState(true)
    let arr1 = ["Who", "When", "How", "Which", "Where"]
    let arr2 = ["Since", "1902", ...arr1]
    console.log(arr2);
    const changeStud = ()=>{
        console.log(student);
    }
    const addStudents = ()=>{
        setallStudent([...allStudent, student])
    }
    const toggleTable = ()=>{
        setcheck(!check)
    }
    const myStyle = {
        backgroundColor: "tomato",
        textAlign: "center"
    }
    return(
        <>
            <Something />
            <Something />
            <div>
                <input onChange={(e)=>setstudent(e.target.value)} type="text" />
                <button onClick={addStudents}>Add stud</button>
            </div>
            <div>
                {check == true ? 
                    allStudent.map((el, i)=>(
                        <ul>
                            <li>{i+1}.{el}</li>
                        </ul>
                    )):
                <h1>Switch check to true</h1>
            }
            <button onClick={toggleTable}>{check? "Hide Table": "Show Table"}</button>
                {/* {
                    allStudent.map((el, i)=>(
                        <ul>
                            <li>{i+1}.{el}</li>
                        </ul>
                    ))
                } */}
                <h1>{student}</h1>
                {/* <button onClick={()=>setstudent("Samuel")}>Change student</button> */}
                <button onClick={changeStud}>Change student</button>
                <h1 style={{fontSize: "50px", fontFamily: "cursive"}}>This is the {Math.floor(Math.random()*9999999)} start component</h1>
                <h1 style={myStyle}>Lorem ipsum dolor sit.</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <i className="bi bi-3-circle fs-1 text-danger"></i>
                <img src={require('./img/axios.png')} alt="" />
                <img src={require('./img/grading UI.PNG')} alt="" />
                <button className='mybtn'>Click me</button>
        </div>
        <div>
            <h1>Lorem, ipsum dolor.</h1>
        </div>
            <Something />
        </>
    )
}

export default Start