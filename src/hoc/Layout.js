import NavBar from "../NavBar/NavBar";
import {Outlet} from 'react-router-dom'

export default function Layout(props) {
    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    );
}