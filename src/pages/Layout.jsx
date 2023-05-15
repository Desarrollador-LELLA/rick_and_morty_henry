import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';
import Nav from '../components/Nav';

function Layout({ onSearch, onClickMenuCerrar }) {
    return (
        <>
            <Menu onClickMenuCerrar={onClickMenuCerrar} />
            <Nav onSearch={onSearch} />
            <Outlet />
        </>
    );
}

export default Layout;