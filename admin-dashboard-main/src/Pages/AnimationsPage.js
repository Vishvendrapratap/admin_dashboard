import '../Pages/AnimationsPage.css';
export default function AnimationsPage(){
    return(
        <div className="container animationscontainer">
            <div>
                <div className='animtitle'>Animations Utilities</div>
                <div className='animpara'>Bootstrap's default utility classes can be found on the official <a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/" style={{textDecoration:'none'}} target='_blank'>Bootstrap Documentation</a> page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</div>
            </div>

            <div className="animationcards">

                <div className="card growanimcard shadow">
                    <div className="card-header growanimcardheader">Grow In Animation Utilty</div>
                    <div className="card-body growanimbody">
                        <div className="growpara-1">.animated--grow-in</div>
                        <div className="growpara-2">
                            <div>Navbar Dropdown Example:</div>
                            <nav className="navbar grownavbar">
                                <div className="navbar-brand">Navbar</div>
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                    <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown button</button>
                                        <ul className="dropdown-menu position-absolute growmenu">
                                            <li><a className='dropdown-item'>Action</a></li>
                                            <li><a className='dropdown-item'>Another Action</a></li>
                                            <li><hr className="dropdown-divider"></hr></li>
                                            <li><a className="dropdown-item">Something else here</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="growpara-3">Note: This utility animates the CSS transform property, meaning it will override any existing transforms on an element being animated! In this theme, the grow in animation is only being used on dropdowns within the navbar.</div>
                    </div>
                </div>

                <div className="card fadeanimcard shadow">
                    <div className="card-header fadeanimcardheader">Fade In Animation Utilty</div>
                    <div className="card-body fadeanimbody">
                        <div className="fadepara-1">.animated--grow-in</div>
                        <div className="fadepara-2">
                            <div>Navbar Dropdown Example:</div>
                            <nav className="navbar fadenavbar">
                                <div className="navbar-brand">Navbar</div>
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown button</button>
                                        <ul className="dropdown-menu position-absolute fademenu">
                                            <li><a className='dropdown-item'>Action</a></li>
                                            <li><a className='dropdown-item'>Another Action</a></li>
                                            <li><hr className="dropdown-divider"></hr></li>
                                            <li><a className="dropdown-item">Something else here</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div>
                            <div style={{fontSize:'small',marginBottom:'10px'}}>Dropdown Button Example:</div>
                            <div className='dropdown'>
                                <button className='btn btn-primary dropdown-toggle' type='button' data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                                <ul className='dropdown-menu fademenu'>
                                    <li><a className='dropdown-item'>Action</a></li>
                                    <li><a className='dropdown-item'>Another Action</a></li>
                                    <li><a className="dropdown-item">Something else here</a></li>
                                </ul>
                            </div>
                            
                            
                        </div>
                        <div className="fadepara-3">Note: This utility animates the CSS opacity property, meaning it will override any existing opacity on an element being animated!</div>
                    </div>
                </div>

            </div>
        </div>
    )
}