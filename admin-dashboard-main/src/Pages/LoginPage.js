import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Pages/LoginPage.css';
export default function LoginPage(){
    const navigate=useNavigate()
    return(
        <div className='loginpagecontainer '>
            <div className="card loginpagecard shadow">
                 <div className='card-body loginpagebody'>
                    <div className='loginpic'><img className='loginimage' src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MDg0NzkxMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600" width={'400px'} height={'500px'}  style={{borderRadius:'10px'}}></img></div>
                    <div className='loginform'>
                        <div className='welcome'>Welcome Back!</div>
                        <input className='form-control ui' type={'text'} placeholder={'Enter Email Adress..'} ></input>
                        <input className='form-control ui' type={'password'} placeholder={'Password'}></input>
                        <div className='checkbx'><input className='form-check-input ui' type={'checkbox'}></input><span>Remember me</span></div>

                        <button className='btn btn-primary loginbtn'  onClick={()=>{
                            navigate('/admin-dashboard')
                            window.location.reload()
                        }}>Login</button>
                       
                        <button className='btn-google ib ' onClick={()=>{
                            navigate('/admin-dashboard')
                            window.location.reload()
                        }}>Login with Google</button>

                        <button className='btn-facebook ib'  onClick={()=>{
                            navigate('/admin-dashboard')
                            window.location.reload()
                        }}>Login with facebook</button>
                      
                        <a href='#' onClick={()=>{
                            navigate('/ForgotPassword')
                        }}>Forgot Password?</a>

                        <a href='#' onClick={()=>{
                            navigate('/Register')
                        }}>Create an Account!</a>

                    </div>
                 </div>
            </div>
        </div>
    )
}