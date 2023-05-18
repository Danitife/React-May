import React from 'react'

function About(){
    let myStyle = {
        backgroundColor: 'red'
    }
    let myClass = {
        fontSize: '50px'
    }
    let myStudents = ['Stephen', 'Pesams', 'Hyzeek', 'Zlatan', 'Alhaja', 'Comfort', 'Uthman'];
    // let myStudents = [];

    let showing = true;

    const showingStudents = ()=>{
        alert("Working")
        showing = !showing;
    }
    return(
        <>
            <div>
                <h1 style={{fontFamily: 'cursive', backgroundColor: 'teal'}} className='text-danger'>Lorem ipsum dolor sit amet.</h1>
                <p style={(myStyle, {fontSize: '80px'})}> Lorem, ipsum.</p>
                <div style={{height: '200px'}} className='container-md w-sm-50 border shadow m-auto dan'></div>
                <ul>
                    {!showing ? "There are no students available":
                     myStudents.map(el=>(
                        <>
                        <li>{el}</li>
                        </>
                    ))}
                </ul>
                <button onClick={showingStudents}>Hide Student</button>
            </div>
            <div>

            </div>
        </>
    )
}
// const About = () => {
//   return (
//     <div>
        
//     </div>
//   )
// }

export default About