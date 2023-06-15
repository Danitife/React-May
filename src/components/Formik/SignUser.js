import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import {ToastContainer, toast} from "react-toastify"
import * as yup from 'yup'
import axios from 'axios'
const SignUser = () => {
    const [err, seterr] = useState("")
    const [allUser, setallUser] = useState([])
    useEffect(() => {
        axios.get("http://localhost:1234/create")
        .then((res)=>{
            setallUser(res.data)
            console.log(allUser);
        }).catch((err)=>{
            console.log(err);
        })
    }, [])
    
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            username: yup.string().min(5, "name too short").required("This field is required"),
            email: yup.string().email("must be a valid email").required("This field is required"),
            password: yup.string().min(6, "Password too short").max(8, "Password too long").required("This field is required")
        }),
        onSubmit : (values)=>{
            console.log(values);
            let exist = allUser.find((el)=> el.email == values.email || el.username == values.username)
            console.log(exist);
            if(exist){
                toast.error("User already exist")
            }else{
                axios.post("http://localhost:1234/create", values).then((res)=>{
                    console.log(res);
                    toast.success("Registration Successful")
                }).catch((err)=>{
                    console.log(err);
                    seterr(err)
                    toast.error("Registration Failed")
                })
            }
            
        }  
    })
    console.log(formik.errors);
  return (
    <>
        <ToastContainer />
        <form className='w-50 p-3 mx-auto shadow' onSubmit={formik.handleSubmit} action="">
            <h1 className="text-primary">Sign up</h1>
            <div className="form-group">
                <label htmlFor="" className="text-primary text-sm">Username</label>
                <input
                 name='username'
                 onBlur={formik.handleBlur}
                 onChange={formik.handleChange}
                 type="text"
                 className={formik.errors.username ? "is-invalid form-control": "form-control"} />
                <small className='text-danger'>{formik.errors.username}</small>
            </div>
            <div className="form-group">
                <label htmlFor="" className="text-primary text-sm">Email</label>
                <input name='email' onChange={formik.handleChange} type="email" className="form-control" />
                <small className='text-danger'>{formik.errors.email}</small>
            </div>
            <div className="form-group">
                <label htmlFor="" className="text-primary text-sm">Password</label>
                <input name='password' onChange={formik.handleChange} type="password" className="form-control" />
                <small className='text-danger'>{formik.errors.password}</small>
            </div>
            <div className='text-center mt-4'>
                <button type='submit' className='btn btn-primary w-75 py-3 fw-bold'> Register</button>
            </div>
        </form>
    </>
  )
}

export default SignUser