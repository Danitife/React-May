import useFetch from './Fetch';

const Signup = () => {

 
    const {data, err} = useFetch("http://localhost:1234/posts")
    console.log(data);
    console.log(err);
    
  return (
    <>
        <h1>Axios Page</h1>
    </>
  )
}

export default Signup