import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";


function Sidebar({changestate}){

    const navigate=useNavigate();

    return(  
      <div className="Sidebar bg-primary shadow">
        <ul className="navbar-nav ">
        <li className="navbar-brand nav-item d-flex justify-content-center align-items-center">
            <i class="bi bi-emoji-wink navbar-brand-icon"></i>
            <div className="navbar-brand-name">SB ADMIN</div>
        </li>

        <div className="divider d-flex justify-content-center"><hr></hr></div>

        <li className="nav-item d-flex ">
            
            <button className="btn btn-primary sbtn" onClick={()=>{
                navigate('/admin-dashboard')
            }}><i class="bi bi-speedometer2"></i><span className="btnname">Dashboard</span></button>
        </li>
        <div className="divider d-flex justify-content-center"><hr></hr></div>
        <div className="navbar-heading">INTERFACE</div>
        <li className="nav-item">
            <a className="nav-link">
                <button className="btn btn-primary sbtn" data-bs-toggle='collapse' data-bs-target='#Componentscontent'><i class="bi bi-gear"></i><span className="btnname">Components</span></button>
            </a>
            <div id="Componentscontent" className="collapse">
               <div className="d-flex justify-content-center">
               <div className="buttons d-flex flex-column">
                    <div className="btnheading">CUSTOM COMPONENTS:</div>
                    <button className="btn btn-light sbtn" onClick={()=>{
                        navigate('/Buttons')
                    }}>Buttons</button>
                    <button className="btn btn-light sbtn" onClick={()=>{
                        navigate('/Cards')
                    }}>Cards</button>
               </div>
               </div>
            </div>
        </li>

        <li className="nav-item" >
            <a className="nav-link">
                <button className="btn btn-primary sbtn" data-bs-toggle='collapse' data-bs-target='#Utilitiescontent'><i class="bi bi-wrench"></i><span className="btnname">Utilities</span></button>
            </a>
            <div id="Utilitiescontent" className="collapse">
               <div className="d-flex justify-content-center">
               <div className="buttons d-flex flex-column">
               <div className="btnheading">CUSTOM UTILITIES:</div>
                    <button className="btn btn-light sbtn" onClick={()=>{
                        navigate('/Borders')
                    }}>Borders</button>
                    <button className="btn btn-light sbtn" onClick={()=>{
                        navigate('/Animations')
                    }}>Animations</button>
                </div>
               </div>
            </div>
        </li>

        <div className="divider d-flex justify-content-center"><hr></hr></div>
        <div className="navbar-heading">ADDONS</div>

        <li className="nav-item">
            <a className="nav-link">
                <button className="btn btn-primary sbtn" data-bs-toggle='collapse' data-bs-target='#Pagescontent'><i class="bi bi-folder"></i><span className="btnname">Pages</span></button>
            </a>
            <div id="Pagescontent" className="collapse">
               <div className="d-flex justify-content-center">
               <div className="buttons d-flex flex-column">
               <div className="btnheading">LOGIN SCREENS:</div>

                    <button className="btn btn-light sbtn" onClick={()=>{
                        changestate('none')
                        navigate('/Login')
                   
                    }}>Login</button>
                    
                    <button className="btn btn-light sbtn" onClick={()=>{
                        changestate('none')
                        navigate('/Register')
                    }}>Register</button>
                    <button className="btn btn-light sbtn" onClick={()=>{
                        changestate('none')
                        navigate('/ForgotPassword')
                    }}>Forgot Password</button>
                    <div className="btnheading">OTHER PAGES:</div>
                    <button className="btn btn-light sbtn" onClick={()=>{
                        navigate('/404page')
                    }}>404 page</button>
                    <button className="btn btn-light sbtn" onClick={()=>{
                        navigate('/Blankpage')
                    }}>Blank page</button>
               </div>
               </div>
    
            </div>
        </li>

        <li className="nav-item">
            <button className="btn btn-primary sbtn" onClick={()=>{
                        navigate('/Charts')
                    }}><i class="bi bi-graph-up-arrow"></i><span className="btnname">Charts</span></button>
        </li>

        
        <li></li>

      </ul>
      </div>
    )
  }
  


  const mapDispatchToProps=(dispatch)=>({
    changestate(input){
        dispatch({type:"search_set",payload:input})
    }
})


  export default connect('',mapDispatchToProps)(Sidebar);
