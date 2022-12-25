import '../Pages/_404Page.css';
export default function _404Page(){
    return(
        <div className="container _404container text-center">
            <div className='error'>404</div>
            <div className='pnf'>Page Not Found</div>
            <div className='pnfinfo'>
                <div>It looks like you found a glitch in the matrix...</div>
                <a href='/' style={{textDecoration:'underlined'}}>← Back to Dashboard</a>
            </div>
        </div>
    )
}