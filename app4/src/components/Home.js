import React from 'react'
import {Link} from 'react-router-dom'
import "../CSS/Home.css"
const Home = () => {
  return (
    <>
      <div className='container'>
            <div className='d-flex justify-content-center my-5'>
                <div>
                    <Link to={"/login"} className='text-decoration-none'>
                        <div className='h2 border p-3 item rounded me-2'>
                            Login
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to={"/signup"} className='text-decoration-none'>
                        <div className='h2 border p-3 item rounded'>
                            Signup
                        </div>
                    </Link>
                </div>
            </div>

      </div>
    </>
  )
}

export default Home
