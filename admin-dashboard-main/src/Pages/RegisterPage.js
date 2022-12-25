import '../Pages/RegisterPage.css';
import { useNavigate } from 'react-router-dom';
export default function RegisterPage(){
   const navigate=useNavigate()
    return(
        <div>
            <div className='registercontainer shadow'>
                <div><img src='https://m.media-amazon.com/images/I/71Tji13jasL._AC_SL1500_.jpg' height={'400px'} width={'400px'}  style={{borderRadius:'10px'}} ></img></div>
                <div className='registerform'>
                    <div className='registertitle'>Create an Account!</div>
                    <div className='namein'>
                        <input className='form-control ni' type={'text'} placeholder={'First Name'}></input>
                        <input className='form-control ni' type={'text'} placeholder={'Last Name'}></input>
                    </div>
                    <div className='emailin'><input className='form-control' type={'text'} placeholder={'Email Address'}></input></div>
                    <div className='passin'>
                        <input className='form-control pi' type={'password'} placeholder={'Password'}></input>
                        <input className='form-control pi' type={'password'} placeholder={'Repeat Password'}></input>
                    </div>
                    <button className='btn btn-primary registerbtn' onClick={()=>{
                            navigate('/admin-dashboard')
                            window.location.reload()
                        }}>Register Account</button>
                    <button className='btn btn-google gb' onClick={()=>{
                            navigate('/admin-dashboard')
                            window.location.reload()
                        }}><i class="bi bi-google"></i>Login with Google</button>
                    <button className='btn btn-facebook fb' onClick={()=>{
                            navigate('/admin-dashboard')
                            window.location.reload()
                        }}><i class="bi bi-facebook"></i>Login with Facebook</button>
                    <a href='#' onClick={()=>{
                        navigate('/ForgotPassword')
                    }}>Forgot Password?</a>
                    <a href='#' onClick={()=>{
                        navigate('/Login')
                    }}>Already have an account?Login!</a>
                </div>
            </div>
        </div>
    )
}