import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {

  return (
    <>
      <div className='container d-flex justify-content-center'>
            <form className='border m-3 p-3'>
                <div className='text-center'>
                    <h3>Login</h3>
                </div>
                <div>
                <label className='form-label h5 mt-2'>Email</label> <span className='text-danger'>*</span>
                <input type="email" className='form-control' required="true" />
                </div>

                <div>
                <label className='form-label h5 mt-3'>Password</label> <span className='text-danger'>*</span>
                <input  className='form-control' />
                </div>
                <br />
                <p>Don't have an account? <Link to={"/signup"}>Signup</Link></p>
                <button className='btn btn-success form-control mt-2'>Submit</button>
            </form>
        </div>
    </>
  );
};


export default Login;
