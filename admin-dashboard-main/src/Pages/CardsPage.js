import '../Pages/CardsPage.css';
import Cards from '../Components/Cards';
export default function CardsPage(){
    return(
        <div className='container cardspagecontainer'>
            <div className='cardspagetitle'>Cards</div>
            <Cards/>
            <div className='cardspagecards'>
                <div className='cardspagecard'>
                <div className='card defaultcard'>
                    <div className='card-header defaultheader'>Default Card Example</div>
                    <div className='card-body'>This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.</div>
                </div>
                <div className='card basiccard shadow'>
                    <div className='card-header basicheader'>Basic Card Example</div>
                    <div className='card-body'>The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!</div>
                </div>
                </div>

                <div className='cardspagecard'>
                <div className='card dropdowncard shadow'>
                    <div className='card-header dropdownheader drop'>Dropdown Card Example
                    <span className='dropdown' >
                        <button className='btn' data-bs-toggle='dropdown' style={{border:'1px solid rgba(248,249,252,255)'}}><i class="bi bi-three-dots-vertical"></i></button>
                        <ul className='dropdown-menu'>
                            <li className='dropdown-item'>Action</li>
                            <li className='dropdown-item'>Another Action</li>
                            <li className='dropdown-divider'></li>
                            <li className='dropdown-item'>Something else here</li>
                        </ul>
                    </span>
                        </div>
                    <div className='card-body'>Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.</div>
                </div>
                <div className='card collapsablecard shadow' data-bs-toggle='collapse' data-bs-target='#collapsablecardcontent'>
                    <div className='card-header collapsableheader' data-bs-toggle='collapse' data-bs-target='#collapsablecardcontent'>Collapsable Card Example</div>
                    <div className='card-body' id='collapsablecardcontent'>This is a collapsable card example using Bootstrap's built in collapse functionality. Click on the card header to see the card body collapse and expand!</div>
                </div>
                </div>
            </div>
        </div>
    )
}