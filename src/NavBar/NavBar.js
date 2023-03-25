import {NavLink} from "react-router-dom";

function NavBar(props) {
    return (
        <>
            <ul style={{display: 'flex', listStyleType: 'none'}}>
                <li style={{marginRight: '15px'}}>
                    <NavLink style={{marginRight: '15px'}} to="/" className='link'>MainPage</NavLink>
                </li>
                <li>
                    <NavLink to="/name" className='link'>Name</NavLink>
                </li>
            </ul>
        </>
    );
}

export default NavBar;
