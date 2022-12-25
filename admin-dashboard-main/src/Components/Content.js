import LineChart from "./LineChart";
import PieChart from "./PieChart";
import Cards from "./Cards";

export default function Content() {
    return (
        <div className="container-fluid">

            <div className="content-header">
                <div className="content-header-name">Dashboard</div>
                <button className="btn btn-primary content-header-button"><i className="bi bi-download"></i><span >Generate Report</span></button>
            </div>

            <div className="cardsandcharts">

                <Cards/>

                <div className="charts">
                    <LineChart/>
                    <PieChart/>
                </div>

            </div>

            <div className="subcontent">
                <div className="subcontent-1">
                    <div className="card projectscard shadow">
                        <div className="card-header projectsheader">Projects</div>
                        <div className="card-body projectsbody">

                            <div className="progress-item">
                                <div>Server Migration <span className="perc">20%</span></div>
                                <div className="progress projectsprogress">
                                    <div className="progress-bar bg-danger projectsprogressbar b1  "  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress-item">
                                <div>Sales Tracking <span className="perc">40%</span></div>
                                <div className="progress projectsprogress">
                                    <div className="progress-bar bg-warning projectsprogressbar b2" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress-item">
                                <div>Customer Database <span className="perc">60%</span></div>
                                <div className="progress projectsprogress">
                                    <div className="progress-bar bg-primary projectsprogressbar b3" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress-item">
                                <div>Payout Details <span className="perc">80%</span></div>
                                <div className="progress projectsprogress">
                                    <div className="progress-bar bg-info projectsprogressbar b4" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress-item">
                                <div>Account Setup <span className="perc">Complete!</span></div>
                                <div className="progress projectsprogress">
                                    <div className="progress-bar bg-success projectsprogressbar b5" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="colorcards">
                        <div className="card clcard bg-primary shadow">
                            <div className="card-body clbody">
                            <div className="colorname">Primary</div>
                            <div className="colorcode">#4e73df</div>
                            </div>
                        </div>
                        <div className="card clcard bg-success shadow">
                            <div className="card-body clbody">
                            <div className="colorname">Success</div>
                            <div className="colorcode">#1cc88a</div>
                            </div>
                        </div>
                        <div className="card clcard bg-info">
                            <div className="card-body clbody shadow">
                                <div className="colorname">Info</div>
                                <div className="colorcode">#36b9cc</div>
                            </div>
                        </div>
                        <div className="card clcard bg-warning">
                            <div className="card-body clbody shadow">
                            <div className="colorname">Warning</div>
                            <div className="colorcode">#f6c23e</div>
                            </div>
                        </div>
                        <div className="card clcard bg-danger">
                            <div className="card-body clbody shadow">
                            <div className="colorname">Danger</div>
                            <div className="colorcode">#e74a3b</div>
                            </div>
                        </div>
                        <div className="card clcard bg-secondary">
                            <div className="card-body clbody shadow">
                            <div className="colorname">Secondary</div>
                            <div className="colorcode">#858796</div>
                            </div>
                        </div>
                        <div className="card clcard bg-light">
                            <div className="card-body clbody text-dark shadow">
                            <div className="colorname">Light</div>
                            <div className="colorcode">#f8f9fc</div>
                            </div>
                        </div>
                        <div className="card clcard bg-dark">
                            <div className="card-body clbody shadow">
                            <div className="colorname">Dark</div>
                            <div className="colorcode">#5a5c69</div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="subcontent-2">

                    <div className="card illustrationscard shadow">
                        <div className="card-header illustrationsheader">Illustrations</div>
                        <div className="card-body illustrationsbody">
                            <div className="illustrationsimage"><img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" width={'400px'}></img></div>
                            <div className="illustrationsbodytext">
                            Add some quality, svg illustrations to your project courtesy of <a href="https://undraw.co/" target={'_blank'}>Undraw</a>, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!
                            </div>
                            <a href="https://undraw.co/" target={'_blank'}>Browse Illustrations on unDraw →</a>
                        </div>
                    </div>

                    <div className="card developmentscard shadow">
                        <div className="card-header developmentsheader">Development Approach</div>
                        <div className="card-body developmentsbody">
                            <div className="dpara-1">SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</div>
                            <div className="dpara-2">Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


