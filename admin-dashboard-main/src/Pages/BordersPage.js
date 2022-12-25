import '../Pages/BorderPage.css';
export default function BordersPage(){
    return(
        <div className='container borderscontainer '>
            <div>
                <div className="bordertitle">Border Utilities</div>
                <div className="borderpara">Bootstrap's default utility classes can be found on the official <a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/" style={{textDecoration:'none'}} target='_blank'>Bootstrap Documentation</a> page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</div>
            </div>
            <div className="bordercards">
                <div className="leftbordercards">
                    <div className='card lprimaryborder lcard'>
                        <div className='card-body bordercardbody'>.border-left-primary</div>
                    </div>
                    <div className='card lsecondaryborder lcard'>
                        <div className='card-body bordercardbody'>.border-left-secondary</div>
                    </div>
                    <div className='card lsuccessborder lcard'>
                        <div className='card-body bordercardbody'>.border-left-success</div>
                    </div>
                    <div className='card linfoborder lcard'>
                        <div className='card-body bordercardbody'>.border-left-info</div>
                    </div>
                    <div className='card lwarningborder lcard'>
                        <div className='card-body bordercardbody'>.border-left-warning</div>
                    </div>
                    <div className='card ldangerborder lcard'>
                        <div className='card-body bordercardbody'>.border-left-danger</div>
                    </div>
                    <div className='card ldarkborder lcard'>
                        <div className='card-body bordercardbody'>.border-left-dark</div>
                    </div>
                </div>
                <div className="bottombordercards">
                    <div className='card bprimaryborder bcard'>
                        <div className='card-body bordercardbody'>.border-bottom-primary</div>
                    </div>
                    <div className='card bsecondaryborder bcard'>
                        <div className='card-body bordercardbody'>.border-bottom-secondary</div>
                    </div>
                    <div className='card bsuccessborder bcard'>
                        <div className='card-body bordercardbody'>.border-bottom-success</div>
                    </div>
                    <div className='card binfoborder bcard'>
                        <div className='card-body bordercardbody'>.border-bottom-info</div>
                    </div>
                    <div className='card bwarningborder bcard'>
                        <div className='card-body bordercardbody'>.border-bottom-warning</div>
                    </div>
                    <div className='card bdangerborder bcard'>
                        <div className='card-body bordercardbody'>.border-bottom-danger</div>
                    </div>
                    <div className='card bdarkborder bcard'>
                        <div className='card-body bordercardbody'>.border-bottom-dark</div>
                    </div>
                </div>
            </div>
        </div>
    )
}