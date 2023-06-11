import { Outlet } from "react-router-dom";
import MainNavigation from "./mainNavigation";

const Layout = () => {
    
    return (<>
        <MainNavigation />
        <main>
            <Outlet />
        </main>
    </>)
}

export default Layout;

// search box with filters, products, Layout