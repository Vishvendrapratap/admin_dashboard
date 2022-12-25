import '../Pages/ButtonsPage.css';
export default function ButtonsPage(){
    return(
        <div className="container buttonspagecontainer">
            <div className="buttonstitle">Buttons</div>
            <div className='allbuttons'>
                <div className='circlebrandbuttons'>
                    <div className='card circlebuttons shadow'>
                        <div className='circleheader'>Circle Buttons</div>
                        <div className='card-body circlebody'>
                            <div className='circlepara'>Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!</div>
                            <div>
                                <div className='circletitle'>.btn-circle</div>
                                <div className='normalbuttons'>
                                    <button className='btn btn-primary cb'><i className="bi bi-facebook ni"></i></button>
                                    <button className='btn btn-success cb'><i className="bi bi-check ni"></i></button>
                                    <button className='btn btn-info cb'><i className ="bi bi-info-circle-fill ni" style={{color:'white'}}></i></button>
                                    <button className='btn btn-warning cb'><i class="bi bi-exclamation-triangle-fill ni" style={{color:'white'}}></i></button>
                                    <button className='btn btn-danger cb'><i class="bi bi-trash-fill ni" style={{color:'white'}}></i></button>
                                </div>
                            </div>
                            <div>
                                <div className='circletitle'>.btn-circle .btn-sm</div>
                                <div className='smallbuttons'>
                                    <button className='btn btn-primary scb'><i className="bi bi-facebook si"></i></button>
                                    <button className='btn btn-success scb'><i className="bi bi-check si"></i></button>
                                    <button className='btn btn-info scb'><i className ="bi bi-info-circle-fill si" style={{color:'white'}}></i></button>
                                    <button className='btn btn-warning scb'><i class="bi bi-exclamation-triangle-fill si" style={{color:'white'}}></i></button>
                                    <button className='btn btn-danger scb'><i class="bi bi-trash-fill si" style={{color:'white'}}></i></button>
                                </div>
                            </div>
                            <div>
                                <div className='circletitle'>.btn-circle .btn-lg</div>
                                <div className='largebuttons'>
                                    <button className='btn btn-primary lcb'><i className="bi bi-facebook li "></i></button>
                                    <button className='btn btn-success lcb'><i className="bi bi-check li"></i></button>
                                    <button className='btn btn-info lcb'><i className ="bi bi-info-circle-fill li" style={{color:'white'}}></i></button>
                                    <button className='btn btn-warning lcb'><i class="bi bi-exclamation-triangle-fill li" style={{color:'white'}}></i></button>
                                    <button className='btn btn-danger lcb'><i class="bi bi-trash-fill li" style={{color:'white'}}></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card brandbuttons shadow'>
                        <div className='brandheader'>Brand Buttons</div>
                        <div className='card-body brandbody'>
                            <div className='brandpara-1'>Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages.</div>
                            <div className='brandpara-2'>You can create more custom buttons by adding a new color variable in the _variables.scss file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the _buttons.scss file.</div>
                            <div className='custombuttons'>
                                <button className='btn btn-google'>.btn-google</button>
                                <button className='btn btn-facebook'>.btn-facebook</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card splitbuttons shadow'>
                    <div className='splitheader'>Split Buttons with Icon</div>
                    <div className='card-body splitbody'>
                        <div className='splitpara'>Works with any button colors, just use the .btn-icon-split class and the markup in the examples below. The examples below also use the .text-white-50 helper class on the icons for additional styling, but it is not required.</div>
                        <div className='splitbuttons'>
                            <a className='btn btn-primary btn-icon-split'>
                                <div className='icon spliticon'><i class="bi bi-flag-fill" style={{backgroundColor:'#4262be',height:'100%',fontSize:'25px',width:'40px',borderRadius:'5px'}}></i></div>
                                <div className='splittext'>Split Button Primary</div>
                            </a>
                            <a className='btn btn-success btn-icon-split'>
                                <div className='icon spliticon'><i className="bi bi-check" style={{backgroundColor:'#18aa75',height:'100%',fontSize:'25px',width:'40px',borderRadius:'5px'}} ></i></div>
                                <div className='splittext'>Split Button Success</div>
                            </a>
                            <a className='btn btn-info btn-icon-split'>
                                <div className='icon spliticon'><i className ="bi bi-info-circle-fill " style={{color:'white',backgroundColor:'#2e9dae',fontSize:'25px',width:'40px',borderRadius:'5px'}}/></div>
                                <div className='splittext'>Split Button Info</div>
                            </a>
                            <a className='btn btn-warning btn-icon-split'>
                                <div className='icon spliticon'><i class="bi bi-exclamation-triangle-fill " style={{color:'white',backgroundColor:'#d1a535',fontSize:'25px',width:'40px',borderRadius:'5px'}}></i></div>
                                <div className='splittext'>Split Button Warning</div>
                            </a>
                            <a className='btn btn-danger btn-icon-split'>
                                <div className='icon spliticon'><i class="bi bi-trash-fill" style={{color:'white',backgroundColor:'#c53f32',height:'100%',fontSize:'25px',width:'40px',borderRadius:'5px'}}></i></div>
                                <div className='splittext'>Split Button Danger</div>
                            </a>
                            <a className='btn btn-secondary btn-icon-split'>
                                <div className='icon spliticon'><i class="bi bi-arrow-right" style={{backgroundColor:'#717380',fontSize:'25px',width:'40px',borderRadius:'5px'}}></i></div>
                                <div className='splittext'>Split Button Secondary</div>
                            </a>
                            <a className='btn btn-light btn-icon-split'>
                                <div className='icon spliticon'><i class="bi bi-arrow-right" style={{backgroundColor:'#d3d4d6',fontSize:'25px',width:'40px',borderRadius:'5px'}}></i></div>
                                <div className='splittext'>Split Button Light</div>
                            </a>
                            
                        </div>
                        <div className='splitpara'>Also works with small and large button classes!</div>
                        <div>
                            <a className='btn btn-primary btn-icon-split btn-small'>
                                <div className='icon spliticon'><i class="bi bi-flag-fill" style={{backgroundColor:'#4262be',height:'100%',fontSize:'16px',width:'30px',borderRadius:'5px'}}></i></div>
                                <div className='splittextsmall'>Split Button Small</div>
                            </a>
                            <a className='btn btn-primary btn-icon-split btn-large'>
                                <div className='icon spliticon'><i class="bi bi-flag-fill" style={{backgroundColor:'#4262be',height:'100%',fontSize:'32px',width:'50px',borderRadius:'5px'}}></i></div>
                                <div className='splittextlarge'>Split Button Large</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}