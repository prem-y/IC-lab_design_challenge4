import React from "react";
import {Link} from "react-router-dom"
const Signup = () => {

  return (
    <>
      <div className='container d-flex justify-content-center'>
            <form className='border m-3 p-3'>
                <div className='text-center'>
                    <h3>Signup</h3>
                </div>
                <label className='form-label h5'>Name</label> <span className='text-danger'>*</span>
                <div className='d-flex'>
                    <div className='me-2'>
                    <input type="text" className='form-control' required="true" />
                    <label className='form-label'>first</label>
                    </div>
                    <div>
                    <input type="text" className='form-control' required="true"/>
                    <label className='form-label'>last</label>
                    </div>
                </div>

                <div>
                <label className='form-label h5 mt-2'>Email</label> <span className='text-danger'>*</span>
                <input type="email" className='form-control' required="true" />
                <label>Please provide a valid email address</label>
                </div>

                <div>
                <label className='form-label h5 mt-3'>Password</label> <span className='text-danger'>*</span>
                <input  className='form-control' />
                <label>Make sure your password is strong</label>
                </div>
                <br />
                <span>Already have an account? <Link to={"/login"}>Login</Link></span>
                <button className='btn btn-success form-control mt-2'>Submit</button>
            </form>
        </div>
    </>
  );
};

export default Signup;
