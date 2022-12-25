

export default function Cards() {
    return (
        <div className="cards">

            <div className="card shadow cardone">
                <div className="card-body cbody">
                    <div className="body-content">
                        <div className="bc-name text-primary">EARNINGS (MONTHLY)</div>
                        <div className="bc-value">$40,000</div>
                    </div>
                    <i className="bi bi-calendar card-body-icon"></i>
                </div>
            </div>

            <div className="card shadow cardtwo">
                <div className="card-body cbody">
                    <div className="body-content">
                        <div className="bc-name text-success">EARNINGS (ANNUALLY)</div>
                        <div className="bc-value">$215,000</div>
                    </div>
                    <i className="bi bi-currency-dollar card-body-icon"></i>
                </div>
            </div>

            <div className="card shadow cardthree">
                <div className="card-body cbody">
                    <div className="body-content">
                        <div className="bc-name text-info">TASKS</div>
                        <div className="bc-value">
                            <div>50%</div>
                            <div className="progress">
                                <div className="progress-bar bg-info" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <i className="bi bi-clipboard card-body-icon"></i>
                </div>
            </div>

            <div className="card shadow cardfour">
                <div className="card-body cbody">
                    <div className="body-content">
                        <div className="bc-name text-warning">EARNINGS (ANNUALLY)</div>
                        <div className="bc-value">$215,000</div>
                    </div>
                    <i classeName="bi bi-chat card-body-icon"></i>
                </div>
            </div>

        </div>
    );
}
