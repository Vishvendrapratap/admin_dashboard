import { Routes,Route } from 'react-router-dom';
import Content from "./Content";
import ButtonsPage from "../Pages/ButtonsPage";
import CardsPage from '../Pages/CardsPage';
import BordersPage from '../Pages/BordersPage';
import AnimationsPage from '../Pages/AnimationsPage';
import _404Page from '../Pages/_404Page';
import BlankPage from '../Pages/BlankPage';
import ChartsPage from '../Pages/ChartsPage';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';


function Maincontent({changestate}){
    const navigate=useNavigate()
    return(
      <div className="Maincontent">
          <nav className="navbar navbar-expand-lg bg-light shadow">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbarcont" id="navbarSupportedContent">

                <form>
                    <div className="input-group">
                        <input className="form-control topbarsearch"></input>
                        <div className="input-group-append">
                            <button className="btn btn-primary topbarsearchbtn"><i class="bi bi-search"></i></button>
                        </div>
                    </div>
                </form>

                <div className="OtherNavbtns">
                     <div className="notifbtn"><i class="bi bi-bell "></i></div>
                     <div className=" messagebtn"><i class="bi bi-envelope"></i></div>
                     <div className="vericalline"><div className="vr"></div></div>
                     <div className='dropdown profile'>
                     <div className="profile " data-bs-toggle={'dropdown'}>
                        <span className="profile-name">Douglas McGee</span>
                        <i class="bi bi-person-circle profile-icon"></i>
                     </div>
                     <ul className='dropdown-menu text-center libtns '>
                        <li className='btn btn-light prob'>profile</li>
                        <li className='btn btn-light prob'>Settings</li>
                        <li className='btn btn-light prob'>Activity Log</li>
                        <li className='dropdown-divider'></li>
                        <li className='btn btn-light prob' onClick={()=>{
                changestate('none')            
                navigate('/Login')
            }}>Logout</li>
                     </ul>
                     </div>
                </div>
            </div>
            </div>
        </nav>

   
    <Routes>
        <Route path="/admin-dashboard" element={<Content/>}/>
        <Route path='/Buttons' element={<ButtonsPage/>}/>
        <Route path='/Cards' element={<CardsPage/>}/>
        <Route path='/Borders' element={<BordersPage/>}/>
        <Route path='/Animations' element={<AnimationsPage/>}/>
        <Route path='/404page' element={<_404Page/>}/>
        <Route path='/Blankpage' element={<BlankPage/>}/>
        <Route path='/Charts' element={<ChartsPage/>}/>
      </Routes>
    
      <div className='footer text-center'>
      Copyright © Your Website 2022
      </div>
      </div>
    )
  }

  const mapDispatchToProps=(dispatch)=>({
    changestate(input){
        dispatch({type:"search_set",payload:input})
    }
})

  export default connect('',mapDispatchToProps)(Maincontent);


