import '../Pages/ForgotPasswordPage.css';
import { useNavigate } from 'react-router-dom';
export default function ForgotPasswordPage(){
    const navigate=useNavigate()
    return(
        <div className="card container forgotcard shadow">
            <div className='card-body forgotbody'>
            <img className='forgotimage' src='https://pymstatic.com/26177/conversions/significado-color-rojo-small-4_3.jpg' height={'400px'} width={'400px'}  style={{borderRadius:'10px'}} ></img>

            <div className='forgotform'>
            <div className='forgotpass'>Forgot Your Password?</div>
            <div>We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</div>
            <input className='form-control ui' type={'text'} placeholder={'Enter Email Adress..'} ></input>
    
            <button className='btn btn-primary resetbtn ui'  onClick={()=>{
                navigate('/admin-dashboard')
                window.location.reload()
            }}>Reset Password</button>

            <a href='#' onClick={()=>{
                navigate('/Register')
                
            }}>Create an Account!</a>
            <a href='#' onClick={()=>{
                navigate('/Login')
            }}>Already have an account?Login!</a>
            </div>
            </div>
        </div>
    )
}