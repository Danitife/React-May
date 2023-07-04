import React from 'react'

const DispUser = ({allUser}) => {
    console.log(allUser);
  return (
    <>
        <div>
            {
                allUser == "" ? <h1>There are no users currently</h1>:
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUser.map((el, i)=>(
                                <tr key={i}>
                                    <td>{el.username}</td>
                                    <td>{el.userEmail}</td>
                                    <td>{el.userCountry}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }
        </div>
    </>
  )
}

export default DispUser