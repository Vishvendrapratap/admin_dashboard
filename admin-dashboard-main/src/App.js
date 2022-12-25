import { Routes,Route } from 'react-router-dom';
import './index.css';
import Sidebar from './Components/Sidebar';
import Maincontent from './Components/Maincontent';
import LoginPage from './Pages/LoginPage';
import { connect } from 'react-redux';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import RegisterPage from './Pages/RegisterPage';



function App(props) {

  console.log(props.location)
  const styles={
    display:props.disp
  }
  return (
      
    <div>
      <div className="wrapper" style={styles}>
      <Sidebar/>
      <Maincontent/>
    </div>
    <Routes>
      <Route path='/Login' element={<LoginPage/>}/>
      <Route path='/ForgotPassword' element={<ForgotPasswordPage/>}/>
      <Route path='/Register' element={<RegisterPage/>}/>
    </Routes>
    </div>
  );
}

const mapStateToProps=(store)=>({
  disp:store.disp
})

export default connect(mapStateToProps)(App);



